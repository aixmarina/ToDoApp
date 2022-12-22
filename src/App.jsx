import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => { //4. The new task is received and added to the task list
    setTasks(() => [...tasks, task])
  }

  const deleteTask = (idTask) => {
    setTasks(() => [...tasks.filter(task => task.id !== idTask)])
  }

  const editTask = (taskToEdit) => {
    const newTasks = tasks.map(task => {
      return (task.id == taskToEdit.id) ? taskToEdit : task
    })
    setTasks(newTasks)
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
      <div className='flex justify-center flex-wrap'>
        <TaskList editTask={editTask} tasks={unfinishedTasks} triggerTask={triggerTask} deleteTask={deleteTask} title="NOT DONE"/>
        <TaskList editTask={editTask} tasks={finishedTasks} triggerTask={triggerTask} deleteTask={deleteTask} title="DONE"/>      
      </div>
    </div>
  )
}

export default App
