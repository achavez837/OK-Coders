import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./input.css";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="formBox">
      <p>Please Sign In to Redeem Points and Place Orders</p>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          placeholder="Please enter your email"
          style={{
            width: "400px",
            margin: "20px",
          }}
        ></TextField>
        <TextField
          variant="outlined"
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
          placeholder="Please enter your password"
          style={{
            width: "400px",
            margin: "20px",
          }}
        ></TextField>
        <Button variant="contained" type="submit" id="signInBtn">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
