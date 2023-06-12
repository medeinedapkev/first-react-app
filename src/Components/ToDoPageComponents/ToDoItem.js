import './ToDoItem.css';

const ToDoItem = ({ data, setFunction }) => {
    console.log(data)
    const { date, title, description, deadline } = data;
  return (
    <div className='to-do-item'>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Deadline: {deadline}</span>
        <span>{date}</span>
    </div>
  )
}

export default ToDoItem;