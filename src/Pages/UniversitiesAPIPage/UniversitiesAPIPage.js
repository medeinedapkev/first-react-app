import { useState } from 'react';
import Container from '../../Components/Container/Container.js';
import UniversitiesAPIForm from '../../Components/UniversitiesAPIPageComponents/UniversitiesAPIForm.js';
import UniversitiesAPIItem from '../../Components/UniversitiesAPIPageComponents/UniversitiesAPIItem.js';

const UniversitiesAPIPage = () => {
    const [ universities, setUniversities ] = useState('');

    function formHandler(searchText) {
        fetch(`http://universities.hipolabs.com/search?name=${searchText}`)
        .then(res => res.json())
        .then(data => setUniversities(data))
    }


  return (
    <Container>
        <UniversitiesAPIForm onFormData={formHandler} />

        <UniversitiesAPIItem data={universities} />
    </Container>
  )
}

export default UniversitiesAPIPage;