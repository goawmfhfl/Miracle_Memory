import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "최재영",
    content: "미라클 메모리",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "나는 홍길동이다",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김정남",
    content: "오늘은 기분이 안좋다",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "안은지",
    content: "은지와의 미라클 메모리",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "이필립",
    content: "나는 오늘도 다이어리를 쓴다",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
