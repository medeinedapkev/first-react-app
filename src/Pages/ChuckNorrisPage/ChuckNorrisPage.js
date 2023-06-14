import React, { useState } from 'react';
import Container from '../../Components/Container/Container.js';
import ChuckNorrisForm from '../../Components/ChuckNorrisPageComponents/ChuckNorrisForm.js';


const ChuckNorrisPage = () => {
    const [ joke, setJoke ] = useState('');

    const randomJokeHandler = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => setJoke(data.value))
    }

    const jokeHandler = (data) => setJoke(data);

  return (
    <Container>
            <div>
                <ChuckNorrisForm onJoke={jokeHandler} />
                <p>{joke}</p>
                <button onClick={randomJokeHandler}>Get a random joke</button>
            </div>
    </Container>
  )
}

export default ChuckNorrisPage;