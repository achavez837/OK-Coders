import React from "react";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./navbar.css";


const flowerLogo = "https://illustoon.com/photo/9964.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <ButtonGroup variant="outlined" className="btnGroup">
        <Button>
          <img className="logo" src={flowerLogo}></img>Home
        </Button>
        <Button>Contact</Button>
        <Button>locations</Button>
      </ButtonGroup>
      <TextField
        id="filledSearch"
        label="Search..."
        type="search"
        variant="filled"
      />
    </div>
  );
};

export default Navbar;
