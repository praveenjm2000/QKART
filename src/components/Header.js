import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack, TextField, InputAdornment } from "@mui/material";
import { Search, SentimentDissatisfied } from "@mui/icons-material";
import Box from "@mui/material/Box";
import React, {useEffect, useState } from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";


const Header = ({ children, hasHiddenAuthButtons, handleChange}) => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  //console.log(loggedIn);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    checkLoggedIn()
  }, []);

  const checkLoggedIn = () => {
    if(localStorage.getItem("username")===null){
      setLoggedIn(false);
    }
    else{
      setLoggedIn(true);
    }
  }

    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children ? (<TextField
          className="search-desktop"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          placeholder="Search for items/categories"
          name="search"
          onChange={event => handleChange(event)}
        />) : 
        (<></>)}
        {hasHiddenAuthButtons ? (
          loggedIn ? (
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src="avatar.png" alt={localStorage.getItem("username")} />
              <div>{localStorage.getItem("username")}</div>
              <Button
                className="explore-button"
                variant="text"
                onClick={()=>{
                  localStorage.clear();
                  window.location.reload();
                  history.push('/')}}
                >
                LOGOUT
              </Button>
            </Stack>) : (
            <Stack direction="row" spacing={1}>
              <Button
               className="explore-button"
                variant="text"
                onClick={()=>{history.push('/login',{from: "Products"})}}
                >
                Login
                </Button>
              <Button
               className="button"
                variant="contained"
                onClick={()=>{history.push('/register',{from: "Products"})}}
                >
                  Register
                </Button>
            </Stack>)
        ) : 
          (<Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>{history.push('/')}}
          >
          Back to explore
        </Button> )}
      </Box>
    );
};

export default Header;
