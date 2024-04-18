import React, {useState} from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { URL } from '../utilities/utilities'

export default function CreateTask() {
    const [activity, setActivity] = useState('')
    const [editor, setEditor] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const valActivity = {
            activity: activity,
            editor: editor
        }

        axios
        .post(URL + '/add', valActivity)
        .then((res) => {window.location = '/'})
    }

    return (
        <div>
            <Navbar />
            <h3>Create New Task</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Next Task: </label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        name="inActivity"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                    />
                    <br></br>
                    <label>Editor</label>
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
                        value="Create Activity Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}