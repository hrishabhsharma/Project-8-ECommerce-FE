import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCart = createAsyncThunk('cart/get', async () => {
  const userId = localStorage.getItem('userId')
  const response = await axios.get(`https://hrishabh-e-commerce.onrender.com/cart/${userId}`)
  return response.data
})

// const sendCart = createAsyncThunk('cart/update', async (product) => {
//   const userId = localStorage.getItem('userId')
//   const response = await axios.get(`http://localhost:4000/cart/${userId}/${product._id}`)
//   return response.data
// })


const initialState = {
  data: [],
  loading: true,
  error: null
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // const userId = localStorage.getItem('userId')
      const product = action.payload
      const existingProduct = state.data.find((p) => p.productId._id === product._id)
      if (!existingProduct) {
        state.data.push({
          productId: product,
          quantity: 1,
        })
        return
      }

      existingProduct.quantity = existingProduct.quantity + 1;
    },
    deleteFromCart: (state, action) => {
      state.filter((item) => item.id !== action.payload.id)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    })
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error
    })
    // builder.addCase(sendCart.pending, (state) => {
    //   state.loading = true;
    // })
    // builder.addCase(sendCart.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.data = action.payload.data;
    // })
    // builder.addCase(sendCart.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error
    // })
  }
})

export { fetchCart }
export const { addToCart, deleteFromCart } = CartSlice.actions
export default CartSlice.reducer