import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault()
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return(
    <form
    className="flex justify-center gap-2 mt-12"
    onSubmit={handleFormSubmit}
    >
    <input 
      type="text"
      className='rounded-lg border border-white border-pink1 px-3 py-1 sm:w-96 hover:border hover:border-pink2 focus:outline-none focus:outline-pink1 '
      id="task"
      value={task}
      onInput={(e) => setTask(e.target.value)}
      required
      maxLength={60}
      placeholder="Add your new task..."
    />
    <button
      className='text-white border-2 rounded-lg text-lg p-1 border-pink1 bg-pink1 hover:bg-pink2 hover:border-pink2 hover:shadow-lg'
      aria-label="Add Task"
      type="submit"
    >
    <AiOutlinePlus/>
    </button>
    </form>
  )
}

export default TaskForm