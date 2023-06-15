import { useState } from 'react';

const AIForm = ({ onFormData }) => {
    const [ searchName, setSearchName ] = useState('');

    const nameHandler = (event) => setSearchName(event.target.value);

    function searchByName(event) {
        event.preventDefault();
        onFormData(searchName);

        setSearchName('')
    }

  return (
    <form onSubmit={searchByName}>
        <label htmlFor='person-name'>Enter name: </label>
        <input type='text' name='person-name' id='person-name' value={searchName} onChange={nameHandler} />
        <input type='submit' />
    </form>
  )
}

export default AIForm;