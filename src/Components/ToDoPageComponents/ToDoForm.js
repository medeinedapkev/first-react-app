import { useState, useEffect } from 'react';



const ToDoPageForm = ({ onToDo }) => {
    
    const [ date, setDate ] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanUp() {
            clearInterval(timer);
        }
    })

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ deadline, setDeadline ] = useState('');

    const titleHandler = (e) => setTitle(e.target.value);
    const descriptionHandler = (e) => setDescription(e.target.value);
    const deadlineHandler = (e) => setDeadline(e.target.value)

    function addNewToDo(event) {
        event.preventDefault();

        const newToDo = {
            date: date.toLocaleDateString().split('/').join('-'),
            title: title,
            description: description,
            deadline: deadline,
        }

        onToDo(newToDo);

        console.log(date.toLocaleDateString().split('/').join('-'))
        console.log(title)
        console.log(description)
        console.log(deadline)

        setTitle('');
        setDescription('');
        setDeadline(''); 
    }

  return (
    <form onSubmit={addNewToDo}>
        <span>Time: {date.toLocaleDateString()}</span>
        <div className='form-item'>
            <label htmlFor='to-do'>To Do: </label>
            <input type='text' name='to-do' id='to-do' value={title} onChange={titleHandler} />
        </div>
        <div className='form-item'>
            <label htmlFor='to-do-description'>Description: </label>
            <textarea name='to-do-description' id='to-do-description' value={description} onChange={descriptionHandler} ></textarea>
        </div>
        <div className='form-item'>
            <label htmlFor='to-do-date'>Deadline: </label>
            <input type='date' name='to-do-date' id='to-do-date' value={deadline} onChange={deadlineHandler} />
        </div>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default ToDoPageForm;