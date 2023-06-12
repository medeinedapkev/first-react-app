import ToDoItem from './ToDoItem';


const ToDoList = ({ toDoData, setFunction }) => {

  return (
    <div className='to-do-list'>
        {toDoData.map((toDo, index) => <ToDoItem key={index} data={toDo} setFunction={setFunction} />)}
    </div>
  )
}

export default ToDoList;