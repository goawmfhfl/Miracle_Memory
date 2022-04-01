import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { initalData } from "./module/memoryReducer";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("memory"));
    dispatch(initalData(localData));
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home loading={loading} />} />
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
