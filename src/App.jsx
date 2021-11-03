import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTODOs, setIncompleteTODOs] = useState(["AAA", "BBB"]);
  const [completeTODOs, setCompleteTODOs] = useState(["CCC"]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteTODOs.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のToDo</p>
        <ul>
          {completeTODOs.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};