import './ToDoItem.css';

const ToDoItem = ({ data, index, onIsDone, onTaskDelete, onTaskEdit }) => {
    const { date, title, description, deadline, id, isDone, editDate } = data;

    if (!title || !id) {
        return '';
    }

    const createdYear = Number(date.split('-')[0]);
    const createdMonth = Number(date.split('-')[1]);
    const createdDay = Number(date.split('-')[2]);

    const deadlineYear = Number(deadline.split('-')[0]);
    const deadlineMonth = Number(deadline.split('-')[1]);
    const deadlineDay = Number(deadline.split('-')[2]);

    let timeLeftElement;
  
    if (deadlineYear > createdYear) {
        if (deadlineYear - createdYear === 1) {
            timeLeftElement = <span>Time left: {deadlineYear - createdYear} year</span>
        } else if (deadlineYear - createdYear > 1) {
            timeLeftElement = <span>Time left: {deadlineYear - createdYear} years</span>
        }
    } else if (deadlineMonth > createdMonth) {
        if (deadlineMonth - createdMonth === 1) {
            timeLeftElement = <span>Time left: {deadlineMonth - createdMonth} month</span>
        } else if (deadlineMonth - createdMonth > 1) {
            timeLeftElement = <span>Time left: {deadlineMonth - createdMonth} months</span>
        }
    } else if (deadlineDay > createdDay) {
        if (deadlineDay - createdDay === 1) {
            timeLeftElement = <span>Time left: {deadlineDay - createdDay} day</span>
        } else if (deadlineDay - createdDay > 1) {
            timeLeftElement = <span>Time left: {deadlineDay - createdDay} days</span>
        }
    } else {
        timeLeftElement = <span>No time left</span>
    }

    const descriptionElement = description && <p>{description}</p>;
    const deadlineElement = deadline && <span>Deadline: {deadline}</span>;
    const dateElement = date && <span>{date}</span>;
    const editDateElement = editDate && <span>Edited: {editDate}</span>

  return (
    <div className='to-do-item' id={id}>
        <h2>{title}</h2>
        {dateElement}
        {descriptionElement}
        {deadlineElement}
        {timeLeftElement}
        {editDateElement}

        <div>
            <label htmlFor={`done-${index}`}>{isDone ? 'Task is complited' : 'Task is done:' }</label>
            <input type='checkbox' name='is-done' id={`done-${index}`} checked={isDone} onChange={() => onIsDone(id)} />
        </div>
        <button onClick={() => onTaskDelete(id)}>Delete</button>
        <button onClick={() => onTaskEdit(id)}>Edit</button>
    </div>
  )
}

export default ToDoItem;