import { useEffect, useState } from "react";
import Item from "../../components/item";
import { getAllItems } from "../../redux/actions/ItemActions";
import SearchBar from "../../components/inputFields/SearchBar";

const Dashboard = () => {
    const [items, setItems] = useState<any>([]);

    useEffect(() => {
        const fetchItems = async() => {
            const response = await getAllItems();
            setItems(response);
        }
        fetchItems();
    }, [])

    return (
        <div style={{marginTop: '10px'}}>
            <SearchBar />
            <div className="item-container" >
                {items.length > 0 && items.map((item: any, count: number) => (
                    <Item 
                    key={item.id} 
                    id={item.id} 
                    name={item.name} 
                    price={parseFloat(item.price)} 
                    imageUrl={item.imageUrl} 
                    description={item.description}
                    setItems={setItems}
                    />
                ))}
               
            </div>
        </div>
    );
}

// const mapStateToProps = state => {
//     console.log('state', state)
//     return {
//       itemDetails: state,
//     }
//   };
  
// const mapDispatchToProps = {
//     getAllItems,
// };
  
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default Dashboard;