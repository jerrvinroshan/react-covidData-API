import React from "react";
import { Button, TextField, Box } from "@mui/material";
import "../../assets/style.css"

const JobSearchForm = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Box className = "FormContainer" sx={{ 
        mt: 2, 
        display :'flex', 
        justifyContent: 'start',
        pt:2,
        pb:2,
        pr:2,
        }}>
      <TextField
        type="text"
        name="query"
        placeholder="Job Title"
        value={formData.query}
        onChange={handleChange}
      />
      <TextField
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />
      <Button variant="contained" type="submit">
        Search Jobs
      </Button>
    </Box>
  </form>
);

export default JobSearchForm;
