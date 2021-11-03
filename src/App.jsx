import { useState } from "react";
import "./styles.css";
import InputTodo from "./components/InputTodo";
import IncompleteTodo from "./components/IncompleteTodo";
import CompleteTodo from "./components/CompleteTodo";

// 関数に引数を渡すときはアロー関数にする(()=>onClickDelete(index))
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTODOs, setIncompleteTODOs] = useState([]);
  const [completeTODOs, setCompleteTODOs] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTODOs, todoText];
    setIncompleteTODOs(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTODOs];
    newTodos.splice(index, 1);
    setIncompleteTODOs(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTODOs];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTODOs, incompleteTODOs[index]];
    setIncompleteTODOs(newIncompleteTodos);
    setCompleteTODOs(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTODOs];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTODOs, completeTODOs[index]];
    setIncompleteTODOs(newIncompleteTodos);
    setCompleteTODOs(newCompleteTodos);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTODOs.length >= 5}
      />
      {incompleteTODOs.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodo5個まで</p>
      )}
      <IncompleteTodo
        todos={incompleteTODOs}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={completeTODOs} onClickBack={onClickBack} />
    </>
  );
};
