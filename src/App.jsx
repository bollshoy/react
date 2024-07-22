import React, {useState} from 'react';
import TodoList from "./components/Todos/TodoList.jsx";
import axios from "axios";
import Test from "./components/Test.jsx";

const App = () => {
    const [todos, setTodos] = useState([]);
    const add = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data)
                console.log('OK')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {/*<TodoList todos={todos} add={add}/>*/}
            <Test/>
        </div>
    );
};

export default App;