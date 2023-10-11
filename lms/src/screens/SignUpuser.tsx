import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fbSignUp } from "../config/firebase/fbmethods";

export default function Signupuser() {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();

  const fillModel = (key: any, val: any) => {
    setModel({ ...model, [key]: val });
  };

  let signUpuser = () => {
    
    fbSignUp(model).then((res) => {
      if(model.role=="admin"){
        navigate("/admin")
      }
      else {
        navigate("/student")
      }
    }).catch((err) => {
      console.log(err);
    })
  }
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Paper sx={{ padding: "20px", maxWidth: "400px", width: "100%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Signup
        </Typography>
        <TextField
          fullWidth
          onChange={(e) => fillModel("username", e.target.value)}
          variant="outlined"
          margin="normal"
          label="UserName"
        />
        <TextField
          fullWidth
          onChange={(e) => fillModel("email", e.target.value)}
          variant="outlined"
          margin="normal"
          label="Email"
        />
        <TextField
          fullWidth
          onChange={(e) => fillModel("password", e.target.value)}
          variant="outlined"
          margin="normal"
          type="password"
          label="Password"
        />

        <TextField
          fullWidth
          onChange={(e) => fillModel("role", e.target.value)}
          variant="outlined"
          margin="normal"
          label="role"
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={signUpuser}
          sx={{ marginTop: "20px" }}
        >
          Signup
        </Button>
      </Paper>
    </Box>
  );
}
