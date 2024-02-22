import React from "react";
import { request } from "../../config/request";
import { Card } from "../../components/card/card";
export const Messages = () => {
  const getproduct = () => {};
  request.get("/messages").then((res) => {
    setProduct(res.data);
  });
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    getproduct();
  }, []);
  return (
    <div className="card">
      {product?.map((item) => (
        <Card key={item.id} getproduct={getproduct} {...item} />
      ))}
    </div>
  );
};
