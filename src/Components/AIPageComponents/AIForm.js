import { useState } from 'react';

const AIForm = ({ onName, onAge, onGender, onNationalities }) => {
    const [ searchName, setSearchName ] = useState('');

    const nameHandler = (event) => setSearchName(event.target.value);

    function searchByName(event) {
        event.preventDefault();
        fetch(`https://api.agify.io?name=${searchName}`)
        .then(res => res.json())
        .then(ageData => {
            onName(ageData.name);
            onAge(ageData.age);
        })

        fetch(`https://api.genderize.io?name=${searchName}`)
        .then(res => res.json())
        .then(genderData => {
            onGender(genderData.gender);
        })

        fetch(`https://api.nationalize.io?name=${searchName}`)
        .then(res => res.json())
        .then(nationalityData => {
            onNationalities(nationalityData.country);
        })
        
        setSearchName('')
    }

  return (
    <form>
        <label htmlFor='person-name'>Enter name: </label>
        <input type='text' name='person-name' id='person-name' value={searchName} onChange={nameHandler} />
        <input type='submit' onClick={searchByName}  />
    </form>
  )
}

export default AIForm;