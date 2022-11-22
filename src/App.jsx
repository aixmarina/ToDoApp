import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskListNotDone from './components/TaskListNotDone'

function App() {
  const [tasks, setTasks] = useState([])

  //we need to set the prevState because if not, it will only save the last task instead of saving one after the other
  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  return (
    <div className="App">
      <header>
        <h1 className="text-4xl m-5 flex justify-center text-black-title tracking-wide font-bold">MY TO·DO APP</h1>
      </header>
      <TaskForm addTask={addTask}/>
      {tasks.length > 0 && <TaskListNotDone tasks={tasks}/>}
      {/* only if tasks exist it will show the TaskListNotDone. we also pass the array tasks with all the tasks */}
    </div>
  )
}

export default App
