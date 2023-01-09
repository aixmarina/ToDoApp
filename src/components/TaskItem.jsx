import { useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import TaskEdit from './TaskEdit';

const TaskItem = ({task, triggerTask, deleteTask, editTask}) => {
  const [isChecked, setIsChecked] = useState(task.checked)
  const [isEditing, setIsEditing] = useState(false)

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked)
    triggerTask(task.id)
  }

  const handleEditTask = () => {
    setIsEditing(!isEditing)
  }

  return(
    <li className='flex gap-3 justify-between'>
      <div className='flex items-center relative'>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
          className="relative appearance-none w-5 h-5 border rounded-sm focus:outline-none checked:bg-pink1 hover:ring-1 hover:ring-blue1 mr-2 after:content-[''] after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:40px] after:left-0 after:top-0 after:absolute checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')]"
        />
        <TaskEdit task={task} isEditing={isEditing} editTask={editTask}/>
      </div>
      <div className='flex gap-2'>
        <button
          className=''
          aria-label={`Update ${task.name} task`}
          onClick={() => handleEditTask()}
        >
          <FiEdit className='text-pink1'/>
        </button>
        <button
          className=''
          aria-label={`Delete ${task.name} task`}
          onClick={() => deleteTask(task.id)}
        >
          <FiTrash2 className='text-pink1'/>
        </button>
      </div>
    </li>
  )
}
export default TaskItem