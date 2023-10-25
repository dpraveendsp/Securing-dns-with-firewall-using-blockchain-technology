import React, { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Snackbar,
  // IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { Alert } from "@mui/material";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
import axios from "axios";
import { Label } from "@mui/icons-material";

const CreateDomain = () => {
  const [ip, setIP] = useState("");
  const [url, setURL] = useState("");
  const [userType, setUserType] = useState("Personal");
  const [idno, setIDNo] = useState("");
  const [comno, setComNo] = useState("");
  const [bearerToken, setBearerToken] = useState("");
  const [apiResponse, setAPIResponse] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:4000/channels/mychannel/chaincodes/dns";
    const args = [
      JSON.stringify({
        IP: ip,
        URL: url,
        IdentityProofs: userType === "Personal" ? { idno } : { idno, comno },
      }),
    ];

    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };

    axios
      .post(
        apiUrl,
        {
          fcn: "CreateDomain",
          chaincodeName: "dns",
          channelName: "mychannel",
          args,
        },
        { headers }
      )
      .then((response) => {
        console.log(response.data);
        setAPIResponse(JSON.stringify(response.data));
        setOpen(true);
        setIP("");
        setURL("");
        setIDNo("");
        setComNo("");
        setBearerToken("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: 10,
        paddingTop: 7,
        width: "100%",
        backgroundColor: "#3F1D38",
        height: "100vh",
      }}
    >
      <Paper sx={{padding: 4, width: "70%" }}>
        <Typography variant="h5" sx={{ marginBottom: 2, color: "green" }}>
          Create Domain
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="IP"
            sx={{ width: "500px" }}
            value={ip}
            onChange={(e) => setIP(e.target.value)}
            required
          />{" "}
          <br />
          <br />
          <TextField
            label="URL"
            sx={{ width: "500px" }}
            value={url}
            onChange={(e) => setURL(e.target.value)}
            required
          />{" "}
          <br />
          <br />
          <TextField
            select
            label="User Type"
            sx={{ width: "500px" }}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            // sx={{ width: 220, marginTop: 2 }}
            required
          >
            {" "}
            <br />
            <br />
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </TextField>
          <br />
          <br />
          {userType === "Personal" ? (
            <TextField
              label="ID Number"
              sx={{ width: "500px" }}
              value={idno}
              onChange={(e) => setIDNo(e.target.value)}
              required
            />
          ) : (
            <>
              <TextField
                label="ID Number"
                sx={{ width: "500px" }}
                value={idno}
                onChange={(e) => setIDNo(e.target.value)}
                required
              />
              <br />
              <br />
              <TextField
                label="Company Number"
                sx={{ width: "500px" }}
                value={comno}
                onChange={(e) => setComNo(e.target.value)}
                required
              />
            </>
          )}
          <br />
          <br />
          <TextField
            label="Your Private key"
            sx={{ width: "500px" }}
            value={bearerToken}
            onChange={(e) => setBearerToken(e.target.value)}
            required
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ marginTop: 2, backgroundColor: "green" }}
          >
            Create Domain
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Domain created successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateDomain;
