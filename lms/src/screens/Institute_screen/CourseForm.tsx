import React, { useState } from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { fbAdd } from "../../config/firebase/fbmethods";

const FormContainer = styled(Container)({
  backgroundColor: "#f0f0f0",
  padding: "16px",
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

const CourseForm = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    duration: "",
    fee: "",
    teacher: "",
  });

  const handleChange = (prop:any) => (event:any) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = () => {

    fbAdd("courses", formData).then((res:any)=>{console.log("course added successfully")}).catch((err)=>{console.log(err)})    

    setFormData({
      courseName: "",
      duration: "",
      fee: "",
      teacher: "",
    });
  };

  return (
    <FormContainer>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormField
              label="Course Name"
              variant="outlined"
              onChange={handleChange("courseName")}
              value={formData.courseName}
            />
          </Grid>
          <Grid item xs={6}>
            <FormField
              label="Duration"
              variant="outlined"
              onChange={handleChange("duration")}
              value={formData.duration}
            />
          </Grid>
          <Grid item xs={6}>
            <FormField
              label="Fee"
              variant="outlined"
              onChange={handleChange("fee")}
              value={formData.fee}
            />
          </Grid>
          <Grid item xs={6}>
            <FormField
              label="Teacher"
              variant="outlined"
              onChange={handleChange("teacher")}
              value={formData.teacher}
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

export default CourseForm;
