import Container from '../../Components/Container/Container.js';
import ToDoPageForm from '../../Components/ToDoPageComponents/ToDoForm.js';
import { useState } from 'react';
import ToDoList from '../../Components/ToDoPageComponents/ToDoList.js';

const ToDoPage = () => {
    const toDoData = [];
    const [ toDo, setToDo ] = useState(toDoData);

    function addNewToDo(newToDo) {
        setToDo(prevState => {
            const newState = [newToDo, ...prevState];
            console.log(newState)

            return newState;
        })

    }

  return (
    <Container>
        <ToDoPageForm onToDo={addNewToDo} />

        <ToDoList toDoData={toDo} setFunction={setToDo} />
    </Container>
  )
}

export default ToDoPage;