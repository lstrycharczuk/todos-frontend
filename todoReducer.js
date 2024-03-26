import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const done = false;
      state.list.push({todo: action.payload, done: done });
    },
    removeTodo: (state, action) => {
      return {
        ...state,
        list: state.list.filter((el) => el.id !== action.payload),
      };
    },
    todoDone: (state, action) => {
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    },
    updateTodo: (state, action) => {
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, todoText: action.payload.todoText }
            : todo
        ),
      };
    },
  },
});

export const { addtodo, removetodo, todoDone, updatetodo } = todosSlice.actions;

export default todoSlice.reducer;
