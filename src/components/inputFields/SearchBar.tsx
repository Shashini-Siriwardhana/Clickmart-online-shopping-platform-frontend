import { IconButton, InputBase } from '@mui/material';
import {Search} from '@mui/icons-material';
import '../../styles/dashboard.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Products"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" aria-label="search" style={{justifySelf: 'end'}}>
            <Search />
        </IconButton>
    </div>
  );
};

export default SearchBar;
