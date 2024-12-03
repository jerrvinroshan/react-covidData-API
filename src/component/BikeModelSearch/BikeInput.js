import { TextField, Button } from "@mui/material";

const BikeInput = ({ fetchModel }) => {
  const handleFetch = () => {
    fetchModel();
  };

  return (
    <>
      <TextField id="bikeCompany" label="Enter Bike Company Name" />
      <Button variant="contained" onClick={handleFetch}>
        Bike Model Search
      </Button>
    </>
  );
};

export default BikeInput;
