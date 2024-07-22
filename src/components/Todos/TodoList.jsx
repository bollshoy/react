import React, {useEffect, useState} from 'react';
import TodoItem from "./TodoItem.jsx";

const TodoList = ({todos, add}) => {

    useEffect(() => {
        add()
    }, [])



    return (
        <div>
            <ul>
                {todos.map(item => (
                    <TodoItem key={item.id} item={item}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;