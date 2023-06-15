import { useState } from 'react';
import Container from '../../Components/Container/Container.js';
import DogsApiForm from '../../Components/DogsApiPageComponents/DogsApiForm.js';
import DogsApiItem from '../../Components/DogsApiPageComponents/DogsApiItem.js';

const DogsApiPage = () => {
    const [ selectedBreed, setSelectedBreed ] = useState('');

    const selectHandler = (breed) => {setSelectedBreed(breed)};

  return (
    <Container>
        <DogsApiForm onSelectBreed={selectHandler} selectedBreed={selectedBreed} />
        <DogsApiItem selectedBreed={selectedBreed} />
    </Container>
  )
}

export default DogsApiPage;