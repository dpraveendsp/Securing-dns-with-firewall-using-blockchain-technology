import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Snackbar,
  IconButton,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Alert } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [orgName, setorgName] = useState("");
  const [token, setToken] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:4000/users/login";
    const formData = {
      username,
      orgName,
    };
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        setUsername("");
        setorgName("");
        setToken(response.data.message.token);
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(formData);
    // console.log(token);
    // const apiResponse = response.data.message.token;
  };
  const [open, setOpen] = useState(false);
  const showSnackbar = () => {
    setOpen(true);
    alert({ username, orgName });
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    // showSnackbar();
  };
  const apiResponse = token;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: 10,
        backgroundColor: "#3F1D38",
        height: "100vh",
      }}
    >
      <Paper sx={{ padding: 4, width: "70%" }}>
        <Typography
          sx={{ margin: 2, fontWeight: "bold", color: "green" }}
          variant="h4"
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            sx={{ width: "70%" }}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <br />
          <TextField
            select
            label="User Type"
            value={orgName}
            sx={{ width: "70%" }}
            onChange={(e) => setorgName(e.target.value)}
          >
            {" "}
            <br />
            <br />
            <MenuItem value="Org1">Personal</MenuItem>
            <MenuItem value="Org2">Business</MenuItem>
            <MenuItem value="Org3">General User</MenuItem>
          </TextField>{" "}
          <br />
          <br />
          <Button
            sx={{ width: "70%" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
          <br />
          <br />
          <Button
            component={Link}
            sx={{ backgroundColor: "green", color: "white", width: "70%" }}
            to="/createdomain"
            variant="contained"
            color="secondary"
          >
            Create Domain
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={100}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Copy private key
          <CopyToClipboard text={apiResponse}>
            <IconButton
              size="small"
              aria-label="copy"
              onClick={(e) => e.stopPropagation()}
              color="inherit"
              sx={{ marginLeft: "10px" }}
            >
              <FileCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
