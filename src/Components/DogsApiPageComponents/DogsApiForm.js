import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const DogsApiForm = ({ onSelectBreed, selectedBreed }) => {
    const [ breeds, setBreeds ] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
            const breedsData = data.message;
            const breedsArr = [];

            for (let mainBreed in breedsData) {
                const subBreeds = breedsData[mainBreed];
                const breedObj = { mainBreed, subBreeds };

                breedsArr.push(breedObj);
            }

            setBreeds(breedsArr);
        });
    }, [])

    const breedsOptionElement = breeds.map(data => {
        const { mainBreed, subBreeds } = data;

        if (subBreeds.length > 0 ) {
            const subBreedsOptions = subBreeds.map(subBreed => <option value={`${mainBreed}/${subBreed}`} key={uuid()}>{mainBreed} ({subBreed})</option>);
            
            return subBreedsOptions;
        }
        
        return <option key={uuid()} value={mainBreed}>{mainBreed}</option>;
    })

    if (breeds.length === 0) {
        return '';
    }


  return (
    <form>
        <label htmlFor='select-breed'>Select breed: </label>
        <select value={selectedBreed} onChange={(e) => onSelectBreed(e.target.value)} name='select-breed' id='select-breed'>
            <option value='' disabled>--- Select a breed ---</option>
            {breedsOptionElement}
        </select>
    </form>
  )
}

export default DogsApiForm;