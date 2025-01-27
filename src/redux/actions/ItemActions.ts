import { deleteData, getData, postData, putData } from "../../services/HttpService";

export const getAllItems = async() => {
    try {
        const data = await getData('/', {});
        return data.items;
    } catch (error) {
        console.error('error', error);
    }
}

export const getItemById = async(id: string) => {
    try {
        const data = await getData(`/${id}`, {});
        return data.item;
    } catch (error) {
        console.error('error', error);
    }
}

export const addItems = async(name: string, description: string, price: number, imageUrl: string) => {
    const reqBody = {
        name: name,
        description: description,
        price: price,
        imageUrl: imageUrl,
      };
    try {
        const data = await postData('/add_products', reqBody);
        return data.items;
    } catch (error) {
        console.error('error', error);
    }
}

export const editItem = async(name: string, description: string, price: number, imageUrl: string, id: string) => {
    const reqBody = {
        name: name,
        description: description,
        price: price,
        imageUrl: imageUrl,
      };
    try {
        const data = await putData(`/add_products/${id}`, reqBody);
        return data.item;
    } catch (error) {
        console.error('error', error);
    }
}

export const deleteItem = async(id: string) => {
    try {
        const data = await deleteData(`/${id}`, {});
        return data.item;
    } catch (error) {
        console.error('error', error);
    }
}