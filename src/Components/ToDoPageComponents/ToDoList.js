import ToDoItem from './ToDoItem.js';

const ToDoList = ({ toDoData, onIsDone, onTaskDelete, onTaskEdit }) => {
    if (!toDoData || toDoData.length === 0) {
        return '';
    }

  return (
    <div className='to-do-list'>
        {toDoData.map((toDo, index) => <ToDoItem 
        key={index} 
        data={toDo} 
        index={index} 
        onIsDone={onIsDone} 
        onTaskDelete={onTaskDelete} 
        onTaskEdit={onTaskEdit} />)}
    </div>
  )
}

export default ToDoList;