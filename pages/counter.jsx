import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement, reset } from '../store/slices/counterSlice'
export default function Counter() {
  const { count, error, loading } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Counter</p>
      <p>Count :{count}</p>
      <p>Error:{error}</p>
      <p>loading:{loading}</p>

      <div className='flex items-center justify-center gap-10'>
        <button
          className='border rounded-xl px-4 py-2 bg-emerald-500 text-white hover:bg-red-500 duration-300'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className='border rounded-xl px-4 py-2 bg-emerald-500 text-white hover:bg-red-500 duration-300'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className='border rounded-xl px-4 py-2 bg-emerald-500 text-white hover:bg-red-500 duration-300'
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
