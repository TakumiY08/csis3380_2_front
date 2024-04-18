import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { URL } from '../utilities/utilities'

export default function EditTask() {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const [activity, setActivity] = useState('')
    const [editor, setEditor] = useState('')

    useEffect(() => {
        axios
        .get(URL + `/${id}`)
        .then((response) => {
            setActivity(response.data.activity)
            setEditor(response.data.editor)
        })
        .catch((err) => {
            console.error('Error: ' + err)
        })
    }, {id})

    const onSubmit = (e) => {
        e.preventDefault()
        const valActivity = {
            activity: activity,
            editor: editor
        }

        axios
        .post(URL + `/update/${id}`, valActivity)
        .then((res) => {
            window.location = '/'
        })
    }

    return (
        <div>
            <Navbar />
            <h3>Edit the task</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <lable>Edit task</lable>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="inActivity"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                    />
                    <br></br>
                    <label>Editor: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="inEditor"
                        value={editor}
                        onChange={(e) => setEditor(e.target.value)}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Activity Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}
