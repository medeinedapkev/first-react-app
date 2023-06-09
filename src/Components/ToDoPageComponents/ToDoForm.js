import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const ToDoPageForm = ({ onToDo, editData }) => {
    
    const [ date, setDate ] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000, [])
        return function cleanUp() {
            clearInterval(timer);
        }
    })

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ deadline, setDeadline ] = useState('');

    useEffect(() => {
        if (editData) {
            setTitle(editData.title);
            setDescription(editData.description);
            setDeadline(editData.deadline);
        }
    }, [editData])

    const titleHandler = (e) => setTitle(e.target.value);
    const descriptionHandler = (e) => setDescription(e.target.value);
    const deadlineHandler = (e) => setDeadline(e.target.value);

    function addNewToDo(event) {
        event.preventDefault();

        const newDate = new Date();
        const day = newDate.getDate().toString().padStart(2, '0');
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const year = newDate.getFullYear();
        const date = `${year}-${month}-${day}`;

        // const id = 'id' + Math.floor(Math.random() * 2999);
        const id = uuid();

        let newToDo = {};

        if (editData) {
            newToDo = {
                date: editData.date,
                title,
                description,
                deadline,
                isDone: editData.isDone,
                id: editData.id,
                editDate: newDate.toISOString().slice(0, 10),
            }
        } else {
            newToDo = { date, title, description, deadline, isDone: false, id };
        }

        onToDo(newToDo);
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

        <button type='submit'>{editData ? 'Save' : 'Create new a task'}</button>
    </form>
  )
}

export default ToDoPageForm;