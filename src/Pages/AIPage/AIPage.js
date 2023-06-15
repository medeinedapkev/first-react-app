import { useState } from 'react';
import AIForm from '../../Components/AIPageComponents/AIForm';
import Container from '../../Components/Container/Container';


const AIPage = () => {
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ nationalities, setNationalities ] = useState([]);

    const nameHandler = (data) => setName(data);
    const ageHandler = (data) => setAge(data);
    const genderHandler = (data) => setGender(data);
    const nationalitiesHandler = (data) => setNationalities(data);

  return (
    <Container>
        <AIForm onName={nameHandler} onAge={ageHandler} onGender={genderHandler} onNationalities={nationalitiesHandler} />
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <h4>Nationality:</h4>
            <ul>
                {nationalities.map((country, index) => <li key={index}>{country.country_id}</li>)}
            </ul>
        </div>
    </Container>
  )
}

export default AIPage;