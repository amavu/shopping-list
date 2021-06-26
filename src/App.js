import "./App.css";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newToDoList = [...toDoList, { text: value, isCompleted: false }];
    setToDoList(newToDoList);
    setValue("");
  };

  const isCompletedHandler = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].isCompleted = !newToDoList[index].isCompleted;
    setToDoList(newToDoList);
  };

  const deleteItem = (deleteIndex) => {
    const newToDoList = [...toDoList];
    newToDoList.splice(deleteIndex, 1);
    setToDoList(newToDoList);
  };

  const ToDoList = () => {
    return (
      <div>
        {toDoList.map((toDoElement, index) => {
          return (
            <div key={index}>
              <span>{toDoElement.text}</span>
              <input
                type="checkbox"
                checked={toDoElement.isCompleted}
                onChange={() => isCompletedHandler(index)}
              ></input>
              <button type="button" onClick={() => deleteItem(index)}>
                delete
              </button>
              {console.log(toDoList)}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <header>
        <h1>My Shopping List</h1>
      </header>
      <form onSubmit={submitHandler}>
        <input
          value={value}
          placeholder="Add item"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <ToDoList />
    </div>
  );
};

export default App;
