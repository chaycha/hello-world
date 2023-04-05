import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskFrame from './TaskFrame'

interface Task {
  taskName: string
  isDone: boolean
}

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskNameInput, setTaskNameInput] = useState<string>("")
  const [isRed, setIsRed] = useState(false)

  const addTask = () => {
    setTasks([...tasks, {
      taskName: taskNameInput,
      isDone: false
    }])
    setTaskNameInput("")
  }

  const deleteTask = () => {
    const tmp = [...tasks]
    tmp.pop()
    setTasks(tmp)
  }

  const toggleTask = () => {
    const first = tasks[0]
    first.isDone = !first.isDone
    const tmp = [...tasks]
    tmp[0] = first
    setTasks(tmp)
  }

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <div className="ToDoList">
      <TaskFrame isRed={isRed}>
        <div className="card">
          <input value={taskNameInput} onChange={(e) => setTaskNameInput(e.target.value)} />
          <button draggable onClick={addTask}>Add task</button>
          <button onClick={deleteTask}>Delete task</button>
          <button onClick={toggleTask}>Toggle task</button>
        </div>
        <ul>
          {
            tasks.map(({ taskName, isDone }) => <li key={taskName}>
              <p>Task name: {taskName}, Done?: {isDone ? 'true' : 'false'}</p>
            </li>)
          }
        </ul>
      </TaskFrame>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
