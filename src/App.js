import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { initalData } from "./module/memoryReducer";
import { getPosition } from "./util/weather";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import Todo from "./pages/Todo";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("location")) return;
    getPosition();
  }, []);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("memory"));
    dispatch(initalData(localData));
  }, [dispatch]);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Home loading={loading} visible={visible} />}
            />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
