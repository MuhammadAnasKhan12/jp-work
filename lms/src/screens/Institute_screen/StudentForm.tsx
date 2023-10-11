import React, { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { fbAdd } from "../../config/firebase/fbmethods";

const FormContainer = styled(Container)({
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

const StudentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    fathername: "",
    userType:"Student",
    contact: "",
    cnic: "",
    lastQualification: "",
    course: "",
    institute: "Your Institute",
    section: "",
    email: "",
    password: "",
    city: "",
    country: "",
    dob: "",
    gender: "male",
    address: "",
  });

  const handleChange = (prop:any) => (event:any) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    fbAdd("users", formData)
      .then((res: any) => {
        console.log("Student added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormContainer>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Student Name"
              variant="outlined"
              onChange={handleChange("username")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Father Name"
              variant="outlined"
              onChange={handleChange("fathername")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Contact"
              variant="outlined"
              onChange={handleChange("contact")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="CNIC"
              variant="outlined"
              onChange={handleChange("cnic")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Last Qualification"
              variant="outlined"
              onChange={handleChange("lastQualification")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Course"
              variant="outlined"
              onChange={handleChange("course")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Section"
              variant="outlined"
              onChange={handleChange("section")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Email"
              variant="outlined"
              onChange={handleChange("email")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Password"
              type="password"
              variant="outlined"
              onChange={handleChange("password")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="City"
              variant="outlined"
              onChange={handleChange("city")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              label="Country"
              variant="outlined"
              onChange={handleChange("country")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type="date"
              variant="outlined"
              onChange={handleChange("dob")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange("gender")}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              label="Address"
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChange("address")}
            />
          </Grid>
        </Grid>
        <SubmitButtonContainer>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </SubmitButtonContainer>
      </form>
    </FormContainer>
  );
};

export default StudentForm;
