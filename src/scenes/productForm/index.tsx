import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import InputField from "../../components/inputFields/InputField";
import '../../styles/projectForm.css'
import { addItems, editItem, getItemById } from "../../redux/actions/ItemActions";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    const isEditing = !!id;

    useEffect(() => {
        const fetchItemById = async() => {
            if (id) {
                const response = await getItemById(id);
                if (response) {
                    setName(response[0].name);
                    setDescription(response[0].description);
                    setImageUrl(response[0].imageUrl);
                    setPrice(response[0].price);
                }
            }
        }
        fetchItemById();
    }, [id])



    const handleChangePrice = (inputValue: string) => {
        // Ensure the input is a valid number and limits the decimals to 2
        if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
          setPrice(inputValue);
        }
      };

    const handleSubmitClick = async(event: React.FormEvent) => {
        event.preventDefault()
        if (name && description && price && imageUrl) {
            if (isEditing) {
                await editItem(name, description, parseFloat(price), imageUrl, id);
            } else {
                await addItems(name, description, parseFloat(price), imageUrl);
            }
            navigate(`/`);
        }
    }

    const handleCancelClick = () => {
        navigate(`/`);
      };

    return (
        <Card className="add-item-card">
            <CardContent>
                <Typography className="add-item-card-title" align="center" gutterBottom>Add New Item</Typography>
                <form>
                    <InputField 
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <InputField 
                    label="Image URL"
                    value={imageUrl}
                    type="url"
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <InputField 
                    label="Description"
                    value={description}
                    multiline={true}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <InputField 
                    label="Price"
                    value={price}
                    price={true}
                    onChange={(e) => handleChangePrice(e.target.value)}
                    />
                    <div className="btn-group" >
                        <Button type="button" variant="outlined" onClick={handleCancelClick}>Cancel</Button>
                        <Button type="submit" variant="contained" onClick={handleSubmitClick}>{isEditing ? 'Update' : 'Submit'}</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default ProductForm;