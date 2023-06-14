import React, { useEffect, useState } from 'react';

const ChuckNorrisForm = ({ onJoke }) => {
    const [ categories, setCategories ] = useState([]);
    const [ selectedCategory, setSelectedCategory ] = useState('');
    const [ searchJoke, setSearchJoke ] = useState('');

    useEffect(() => {
        const categoryParams = selectedCategory ? `?category=${selectedCategory}` : '';
        fetch('https://api.chucknorris.io/jokes/random' + categoryParams)
        .then(res => res.json())
        .then(data => onJoke(data.value))
    }, [selectedCategory])

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then(categoriesData => setCategories(categoriesData))
    }, [])

    const categorySelectHandler = (event) => setSelectedCategory(event.target.value);
    const searchJokeHandler = (event) => setSearchJoke(event.target.value);


    function searchForJoke(event) {
        event.preventDefault()
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchJoke}`)
        .then(res => res.json())
        .then(searchData => {
            const totalNum = searchData.total;
            const index = Math.floor(Math.random() * totalNum)
            const jokeBySearch = searchData.result[index].value;
            console.log(jokeBySearch)
            onJoke(jokeBySearch);
        })

        setSearchJoke('');
    }

  return (
    <form>
        <label htmlFor='select-category'>Select category: </label>
        <select name='select-category' id='select-category' onChange={categorySelectHandler} defaultValue=''>
            <option value='' disabled>--- Select category ---</option>
            {categories.map((category, index) => <option key={index} value={category}>- {category}</option>)}
        </select>
        <div className='form-control'>
            <input type='text' name='search' id='search-input' value={searchJoke} onChange={searchJokeHandler} />
            <input type='Submit' onClick={searchForJoke}/>
        </div>
    </form>
  )
}

export default ChuckNorrisForm;