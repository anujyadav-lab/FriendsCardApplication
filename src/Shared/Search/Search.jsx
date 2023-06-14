import SearchIcon from "@mui/icons-material/Search";
import { Divider, } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

import * as React from "react";

export default function Search({ label, onSearch, filterDropDown }) {
  return (
    <Paper 
      component="form"
      sx={{
        display: "flex",
        width: 350,
        margin: "auto",
        flexWrap: "wrap",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={label}
        inputProps={{ "aria-label": label }}
        onChange={onSearch}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search friends">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      {filterDropDown}
    </Paper>
  );
}
