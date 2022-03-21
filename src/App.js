import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes> </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
