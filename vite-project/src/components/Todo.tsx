import React from 'react';
import type { JSX } from 'react';
import type { TODO } from './TodoList';

type TodoProps = {
    todo: TODO;
}

const Todo = ({ todo }: TodoProps): JSX.Element => {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? 'Completed' : 'Pending'}</p>
        </div>
    );
};

export default Todo;