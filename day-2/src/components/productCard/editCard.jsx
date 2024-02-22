import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
export const EditCard = ({ name, id, getproduct }) => {
  const submit = (data) => {
    request.put(`/messages/${id}`, data).then((res) => getproduct());
    reset();
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { ...errors },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(submit)}
        style={{
          marginBottom: "30px",
          padding: "30px",
          borderBottom: "1px solid green",
        }}
      >
        <div style={{ marginBottom: "25px" }}>
          <TextField
            style={{ width: "451px" }}
            {...register("name", { required: true })}
            type="text"
            placeholder="name"
          />
        </div>
        <div style={{ marginBottom: "25px" }}>
          <TextField
            style={{ width: "451px" }}
            {...register("url", { required: true })}
            type="text"
            placeholder={"url..."}
          />
        </div>
        <div>
          <Button
            style={{
              width: "250px",
            }}
            type="submit"
            variant="outlined"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};
