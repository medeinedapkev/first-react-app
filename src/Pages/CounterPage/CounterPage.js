import './CounterPage.css';
import Container from '../../Components/Container/Container';
import { useState } from 'react';


const CounterPage = () => {
    const number = 5;
    const [ count, setCount ] = useState(number);
    const [scores, setScores] = useState([]);

    function addScoreHandler() {
        setScores(prevState => {
            const newState = [count, ...prevState];
            // newState.unshift(count)

            return newState;
        })
    }

    const reset = () => setCount(number);
    
    const countButtonHandler = (number) => setCount(prevState => prevState + number);
    
    function changeHandler(event) {
        const inputValue = Number(event.target.value);
        
        if (inputValue > 10) {
            setCount(10)
        } else if (inputValue < 1) {
            setCount(0)
        } else {
            setCount(inputValue);
        }
    }

    function getDisplayClass(item) {
        let displayClassName = '';
        if (item < 5) {
            displayClassName = 'red';
        } else if (item === 5) {
            displayClassName = 'orange'
        } else {
            displayClassName = 'green';
        }

        return displayClassName;
    }

    function deleteScoreHandler(index) {
        setScores(prevState => {
            const newState = [...prevState];
            newState.splice(index, 1);
            return newState;
        })
        // const updatedScores = [...scores];
        // updatedScores.splice(index, 1);
        // setScores(updatedScores);
    }

    function deleteAllScoresHandler() {
        setScores(prevState => {
            const newState = [...prevState]
            newState.splice(0, newState.length)

            return newState;
        })

    }
    
    const scoreElement = scores && scores.length > 0 && (
    <ul>
        {scores.map((score, index) => (
        <li className={getDisplayClass(score)} key={index}>{score}           
        <button onClick={() => deleteScoreHandler(index)}>Delete</button>
        </li>)
        )}
    </ul>
    );

  return (
    <Container>
        <div className='grades-form'>
           <input type='number' max='10' min='0' value={count} onChange={changeHandler} ></input>
           <h3 className={getDisplayClass(count)}>{count}</h3>

           <button onClick={() => countButtonHandler(-1)} disabled={count <= 0}>-1</button>
           <button onClick={() => countButtonHandler(-2)} disabled={count <= 1}>-2</button>
           <button onClick={() => countButtonHandler(-5)} disabled={count <= 4}>-5</button>
           <button onClick={reset}>Reset</button>
           <button onClick={() => countButtonHandler(5)} disabled={count >= 6}>+5</button>
           <button onClick={() => countButtonHandler(2)} disabled={count >= 9}>+2</button>
           <button onClick={() => countButtonHandler(1)} disabled={count >= 10}>+1</button>

           <button onClick={addScoreHandler}>Add score</button>
           <button onClick={deleteAllScoresHandler}>Delete all scores</button>
        </div>

        <div className='scores-wrapper'>
           <h4>{scores && scores.length > 0 ? 'Scores:' : 'No scores'}</h4>
           {scoreElement}
        </div>
    </Container>
  )
}

export default CounterPage;

