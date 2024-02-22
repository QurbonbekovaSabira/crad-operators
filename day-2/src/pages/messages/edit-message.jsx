import React from "react";
import { request } from "../../config/request";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const EditMessage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [product, setProduct] = React.useState([]);
  const getproduct = () => {
    request.get("/messages").then((res) => {
      setProduct(res.data);
    });
  };
  React.useEffect(() => {
    getproduct();
  }, []);

  const submit = (data) => {
    request.put(`/messages/${id}`, data).then((res) => {
      console.log(res.data);
      getproduct();
      navigate("/app");
    });
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
