import './ToDoItem.css';
// import { useState } from 'react';

const ToDoItem = ({ data, index, onIsDone, onToDoDelete }) => {
    const { date, title, description, deadline, id, isDone } = data;

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

  return (
    <div className='to-do-item' id={id}>
        <h2>{title}</h2>
        {dateElement}
        {descriptionElement}
        {deadlineElement}
        {timeLeftElement}

        <div>
            <label htmlFor={`done-${index}`}>{isDone ? 'Task is complited' : 'Task is done:' }</label>
            <input type='checkbox' name='is-done' id={`done-${index}`} checked={isDone} onChange={() => onIsDone(id)} />
        </div>
        <button onClick={() => onToDoDelete(id)}>Delete</button>
        <button onClick={() => console.log('veikia')}>Edit</button>
    </div>
  )
}

export default ToDoItem;