import React from "react";
import { Grid, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { loadState } from "../lib/storage";
import { Link } from "react-router-dom";
export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <Grid container paddingTop={"30px"}>
      <Grid
        sx={{
          borderRadius: "30px",
          padding: "20px",
          height: "100vh",
          bgcolor: "#0074E9",
        }}
        item
        lg={3}
      >
        <Link to="/app">
          <p className="title">All product</p>
        </Link>
        <Link to="/app/create">
          <p className="title">Create product</p>
        </Link>
      </Grid>
      <Grid item lg={9}>
        <Stack
          marginLeft={"20px"}
          sx={{
            bgcolor: "white",
            padding: "20px",
            border: "5px solid grey",
            borderRadius: "30px",
            height: "95vh",
          }}
        >
          <div className="box">
            <Outlet />
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
};
