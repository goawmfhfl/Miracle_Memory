import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

//COMPONENTS
import Mybutton from "./components/Mybutton";
import MyHeader from "./components/MyHeader";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <Mybutton text={"왼쪽 버튼"} onClick={() => alert("왼쪽 클릭")} />
          }
          rightChild={
            <Mybutton
              text={"오른쪽 버튼"}
              onClick={() => alert("오른쪽 클릭")}
            />
          }
        />
        <h2>App.js</h2>
        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} /> */}
        <Mybutton
          text={"버튼"}
          type={"positive"}
          onClick={() => alert("버튼 클릭")}
        />
        <Mybutton text={"버튼"} onClick={() => alert("버튼 클릭")} />
        <Mybutton
          text={"버튼"}
          type={"negative"}
          onClick={() => alert("버튼 클릭")}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
