import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskFrame from './TaskFrame'

interface Task {
  taskName: string
  isDone: boolean
}

export default function App() {
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
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => setIsRed((x) => !x)}>bruh</button>
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
    </div>
  )
}
