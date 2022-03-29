import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import { initData } from "./module/memoryReducer";
const App = () => {
  const dataId = useRef(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("memory");
    if (localData) {
      const memoryList = JSON.parse(localData).sort(
        (a, b) => parseInt(a.id) - parseInt(b.id)
      );
      if (memoryList.length >= 1) {
        dataId.current = parseInt(memoryList[0].id) + 1;
        dispatch(initData(memoryList));
      }
    }
  }, [dispatch]);

  return (
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
  );
};
export default App;
