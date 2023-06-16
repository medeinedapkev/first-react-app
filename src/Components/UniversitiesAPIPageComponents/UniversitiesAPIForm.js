import { useState } from 'react';


const UniversitiesAPIForm = ({ onFormData }) => {
    const [ search, setSearch ] = useState('');

    const searchHandler = (event) => setSearch(event.target.value);

    function searchByText(event) {
        event.preventDefault();
        onFormData(search);
        
        setSearch('');
    }

  return (
    <form onSubmit={searchByText} >
       <label htmlFor='universities-search'>Search for universities:</label>
       <input type='text' value={search} onChange={searchHandler} name='universities-search' id='universities-search' />

       <input type='submit' />
    </form>
  )
}

export default UniversitiesAPIForm;

