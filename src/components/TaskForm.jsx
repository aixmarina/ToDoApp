import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addTask({ //3. The new task with these values is send to 'App.jsx' to update the taskList
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return(
    <form
    className="flex justify-center gap-2 mt-12"
    onSubmit={handleFormSubmit} // 2.The 'handleFormSubmit' function is called when we click the button or we press enter
    >
    <input 
      type="text"
      className='rounded-lg border bg-white1 border-white1 px-3 py-1 sm:w-96 hover:border hover:border-pink1 focus:outline-none focus:outline-pink1 '
      id="task"
      onInput={(e) => setTask(e.target.value)} // 1. The value of 'task' is changed using 'setTask' with the new value that the user has introduced in the input
      value={task}
      required
      maxLength={60}
      placeholder="Add your new task..."
    />
    <button
      className='text-white border-2 rounded-lg text-lg p-1 border-pink1 bg-pink1 hover:bg-pink1 hover:border-pink1 hover:shadow-lg'
      aria-label="Add Task"
      type="submit"
    >
    <AiOutlinePlus/>
    </button>
    </form>
  )
}

export default TaskForm