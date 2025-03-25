import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    items:[],   //final cart items
    tempItems:[],   //temporory items for updates
    totalPrice:0
}
const CartSlice= createSlice({
    name : 'cart',
    initialState:initialState,
   reducers:{
    addToCart(state,action){
        const existingItem = state.items.find((item)=>item.id===action.payload.id) 
        if(existingItem){
          existingItem.quantity+= 1
        }else{
              state.items.push({ ...action.payload , quantity:1});

        }
        state.tempItems =[...state.items]
        state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0)
    },
    updateQuantity(state,action){
        const tempItem = state.tempItems.find((item)=>item.id===action.payload.id)
        if(tempItem){
            tempItem.id= action.payload.id
        }
    },
    applyTempUpdate(state,action){
        const tempItem = state.tempItems.find((item)=>item.id===action.payload)
        const cartItem = state.items.find((item)=>item.id===action.payload)

        if(tempItem && cartItem){
            cartItem.quantity=tempItem.quantity
        }
        state.totalPrice = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );

    }
    ,
    removeFromCart(state,action){
     state.items=state.items.filter((item)=>item.id!==action.payload)
    state.totalPrice = state.items.reduce(
     (sum, item) => sum + item.price * item.quantity, 0 );

     state.tempItems = [...state.items] 
     console.log(state.items)
     state.totalPrice = state.items.reduce(
       (sum, item) => sum + item.price * item.quantity,
       0
     );
    }
   }
    
})
export const { addToCart, removeFromCart, updateQuantity, applyTempUpdate } = CartSlice.actions;
export default CartSlice.reducer