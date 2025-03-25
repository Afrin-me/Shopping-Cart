import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/productlist.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/Slice/ProductSlice";
import { addToCart } from "../redux/Slice/CartSlice";

const ProductList = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") return <p>Loading Products...</p>;
  if (status === "failed")
    return (
      <p style={{ color: "red" }}>Failed to load products. Please try again.</p>
    );

  return (
    <>
      <div>
        <div className="product-list">
          {products.map((el) => (
            <div className="product-card" key={el.id}>
              <img src={el.image} alt={el.title} />
              <h2>
                Name:{" "}
                {el.title.length > 20
                  ? `${el.title.slice(0, 20)}...`
                  : el.title}
              </h2>
              <h4>Price: {el.price}</h4>
              <button onClick={()=>dispatch(addToCart(el))}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
