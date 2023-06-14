import Container from '../../Components/Container/Container.js';
import ToDoPageForm from '../../Components/ToDoPageComponents/ToDoForm.js';
import { useState } from 'react';
import ToDoList from '../../Components/ToDoPageComponents/ToDoList.js';

const ToDoPage = () => {
    const toDoData = [
        {
            id: 1,
            date: '2023-06-13',
            title: 'Task 1',
            description: 'Description 1',
            isDone: false,
            deadline: '2023-07-10',
          },
          {
            id: 2,
            date: '2023-06-14',
            title: 'Task 2',
            description: 'Description 2',
            isDone: false,
            deadline: '2023-07-01',
          },
    ];
    const [ toDo, setToDo ] = useState(toDoData);
    const [ isEditing, setIsEditing ] = useState(null)

    function addNewToDo(todo) {
        if (isEditing) {
            const index = toDo.findIndex(obj => obj.id === todo.id)
            setToDo(prevState => {
                const newState = [...prevState];
                newState.splice(index, 1, todo);

                return newState;
            })
            setIsEditing(null);
        } else {
            setToDo(prevState => {
                const newState = [todo, ...prevState];
    
                return newState;
            })
        }
    }

    function editTaskHandler(id) {
        const editToDo = toDo.find(obj => obj.id === id);
        setIsEditing(editToDo);
    }

    function addIsDoneHandler(id) {
        const index = toDo.findIndex(obj => obj.id === id);
        // console.log(index)
        setToDo(prevState => {
            let newState = [...prevState];
            // console.log(newState[index].isDone)
            newState[index] = {...newState[index], isDone: !newState[index].isDone};
            // console.log(newState[index])
            // console.log(newState[index].isDone)
            // console.log(newState)

            return newState;
        })
    }

    function deleteTaskHandler(id) {
        const index = toDo.findIndex(obj => obj.id === id);
        setToDo(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);

            return newState;
        })
    }

  return (
    <Container>
        <ToDoPageForm onToDo={addNewToDo} editData={isEditing} />

        <ToDoList toDoData={toDo} onIsDone={addIsDoneHandler} onTaskDelete={deleteTaskHandler} onTaskEdit={editTaskHandler} />
    </Container>
  )
}

export default ToDoPage;