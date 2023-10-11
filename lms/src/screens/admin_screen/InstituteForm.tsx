import React from "react";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { fbAdd } from "../../config/firebase/fbmethods";

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
  justifyContent: "space-between",
  alignItems: "center",
});

const InstituteForm = () => {
  const [Data, setData] = useState<any>({});
  const [CampusDetails, setCampusDetails] = useState<any>([]);
  const [Location, setLocation] = useState<any>("");
  const [address, setaddress] = useState<any>("");
  const [Contact, setContact] = useState<any>("");
  const [OwnerContact, setOwnerContac] = useState<any>("");
  const [OwnerEmail, setOwnerEmail] = useState<any>("");
  const [InstituteType, setInstituteType] = useState<any>("");

  const handleChange = (data: any, val: any) => {
    setData({
      ...Data,
      [data]: val,
    });
  };

  const addCampusDetail = () => {
    const newCampusDetail = {
      Location,
      address,
      Contact,
      OwnerContact,
      OwnerEmail,
    };

    setCampusDetails((prevDetails: any) => [...prevDetails, newCampusDetail]);

    setData({
      ...Data,
      campusDetails: [...CampusDetails, newCampusDetail],
      instituteType: InstituteType,
    });

    setLocation("");
    setaddress("");
    setContact("");
    setOwnerContac("");
    setOwnerEmail("");
  };

  const handleSubmit = () => {
    setData({
      ...Data,
      campusDetails: CampusDetails,
      instituteType: InstituteType,
    });

    setCampusDetails([]);


    fbAdd("Institutes", Data).then((res:any) => { console.log(res) }).catch((err) => { console.log(err)})
    console.log(Data);
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom>
        Institute Form
      </Typography>
      <form>
        <FormField
          label="Institute Name"
          variant="outlined"
          onChange={(e) => {
            handleChange("instituteName", e.target.value);
          }}
        />
        <FormField
          label="Institute Short Name"
          variant="outlined"
          onChange={(e) => {
            handleChange("instituteShortName", e.target.value);
          }}
        />
        <FormField
          label="Logo Image (dummy)"
          variant="outlined"
          onChange={(e) => {
            handleChange("image", e.target.value);
          }}
        />
        <FormField
          label="Number of Campuses"
          variant="outlined"
          onChange={(e) => {
            handleChange("NoofCampus", e.target.value);
          }}
        />
        <Typography variant="subtitle1" gutterBottom>
          Campus Detail
        </Typography>
        <FormField
          label="Location"
          variant="outlined"
          onChange={(e: any) => {
            setLocation(e.target.value);
          }}
        />
        <FormField
          label="Address"
          variant="outlined"
          onChange={(e: any) => {
            setaddress(e.target.value);
          }}
        />
        <FormField
          label="Contact"
          variant="outlined"
          onChange={(e: any) => {
            setContact(e.target.value);
          }}
        />
        <FormField
          label="Owner Contact"
          variant="outlined"
          onChange={(e: any) => {
            setOwnerContac(e.target.value);
          }}
        />
        <FormField
          label="Owner Email"
          variant="outlined"
          onChange={(e: any) => {
            setOwnerEmail(e.target.value);
          }}
        />
        <Button onClick={addCampusDetail} variant="contained" color="primary">
          Add Campus Detail
        </Button>
        <FormControl variant="outlined">
          <InputLabel>Institute Type</InputLabel>
          <Select
            style={{ paddingRight: "50px" }}
            label="Institute Type"
            onChange={(e) => setInstituteType(e.target.value)}
          >
            <MenuItem value="School">School</MenuItem>
            <MenuItem value="College">College</MenuItem>
            <MenuItem value="University">University</MenuItem>
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

export default InstituteForm;
