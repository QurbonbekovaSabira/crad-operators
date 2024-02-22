import React from "react";
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { request } from "../../config/request";
import { saveState } from "../../lib/storage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const Auth = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { ...errors },
  } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    request
      .post("/login", data)
      .then((res) => {
        saveState("user", res.data);
        toast.success("Done 🦄");
        navigate("/app", { replace: true });
      })
      .catch((error) => {
        toast.error(error?.message);
      })
      .finally(() => {});
    reset();
  };
  return (
    <Stack sx={{ position: "absolute", inset: 0, bgcolor: "#0074E9" }}>
      <Stack
        sx={{ position: "absolute", top: "30%", left: "30%", p: "30px" }}
        width={"500px"}
        bgcolor="white"
        borderRadius="15px"
      >
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <TextField
              sx={{ mb: "10px", width: "90%" }}
              {...register("email", { required: true })}
              label={"email"}
            />
          </div>
          <div>
            <TextField
              sx={{ mb: "10px", width: "90%" }}
              {...register("password", { required: true })}
              label={"password"}
            />
          </div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};
