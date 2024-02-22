import { Button } from "@mui/material";
import React from "react";
import { request } from "../../config/request";
import { Link } from "react-router-dom";
import { EditMessage } from "../../pages/messages/edit-message";
export const Card = ({ name, url, id, getproduct }) => {
  const deleteProduct = () => {
    request.delete(`/messages/${id}`).then((res) => {
      getproduct();
    });
  };

  return (
    <div>
      <div
        style={{
          maxWidth: "250px",
          height: "280px",
          overflow: "hidden",
        }}
      >
        <img
          style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
          src={url}
          alt=""
        />
      </div>
      <h2 className="text">{name}</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <Link to={`/app/edit/${id}`}>
          <Button type="button" variant="outlined" >
            Edit
          </Button>
        </Link>
        <Button
          onClick={deleteProduct}
          id={id}
          type="button"
          variant="contained"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
