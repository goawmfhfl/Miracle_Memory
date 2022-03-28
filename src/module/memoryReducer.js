const MEMORY_INIT = "MEMORY_INIT";
const MEMORY_CREATE = "MEMORY_CREATE";
const MEMORY_REMOVE = "MEMORY_REMOVE";
const MEMORY_UPDATE = "MEMORY_UPDATE";

const dataId = 0;

export const onCreate = (date, content, emotion) => ({
  type: MEMORY_CREATE,
  data: {
    id: dataId.current,
    date: new Date(date).getTime(),
    content,
    emotion,
  },
});

export const onRemove = (targetId) => ({
  type: MEMORY_REMOVE,
  targetId,
});

export const onEdit = (targetId, date, content, emotion) => ({
  type: MEMORY_UPDATE,
  data: {
    id: targetId,
    date: new Date(date).getTime(),
    content,
    emotion,
  },
});

const memoryReducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case MEMORY_INIT: {
      return action.data;
    }
    case MEMORY_CREATE: {
      newState = [action.data, ...state];
      break;
    }
    case MEMORY_REMOVE: {
      newState = state.filter((list) => list.id !== action.targetId);
      break;
    }
    case MEMORY_UPDATE: {
      newState = state.map((list) =>
        list.id === action.data.id ? { ...action.data } : list
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("memory", JSON.stringify(newState));
  return newState;
};

export default memoryReducer;
