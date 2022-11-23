import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(() => [...tasks, task])
  }

  const triggerTask = (idTask) => {
    const newTasks = tasks.map(task => {
      const taskNeedToChange = task.id == idTask
      return taskNeedToChange ? {...task, checked: !task.checked} : task
    })
    setTasks(newTasks)
  }

  const finishedTasks = tasks.filter(task => task.checked == true)
  const unfinishedTasks = tasks.filter(task => task.checked != true)

  return (
    <div className="App">
      <header>
        <h1 className="text-4xl m-5 flex justify-center text-black-title tracking-wide font-bold">MY TO·DO APP</h1>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={unfinishedTasks} triggerTask={triggerTask} title="NOT DONE"/>
      <TaskList tasks={finishedTasks} triggerTask={triggerTask} title="DONE"/>      
    </div>
  )
}

export default App
