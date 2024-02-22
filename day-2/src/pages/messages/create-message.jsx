import { Button, TextField } from "@mui/material";
import React from "react";
import { request } from "../../config/request";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
export const CreateMessage = () => {
  const [state, saveState] = React.useState({});
  const {
    register,
    reset,
    handleSubmit,
    formState: { ...errors },
  } = useForm();
  const submit = (data) => {
    request
      .post(`/messages`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Done 🦄");
      })
      .catch((error) => {
        toast.error(error?.message);
      })
      .finally(() => {});
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div style={{ marginBottom: "15px" }}>
        <TextField {...register("name", { required: true })} label="name" />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <TextField {...register("url", { required: true })} label="url..." />
      </div>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};
