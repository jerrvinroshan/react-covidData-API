import { Button, TextField } from '@mui/material';

const CountryInput = ({ fetchData }) => {
    const handleFetch = () => {
        fetchData();
    };

    return (
        <div className='Container'>
            <TextField
                id="countryInput"
                label="Enter country name"
            />
            <Button 
            type='button' 
            id='outputDisplay' 
            variant='contained'
             size="medium"
            onClick={handleFetch}>
                Fetch Data
            </Button>
        </div>
    );
};

export default CountryInput;
