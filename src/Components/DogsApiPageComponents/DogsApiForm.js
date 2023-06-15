import { useEffect } from 'react';
import { useState } from 'react';


const DogsApiForm = () => {
    const [ breeds, setBreeds ] = useState({})

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(breedsData => {
            // const allBreeds = Object.entries(breedsData.message);
            // setBreeds(allBreeds);
            // console.log(allBreeds[0][1])
            // console.log(allBreeds.length)

            const breeds = breedsData.message;

            
            for (const key in breeds) {
              const mainBreed = key;
              const subBreeds = breeds[key];
            //   console.log(mainBreed)
            //   console.log(subBreeds)
              console.log([mainBreed, ...subBreeds])
            }
        })
    }, [])


  return (
    <form>
        <label htmlFor='select-breed'>Select breed: </label>
        <select name='select-breed' id='select-breed' >
            {/* {breeds.forEach(breed => console.log(breed))} */}
        </select>
        <input type='submit' />
    </form>
  )
}

export default DogsApiForm;