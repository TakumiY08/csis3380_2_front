import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TodoList from './components/TodoList'
import CreateTask from './components/CreateTask'
import EditTask from "./components/EditTask";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<TodoList />} />
          <Route path='/create' element={<CreateTask />} />
          <Route path='/update/:id' element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
