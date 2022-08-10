createSlice
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    error: null,
    success: false,
    loading: false,
  },
  reducers: {
    increment: (state, { payload }) => {
      state.loading = true
      state.error = null
      state.count += 1
      toast.success(`Increment done 🚀, now count is ${state.count}`)
      state.loading = false
    },
    decrement: (state, { payload }) => {
      state.error = null
      state.loading = true
      if (state.count >= 1) {
        state.count -= 1
      } else {
        state.error = 'Decrement not possible ! 😒'
        toast.error('Decrement not possible ! 😒')
      }
      toast.success(`Decrement done 🚀, now count is ${state.count}`)
      state.loading = false
    },
    reset: (state, { payload }) => {
      state.error = null
      state.loading = true
      state.count = 0
      toast.success(`Reset done 🚀, now count is ${state.count}`)
      state.loading = false
    },
  },
})

export default counterSlice.reducer

export const { increment, decrement, reset } = counterSlice.actions
