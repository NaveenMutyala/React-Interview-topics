import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';
import Todo from './Todo';
export type TODO = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodoList = ():JSX.Element => {
    const [todos, setTodos] = useState<TODO[]>([])
    const [total,setTotal] = useState<TODO[]>([])
    const [pages,setPages] = useState<number[]>([])
    const [current,setCurrent] = useState<number>(1)

    useEffect(() => {
        const fetchTodos = async () => {
            const response:Response = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data: TODO[] = await response.json()
            setTotal(data)
            const arr:number[] = []
            for(let i:number =1;i<Math.ceil(data.length/10)+1;i++)
                arr.push(i)
            setPages(arr);
            setCurrent(1);
            setTodos(data.slice(current-1,current+10))
        }

        fetchTodos()
    }, [])

    const handleOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        const value = Number(e.currentTarget.textContent)
        console.log(value);
        console.log(e);
        
        
        if (!Number.isNaN(value)) {
            setCurrent(value)
        }
        setTodos(total.slice(value*10-10,value*10))

        console.log(todos)
        console.log(current);
        
        
    }

    return (
        <div>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} />
            ))}
            {
                pages.map((page,ind)=>(
                    <span style={{border: '1px solid black', margin:'2px', width:'2px', height:'2px'}} onClick={handleOnClick} key={ind}> {page}</span>
                ))
            }
        </div>
    )
};

export default TodoList;