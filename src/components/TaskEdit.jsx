import React from 'react';

const TaskEdit = ({task, isEditing, editTask}) => {

  const renderLabelChecked = task => <label htmlFor={task.id} className="line-through text-gray-500 cursor-pointer">{task.name}</label>
  const renderLabelUnchecked = task => <label htmlFor={task.id} className="cursor-pointer">{task.name}</label>

  const handleEditTask = (e) => {
    task.name = e.target.value
    editTask(task)
  }

  return (
    <div>
      {isEditing ? 
        <input type="text" maxLength={60} value={task.name} className="border-b-2 border-pink1 rounded outline-none" onChange={handleEditTask}/>
       : 
       (task.checked ? renderLabelChecked(task) : renderLabelUnchecked(task))}
      
    </div>
  );
}

export default TaskEdit;
