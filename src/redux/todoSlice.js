import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "OOPs", completed: false },
    { id: 2, title: "DBMS", completed: true },
    { id: 3, title: "Operating System", completed: true },
    { id: 4, title: "Daily Leetcode", completed: false },
  ],
  reducers: {
    addToDo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    // a reducer handles the action accepting the current state and the action and returns some new state
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id); //this is used to find the id of the todo which we want to update
      state[index].completed = action.payload.completed; //redux updates the state our selector will detect the change and re-render any component
    },
    deleteTodo: (state, action) => {
      // the filter function will give us back all the todo's that don't equal the id in the payload
      // we will return it because it will return us a new array
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    // extra reducers that can be used by thunk as thunk will dispatch a number of actions
  },
  
});

//we are exporting the actions example for toggleComplete reducer we have toggleComplete action
// associated with it
export const { addToDo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
