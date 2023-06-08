import './CitiesPage.css';
import CitiesItem from '../../Components/CitiesPageComponents/CitiesItem.js';
import Container from '../../Components/Container/Container.js';
import { useState } from 'react';

function CitiesPage() {

    const citiesData = [
        {
            name: 'Vilnius',
            population: 544386,
            location: {
                continent: 'Europe',
                country: 'Lithuania',
            },
            touristAttractions: ['Vilniaus katedra', 'Gedimino pilies bokštas', 'Aušros vartai'],
            isCapital: true,
        },
        {
            name: 'Kaunas',
            population: 295269,
            location: {
                continent: 'Europe',
                country: 'Lithuania',
            },
            touristAttractions: [],
            isCapital: false,
        },
        {
            name: 'Klaipėda',
            population: 152818,
            location: {
                continent: 'Europe',
                country: 'Lithuania',
            },
            touristAttractions: ['Lietuvos jūrų muziejus'],
            isCapital: false,
        },
        {
            name: 'Varšuva',
            population: 3100844,
            location: {
                continent: 'Europe',
                country: 'Poland',
            },
            touristAttractions: ['Warsaw castle'],
            isCapital: true,
        },
        {
            name: 'Ryga',
            population: 632614,
            location: {
                continent: 'Europe',
                country: 'Latvia',
            },
            touristAttractions: [],
            isCapital: true,
        },
        {
            name: 'Berlynas',
            population: 6144600,
            location: {
                continent: 'Europe',
                country: 'Germany',
            },
            touristAttractions: ['Brandenbergo vartai', 'Berlyno katedra', 'Berlyno zoologijos muziejus', 'Pergamo muziejus'],
            isCapital: true,
        },
        {
            name: 'Praha',
            population: 6144600,
            location: {
                continent: 'Europe',
                country: 'Czech republic',
            },
            touristAttractions: ['Karolio tiltas', 'Prahos pilis', 'Prahos zoologijos sodas', 'Šokantis namas'],
            isCapital: true,
        },
        {
            name: 'Paryžius',
            population: 2161000,
            location: {
                continent: 'Europe',
                country: 'France',
            },
            touristAttractions: ['Eifelio bokštas', 'Luvras', 'Triumfo arka'],
            isCapital: true,
        },
        {
            name: 'Roma',
            population: 2873000,
            location: {
                continent: 'Europe',
                country: 'Italy',
            },
            touristAttractions: ['Koliziejus', 'Trevi fontanas', 'Panteonas'],
            isCapital: true,
        },
        {
            name: 'Venecija',
            population: 261905,
            location: {
                continent: 'Europe',
                country: 'Italy',
            },
            touristAttractions: ['Šv. Morkaus bazilika'],
            isCapital: false,
        },
    ]

    const [ cities, setCities ] = useState(citiesData);
    const [ cityName, setCityName ] = useState('');
    const [ cityPopulation, setCityPopulation ] = useState('');
    const [ cityContinent, setCityContinent ] = useState('');
    const [ cityCountry, setCityCountry ] = useState('');
    const [ cityAttractions, setCityAttractions ] = useState('');
    const [ cityIsCapital, setCityIsCapital ] = useState(false);

    const cityNameHandler = (event) => setCityName(event.target.value);
    const cityPopulationHandler = (event) => setCityPopulation(event.target.value);
    const cityContinentHandler = (event) => setCityContinent(event.target.value);
    const cityCountryHandler = (event) => setCityCountry(event.target.value);
    const cityAttractionsHandler = (event) => setCityAttractions(event.target.value);
    const cityIsCapitalHandler  = (event) => setCityIsCapital(event.target.value);

    function firstLetterUpperCase(element) {
        const firstLetter = element.charAt(0).toUpperCase();
        const lastOfStr = element.slice(1, element.length)
        const newElement = firstLetter + lastOfStr;

        return newElement
    }

    function formSubmitHandler(event) {
        event.preventDefault()

        let attractionsElement;

        if (cityAttractions && cityAttractions.length > 0) {
            attractionsElement = cityAttractions.split(',')
        }

        setCities(prevState => {
            let newCityData = {
                name: firstLetterUpperCase(cityName),
                population: Number(cityPopulation),
                location: {
                    continent: firstLetterUpperCase(cityContinent),
                    country: firstLetterUpperCase(cityCountry),
                },
                touristAttractions: attractionsElement,
                isCapital: cityIsCapital,
            };

            const newState = [newCityData, ...prevState]
            console.log(newState)

            return newState;
        })

        setCityName('');
        setCityPopulation('');
        setCityContinent('');
        setCityCountry('');
        setCityAttractions('');
        setCityIsCapital(false);
        console.log(cityIsCapital)
    }

  return (
    <Container>
        <form className='cities-form' onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor='city-name'>City: </label>
                <input type='text' name='city-name' id='city-name' value={cityName} onChange={cityNameHandler} />
            </div>

            <div>
                <label htmlFor='city-population'>Population: </label>
                <input type='number' name='city-population' id='city-population' value={cityPopulation} onChange={cityPopulationHandler} />
            </div>

            <div>
                <label htmlFor='city-continent'>Continent: </label>
                <input type='text' name='city-continent' id='city-continent' value={cityContinent} onChange={cityContinentHandler} />
            </div>

            <div>
                <label htmlFor='city-country'>Country: </label>
                <input type='text' name='city-country' id='city-country' value={cityCountry} onChange={cityCountryHandler} />
            </div>

            <div>
                <label htmlFor='city-attractions'>Tourist attractions: </label>
                <textarea name='city-attractions' id='city-attractions' value={cityAttractions} onChange={cityAttractionsHandler} />
            </div>

            <div>
                <label htmlFor='city-capital'>Is capital: </label>
                <input type='checkbox' name='city-capital' id='city-capital' value={cityIsCapital} onChange={cityIsCapitalHandler}></input>
            </div>
            
            <input type='submit' id='form-submit-button' />
        </form>
        <div className='cities-wrapper'>
            {cities.map((city, index) => {
                let lastElementClass = '';
                if (index === cities.length - 1 && cities.length % 2 !== 0) {
                    lastElementClass = ' odd-last-city';
                }
                return <CitiesItem data={city} key={index} oddClass={lastElementClass} />
                }
            )}
        </div>
    </Container>
  )
}

export default CitiesPage;