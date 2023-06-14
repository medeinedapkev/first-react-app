import { firstLetterUpperCase } from '../../Components/Functions/Functions.js';
import { useState } from 'react';

const CitiesForm = ({ onNewCity }) => {
    const [ cityName, setCityName ] = useState('');
    const [ cityPopulation, setCityPopulation ] = useState('');
    const [ cityContinent, setCityContinent ] = useState('');
    const [ cityCountry, setCityCountry ] = useState('');
    const [ cityAttractions, setCityAttractions ] = useState('');
    const [ cityIsCapital, setCityIsCapital ] = useState(false);
    const [ cityFeatures, setCityFeatures ] = useState('')

    const cityNameHandler = (event) => setCityName(event.target.value);
    const cityPopulationHandler = (event) => setCityPopulation(event.target.value);
    const cityContinentHandler = (event) => setCityContinent(event.target.value);
    const cityCountryHandler = (event) => setCityCountry(event.target.value);
    const cityAttractionsHandler = (event) => setCityAttractions(event.target.value);
    const cityIsCapitalHandler  = (event) => setCityIsCapital(event.target.checked);

    const cityFeaturesHandler = (event) => {
        console.log(event.target.checked)
        if (event.target.checked === true) {
            setCityFeatures([event.target.value])
            console.dir(cityFeatures)
        }
    }

    function formSubmitHandler(event) {
        event.preventDefault()

        let attractionsElement;

        if (cityAttractions && cityAttractions.length > 0) {
            attractionsElement = cityAttractions.split(',').map(attraction => attraction.trim())
        }

        let newCityData = {
            name: firstLetterUpperCase(cityName),
            population: Number(cityPopulation),
            location: {
                continent: cityContinent,
                country: firstLetterUpperCase(cityCountry),
            },
            touristAttractions: attractionsElement,
            isCapital: cityIsCapital,
            features: cityFeatures,
        };

        console.log(cityFeatures)

        onNewCity(newCityData);

        setCityName('');
        setCityPopulation('');
        setCityContinent('');
        setCityCountry('');
        setCityAttractions('');
        setCityIsCapital(false);
    }
    
  return (
    <form className='cities-form' onSubmit={formSubmitHandler}>
    <div className='form-control'>
        <label htmlFor='city-name'>City: </label>
        <input type='text' name='city-name' id='city-name' value={cityName} onChange={cityNameHandler} />
    </div>

    <div className='form-control'>
        <label htmlFor='city-population'>Population: </label>
        <input type='number' name='city-population' id='city-population' value={cityPopulation} onChange={cityPopulationHandler} />
    </div>

    <div className='form-control'>
        <label htmlFor='city-country'>Country: </label>
        <input type='text' name='city-country' id='city-country' value={cityCountry} onChange={cityCountryHandler} />
    </div>

    <fieldset>
        <legend>Choose continent</legend>
        <div>
            <input type="radio" id="europe" name="europe" value="Europe" checked={cityContinent === 'Europe'} onChange={cityContinentHandler} />
            <label htmlFor="europe">Europe</label>
        </div>

        <div>
            <input type="radio" id="africa" name="africa" value="Africa" checked={cityContinent === 'Africa'} onChange={cityContinentHandler} />
            <label htmlFor="africa">Africa</label>
        </div>

        <div>
            <input type="radio" id="america" name="america" value="America" checked={cityContinent === 'America'} onChange={cityContinentHandler} />
            <label htmlFor="america">America</label>
        </div>

        <div>
            <input type="radio" id="asia" name="asia" value="Asia" checked={cityContinent === 'Asia'} onChange={cityContinentHandler} />
            <label htmlFor="asia">Asia</label>
        </div>

        <div>
            <input type="radio" id="australia" name="australia" value="Australia" checked={cityContinent === 'Australia'} onChange={cityContinentHandler} />
            <label htmlFor="australia">Australia/Oceania</label>
        </div>

        <div>
            <input type="radio" id="antartica" name="antartica" value="Antartica" checked={cityContinent === 'Antartica'} onChange={cityContinentHandler} />
            <label htmlFor="antartica">Antarctica</label>
        </div>
    </fieldset>

    <div className='form-control'>
        <label htmlFor='city-attractions'>Tourist attractions: </label>
        <textarea name='city-attractions' id='city-attractions' value={cityAttractions} onChange={cityAttractionsHandler} />
    </div>

    <div>
        <label htmlFor='city-capital'>Is capital: </label>
        <input type='checkbox' name='city-capital' id='city-capital' value={cityIsCapital} checked={cityIsCapital} onChange={cityIsCapitalHandler} />
    </div>

    <fieldset>
        <legend>Choose activities</legend>
        <div>
            <label htmlFor='bus-tour'>Bus Tours </label>
            <input type='checkbox' name='bus-tour' id='bus-tour' value='Bus-Tour' checked={cityFeatures === 'Bus-Tour'} onChange={cityFeaturesHandler} />
        </div> 

        <div>
            <label htmlFor='historic-sites'>Historic Sites </label>
            <input type='checkbox' name='historic-sites' id='historic-sites' value='Historic-Sites' checked={cityFeatures === 'Historic-Sites'} onChange={cityFeaturesHandler} />
        </div>

        <div>
            <label htmlFor='beach'>Beach </label>
            <input type='checkbox' name='beach' id='beach' value='Beach' checked={cityFeatures === 'Beach'} onChange={cityFeaturesHandler} />
        </div>

        <div>
            <label htmlFor='metro'>Metro </label>
            <input type='checkbox' name='metro' id='metro' value='Metro' checked={cityFeatures === 'Metro'} onChange={cityFeaturesHandler} />
        </div>

        <div>
            <label htmlFor='hiking-trails'>Hiking trails </label>
            <input type='checkbox' name='hiking-trails' id='hiking-trails' value='Hiking Trails' checked={cityFeatures === 'Hiking Trails'} onChange={cityFeaturesHandler} />
        </div>

        <div>
            <label htmlFor='art-galleries'>Art Galleries </label>
            <input type='checkbox' name='art-galleries' id='art-galleries' value='Art Galleries' checked={cityFeatures === 'Art Galleries'} onChange={cityFeaturesHandler} />
        </div>
    </fieldset>

        <input type='submit' id='form-submit-button' />
    </form>
  )
}

export default CitiesForm;