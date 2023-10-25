import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import background from "../images/background.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3F1D38",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          height: "100%",
          gap: 2,
          paddingLeft: 2,
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button
          component={Link}
          to="/login"
          sx={{ backgroundColor: "green", color: "white", width: "40%" }}
          variant="contained"
          color="secondary"
        >
          Login
        </Button>{" "}
        <br />
        <br />
        <Button
          component={Link}
          sx={{ backgroundColor: "green", color: "white", width: "40%" }}
          to="/registeruser"
          variant="contained"
          color="secondary"
        >
          Create Account
        </Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          paddingTop: "15%",
          paddingBottom: "16%",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#0C356A",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={background} /> */}
        <Typography
          sx={{
            marginTop: 10,
            marginBottom: 5,
            color: "#FDFFAE",
            fontWeight: "bold",
          }}
          variant="h3"
        >
          Blockchain DNS
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
