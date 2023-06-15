import { useState } from 'react';
import AIForm from '../../Components/AIPageComponents/AIForm';
import Container from '../../Components/Container/Container';
import { firstLetterUpperCase } from '../../Components/Functions/Functions';


const AIPage = () => {
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');
    const [ gender, setGender ] = useState('');
    const [ nationalities, setNationalities ] = useState([]);

    function formHandler(searchName) {
        setName(searchName);
        
        fetch(`https://api.agify.io?name=${searchName}`)
        .then(res => res.json())
        .then(ageData => {
            setAge(ageData.age);
        })

        fetch(`https://api.genderize.io?name=${searchName}`)
        .then(res => res.json())
        .then(genderData => {
            setGender(genderData.gender);
        })

        fetch(`https://api.nationalize.io?name=${searchName}`)
        .then(res => res.json())
        .then(nationalityData => {
            setNationalities(nationalityData.country);
        })
    }

  return (
    <Container>
        <AIForm onFormData={formHandler} />
        {name && age && gender && nationalities.length > 0 && (
        <div>
            <p>Name: {firstLetterUpperCase(name)}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <h4>Nationality:</h4>
            <ul>
                {nationalities.map((country, index) => <li key={index}>{country.country_id}</li>)}
            </ul>
        </div>
        )}
    </Container>
  )
}

export default AIPage;