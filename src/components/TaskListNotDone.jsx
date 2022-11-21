import TaskItem from './TaskItem'

const TaskListNotDone = ({tasks}) => {
  return (
    <ul>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TaskItem 
          key={task.id}
          task={task}
        />
      ))
      }
    </ul>
  )
}
export default TaskListNotDone