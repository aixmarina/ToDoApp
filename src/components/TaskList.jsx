import TaskItem from './TaskItem'

const TaskList = ({tasks, triggerTask, title, deleteTask, editTask}) => {

  const invertTaskOrder = (task1, task2) => task2.id - task1.id
  const renderTaskItem = task => <TaskItem key={task.id} task={task} triggerTask={triggerTask} deleteTask={deleteTask} editTask={editTask}/>

  return (
    <div className='w-96 min-h-[13rem] border-2 border-black-title rounded-lg flex flex-col mt-10 mx-4 bg-white1'>
      <h2 className='flex justify-center text-xl text-black-title font-semibold'>{title}</h2>
      <ul className='flex flex-col gap-3 p-4'>
       {tasks.sort(invertTaskOrder).map(renderTaskItem)}
      </ul>
    </div>
  )
}
export default TaskList