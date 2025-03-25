import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../styles/productlist.css";
import { useNavigate } from 'react-router-dom';
import { applyTempUpdate, removeFromCart, updateQuantity } from "../redux/Slice/CartSlice";

const Cart = () => {

  

 const {items:cartItems, tempItems, totalPrice} = useSelector((state)=>(state.cart))
 const navigate = useNavigate();
 const dispatch = useDispatch();


  if (!cartItems || cartItems.length === 0) {
    return (
      <div className='empty-cart'>
        <h2>Your Cart is Empty</h2>
        <button onClick={()=>navigate("/")}>Back to Shopping</button>
      </div>
    );
  }

  function handleRemoveitem(id){
    alert("your item is removed")
    dispatch(removeFromCart(id))
  }
  const handleUpdateQuantity = (id,quantity)=>{
   
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
              <button onClick={()=>handleApplyUpdate(el.id)}>update</button>
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