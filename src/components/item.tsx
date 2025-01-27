import '../styles/item.css'
import '../styles/projectForm.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TooltipIconButton from './buttons/ToolTipIconButton';
import { useNavigate } from 'react-router-dom';
import { deleteItem, getAllItems } from '../redux/actions/ItemActions';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';

interface ItemProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    setItems: any;
  }

const Item = (props: ItemProps) => {
    const navigate = useNavigate();
    const {id, name, price, imageUrl, description, setItems} = props;
    const [openDialog, setOpenDialog] = useState(false);

    const handleEditClick = () => {
        navigate(`/add_products/${id}`)
    }

    const handleDeleteClick = async(event: React.FormEvent) => {
        event.preventDefault()
        await deleteItem(id.toString());
        const response = await getAllItems();
        setItems(response);
    }

    return (
        <div className="item py-3" >
            <div className="d-flex flex-column align-items-center border border-secondary-subtle rounded-2">
                <img 
                className="img-thumbnail m-2" 
                alt='item'
                src={imageUrl}
                width={'250px'}
                />
                <p className="item-name m-2 my-0">{name}</p>
                <p className="item-description mx-2 my-0">{description}</p>
                <p className="item-price mb-0 mt-2">{`LKR ${price}`}</p>
                <div className='d-flex justify-content-end w-100'>
                    <TooltipIconButton tooltipText='Edit' onClick={handleEditClick}>
                        <EditIcon />
                    </TooltipIconButton>
                    <TooltipIconButton tooltipText='Delete' onClick={() => setOpenDialog(true)}>
                        <DeleteIcon />
                    </TooltipIconButton>
                </div>
            </div>
            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm Delete"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this?
                    </DialogContentText>
                </DialogContent>
                <DialogActions className="control-btn-group">
                    <Button type="button" variant="outlined" onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button type="submit" variant="contained" onClick={handleDeleteClick}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Item;