import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/productlist.css";
import { useNavigate } from 'react-router-dom';
import { applyTempUpdate, removeFromCart, updateQuantity } from "../redux/Slice/CartSlice";

const Cart = () => {

  

 const {items:cartItems, tempItems, totalPrice} = useSelector((state)=>(state.cart))

  if (!cartItems || cartItems.length === 0) {
    return <h2>Your Cart is Empty</h2>; // Show a message when the cart is empty
  }
const navigate = useNavigate();
const dispatch = useDispatch();

  function handleRemoveitem(id){
    alert(id)
    dispatch(removeFromCart(id))
  }
  const handleUpdateQuantity = (id,quantity)=>{
   console.log(id,quantity)
   dispatch(updateQuantity({id,quantity}))
  }
  const handleApplyUpdate = ()=>{
    tempItems.forEach((item)=>{
      console.log(item)
      dispatch(applyTempUpdate())
    })
  }

  return (
    <div className="cart-item">
      <div className="product-list">
        {cartItems?.map((el) => (
          <div key={el.id} className="product-card">
            <img src={el.image} alt={el.title} />
            <h2>
              Name:
              {el.title.length > 20 ? `${el.title.slice(0, 20)}...` : el.title}
            </h2>
            <h4>Price: {el.price.toFixed(2)}</h4>
            <div className="cart-btn">
              <input
                type="number"
                min="1"
                value={
                  tempItems.find((tempItem) => tempItem.id === el.id)
                    ?.quantity || el.quantity
                }
                onChange={(e) =>
                  handleUpdateQuantity(el.id, parseInt(e.target.value))
                }
              />
              <button onClick={handleApplyUpdate}>update</button>
              <button onClick={() => handleRemoveitem(el.id)}>remove</button>
            </div>
          </div>
        ))}
      </div>
      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

      <button onClick={() => navigate("/")} className="navigate-btn">
        Back to Shopping
      </button>
    </div>
  );
}

export default Cart