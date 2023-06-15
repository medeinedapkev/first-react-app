import { useState } from 'react';
import Container from '../../Components/Container/Container.js';
import DogsApiForm from '../../Components/DogsApiPageComponents/DogsApiForm.js';

const DogsApiPage = () => {
    const [ dogPic, setDogPic ] = useState('');

    const randomDogHandler = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(randomDogPic => setDogPic(randomDogPic.message))
    }


  return (
    <Container>
        <DogsApiForm />

        <button onClick={randomDogHandler}>Get random dog picture</button>
        {dogPic && (<img alt='' src={dogPic} />)}
    </Container>
  )
}

export default DogsApiPage;