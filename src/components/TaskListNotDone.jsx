import TaskItem from './TaskItem'

const TaskListNotDone = ({tasks}) => {
  return (
    <div className='border-2 border-green1 rounded-lg flex flex-col gap-1 m-16'>
    <h2
    className='flex justify-center text-2xl text-green1 font-semibold'
    >NOT DONE</h2>
    <ul className='p-4'>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem 
          key={task.id}
          task={task}
        />
      ))
      }
    </ul>
    </div>
  )
}
export default TaskListNotDone