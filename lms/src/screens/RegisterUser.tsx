import React, { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { fbAdd } from "../config/firebase/fbmethods";

const FormContainer = styled("div")({
  backgroundColor: "#f0f0f0",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  maxWidth: "80%",
  margin: "auto",
});

const FormField = styled(TextField)({
  marginBottom: "16px",
});

const SubmitButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "16px",
});

const RegisterUser = () => {
  const [userData, setUserData] = useState({
    username: "",
    fathername:"",
    email: "",
    password: "",
    cnic: "",
    userType: "",
  });

  const handleChange = (field: any, value: any) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  const handleSubmit = () => {

    fbAdd("users",userData).then(()=>{console.log("added successfully")}).catch((err)=>{console.log(err)})
    setUserData({username: "",
    fathername:"",
    email: "",
    password: "",
    cnic: "",
    userType: "",})
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom>
        User Registration
      </Typography>
      <form>
        <FormField
          label="Name"
          variant="outlined"
          onChange={(e) => handleChange("username", e.target.value)}
        />
         <FormField
              label="Father Name"
              variant="outlined"
              onChange={(e)=>handleChange("fathername",e.target.value)}
            />
        <FormField
          label="Email"
          variant="outlined"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <FormField
          label="Password"
          type="password"
          variant="outlined"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        
        <FormField
          label="CNIC"
          variant="outlined"
          onChange={(e) => handleChange("cnic", e.target.value)}
        />
        <FormControl variant="outlined" style={{ marginBottom: "16px" }}>
          <InputLabel>User Type</InputLabel>
          <Select
            style={{ width: "140px" }}
            label="User Type"
            placeholder="Select user type"
            onChange={(e) => handleChange("userType", e.target.value)}
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="Institute">Institute</MenuItem>
          </Select>
        </FormControl>
        <SubmitButtonContainer>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </SubmitButtonContainer>
      </form>
    </FormContainer>
  );
};

export default RegisterUser;
