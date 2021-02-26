import React, { useEffect } from "react";
import Login from "./Login";
import Register from "./Register";
function Products() {
  const buyProduct = (e) => {
    alert("Köp varan");
  };
  return (
    <div className="container w-75 mt-5" id="products">
      Products
    </div>
  );
}

export default Products;
