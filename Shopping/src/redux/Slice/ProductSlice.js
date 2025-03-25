import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

//lifeCycle of createAsyncThunk=>{
    // pending, fulfilled, rejected
    // }

//here with createThunk we are writing our actions
export const fetchProducts = createAsyncThunk('products/fetchproducts',
    async ()=>{
      const response = await axios.get(`https://fakestoreapi.com/products`)
      return response.data
    }
)
const ProductSlice= createSlice({
   name:'products',
   initialState:{
    items:[],
    status:'idle'
   },
   extraReducers:(builder)=>{
     builder.addCase(fetchProducts.pending,(state)=>{
        state.status='loading'
     })
     .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status='succeeded'
        state.items= action.payload
     })
     .addCase(fetchProducts.rejected,(state)=>{
        state.status='failed'
         state.error = action.error.message;
     })
   }
})

export default ProductSlice.reducer;
