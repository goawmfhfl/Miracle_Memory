import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { initData } from "./module/memoryReducer";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("memory"));
    dispatch(initData(localData));
  }, []);

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
