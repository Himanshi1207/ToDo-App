import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
export default configureStore({
    // Reducers are functions that take the current state and an action as arguments, and return a new state result.
    reducer:{
        todos:todoReducer,
    },
});