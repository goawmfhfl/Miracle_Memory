import React, { useReducer, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import {
  DiaryStateContext,
  DiaryDispatchContext,
} from "./context/DiaryContext";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

// const dummyData = [
//   {
//     id: 1,
//     emotion: 1,
//     content: "오늘의 일기 1번",
//     date: 1648434599093,
//   },
//   {
//     id: 2,
//     emotion: 2,
//     content: "오늘의 일기 2번",
//     date: 1648434599095,
//   },
//   {
//     id: 3,
//     emotion: 3,
//     content: "오늘의 일기 3번",
//     date: 1648434599097,
//   },
//   {
//     id: 4,
//     emotion: 4,
//     content: "오늘의 일기 4번",
//     date: 1648434599099,
//   },
//   {
//     id: 5,
//     emotion: 5,
//     content: "오늘의 일기 5번",
//     date: 1648434599100,
//   },
//   {
//     id: 6,
//     emotion: 5,
//     content: "오늘의 일기 6번",
//     date: 1748434599100,
//   },
// ];

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;
        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="App">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/detail/:id" element={<Detail />} />
              </Routes>
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};
export default App;
