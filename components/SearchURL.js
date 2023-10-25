import {
  Box,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const SearchURL = () => {
  const [bearerToken, setBearerToken] = useState("");
  const [searchURL, setSearchURL] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const apiUrl = "http://localhost:4000/channels/mychannel/chaincodes/dns";
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };
    const data = {
      args: JSON.stringify([searchURL]),
      fcn: "GetIPAddressByURL",
    };

    axios
      .get(apiUrl, { headers, params: { data } })
      .then((response) => {
        console.log(response.data);
        setSearchResult(JSON.stringify(response.data.result));
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(data);
  };

  return (
    <CssBaseline>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // paddingTop: "15%",
          backgroundColor: "#3F1D38",
          height: "100vh",
        }}
      >
        <Paper
          sx={{
            padding: 4,
            width: "70%",
            height: "70%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ margin: 2, color: "green", fontWeight: "bold" }}
            variant="h4"
          >
            Let's search Securely
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your Private Key"
            fullWidth
            value={bearerToken}
            onChange={(e) => setBearerToken(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            variant="outlined"
            placeholder="Search"
            value={searchURL}
            onChange={(e) => setSearchURL(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": { borderRadius: "30px" },
            }}
          />
          <Button
            variant="contained"
            // color="primary"

            onClick={handleSearch}
            sx={{ marginTop: 2, backgroundColor: "green" }}
          >
            Search
          </Button>
          {searchResult && (
            <Box sx={{ marginTop: 2 }}>
              <Typography variant="body1">Search Result:</Typography>
              <Typography variant="body2">{searchResult}</Typography>
            </Box>
          )}
        </Paper>
      </Box>
    </CssBaseline>
  );
};

export default SearchURL;
