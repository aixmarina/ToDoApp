import TaskItem from './TaskItem'

const TaskList = ({tasks, triggerTask, title}) => {

  if (tasks.length == 0) return null
  const invertTaskOrder = (task1, task2) => task2.id - task1.id
  const renderTaskItem = task => <TaskItem key={task.id} task={task} triggerTask={triggerTask}/>

  return (
    <div className='w-96 min-h-[13rem] border-2 border-black rounded-lg flex flex-col mt-10 mx-4'>
      <h2 className='flex justify-center text-xl text-black font-semibold'>{title}</h2>
      <ul className='flex flex-col gap-3 p-4'>
       {tasks.sort(invertTaskOrder).map(renderTaskItem)}
      </ul>
    </div>
  )
}
export default TaskList