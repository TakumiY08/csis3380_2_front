import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { URL } from '../utilities/utilities'

const Todo = (props) => {
    return (
        <tr className="d-flex">
            <td className="col-10">{props.todo}</td>
            <td className="col-2" style={{ textAlign: 'right' }}>
                <button onClick={()=>{props.editTodo(props.id)}}>Edit</button>
                {' '}
                <button onClick={()=>{props.deleteTodo(props.id)}}>Delete</button>
            </td>
        </tr>
    )
}

export default function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios
        .get(URL + '/')
        .then((response) => {
            setTodos(response.data)
        })
        .catch((err) => {
            console.error('Error: ' + err)
        })
    }, [])

    const editTodo = (id) => {
        window.location = `/update/${id}`
    }

    const deleteTodo = (id) => {
        axios
        .delete(URL + `/delete/${id}`)
        setTodos(todos.filter((i) => i._id !== id))
    }

    return (
        <div>
            <Navbar />
            <h3>Logged Todos</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <Todo 
                                todo={todo.activity}
                                id={todo._id}
                                key={todo._id}
                                editTodo={editTodo}
                                deleteTodo={deleteTodo}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}