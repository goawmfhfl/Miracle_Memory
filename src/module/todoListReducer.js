const TODOLIST_INIT = "TODOLIST_INIT";
const TODOLIST_CREATE = "TODOLIST_CREATE";
const TODOLIST_REMOVE = "TODOLIST_REMOVE";
const TODOLIST_UPDATE = "TODOLIST_UPDATE";

export const initTodos = (data) => ({
  type: TODOLIST_INIT,
  data: data,
});

export const createTodos = (todos) => ({
  type: TODOLIST_CREATE,
  data: {
    id: String(Math.random() * 1).split(".")[1],
    todoItem: todos,
  },
});

export const removeTodos = (targetId) => ({
  type: TODOLIST_REMOVE,
  targetId,
});

export const editTodos = (targetId, todos) => ({
  type: TODOLIST_UPDATE,
  data: {
    id: targetId,
    todoItem: todos,
  },
});

const todoListReducer = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case TODOLIST_INIT: {
      return action.data;
    }
    case TODOLIST_CREATE: {
      if (state === null) {
        newState = [action.data];
      } else {
        newState = [...state, action.data];
      }

      break;
    }
    case TODOLIST_REMOVE: {
      newState = state.filter((list) => list.id !== action.targetId);
      break;
    }
    case TODOLIST_UPDATE: {
      newState = state.map((list) =>
        list.id === action.data.id ? { ...action.data } : list
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("todolist", JSON.stringify(newState));
  return newState;
};

export default todoListReducer;
