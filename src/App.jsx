import { useEffect, useState } from "react";
import "./App.css";
import 

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/todos`)
      .then(resp => resp.json())
      .then(data => {
        setTodos(data)
      })
  }, [])

  return (
    <>
      <div>
        <h1>TODO list</h1>
          <ul>
            {todos.map((todo) => (
              <li key={todo._id}>
                  <span>{todo.task}</span>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
