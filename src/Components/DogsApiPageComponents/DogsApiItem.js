import { useEffect, useState } from 'react';

const DogsApiItem = ({ selectedBreed }) => {
    const [ imgUrl, setImgUrl ] = useState('');

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then(res => res.json())
        .then(data => setImgUrl(data.message));
    }, [selectedBreed])

    if (!selectedBreed) {
        return;
    }

  return (
    <div>
    {imgUrl && (<img alt='dog' src={imgUrl} />)}
    </div>
  )
}

export default DogsApiItem;