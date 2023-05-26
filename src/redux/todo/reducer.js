import { ADD_TODO, REMOVE_TODO, UPDATE_CHECKBOX } from "./action";

const initialState = [
  { id: 1, todo: "Buy Milk", completed: false },
  { id: 2, todo: "Buy Egg", completed: false },
  { id: 3, todo: "Buy Tshirt", completed: false },
];

export const operationalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      const filteredTodo = state.filter((todo) => todo.id !== action.payload);
      return filteredTodo;
    case UPDATE_CHECKBOX:
      let todoArr = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArr.push(item);
      });
      return todoArr;
    default:
      return state;
  }
};
