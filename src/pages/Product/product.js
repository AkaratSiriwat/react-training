import { useEffect, useState } from "react";
import Table from "../../components/Table2/Table";
import { products } from "../../mockData/product";

function Product() {
  const [productList, setProductList] = useState([]);

  const columns = [
    { title: "Product Name", dataIndex: "productName" },
    { title: "Type", dataIndex: "productType" },
    {
      title: "Quantity",
      dataIndex: "productQuantity",
      render: (e) => {
        console.log("e:", e);
        return e ? e : "Sold Out";
      },
    },

    { title: "Price", dataIndex: "productPrice" },
  ];

  useEffect(() => {}, []);
  return (
    <>
      <Table columns={columns} data={products} />
    </>
  );
}

export default Product;
