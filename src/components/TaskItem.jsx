import { useState } from 'react';

const TaskItem = ({task}) => {
  const [isChecked, setIsChecked] = useState(task.checked)

  const handleCheckboxChange = (e) =>{
    setIsChecked(!isChecked)
  }

  return(
    <li>
      <div>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        name={task.name}
        id={task.id}
        className="appearance-none w-5 h-5 border rounded-sm focus:outline-none checked:bg-gray-300"
      />
      <label 
        htmlFor={task.id}
        className=""
      >
        {task.name}
      </label>
      </div>
    </li>
  )
}
export default TaskItem