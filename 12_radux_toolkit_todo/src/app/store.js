import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice'

export const store = configureStore({
    reducer:todoReducer
})


// import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todoSlice';

// export const store = configureStore({
//     reducer: todoReducer
// })