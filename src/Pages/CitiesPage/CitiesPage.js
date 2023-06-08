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

    const [ cities, setCities ] = useState(citiesData)
    console.log(cities)


    function formSubmitHandler(event) {
        event.preventDefault()
        const form = event.target;
            console.dir(form.elements[0].value)
            console.dir(form.elements[1].value)
            console.dir(form.elements[2].value)
            console.dir(form.elements[3].value)
            console.dir(typeof form.elements[4].value)
            console.dir(form.elements[5].value)
            let newCityData = {
                name: form.elements[0].value,
                population: form.elements[1].value,
                location: {
                    continent: form.elements[2].value,
                    country: form.elements[3].value,
                },
                touristAttractions: ['Vilniaus katedra', 'Gedimino pilies bokštas', 'Aušros vartai'],
                isCapital: form.elements[5].value,
            }
    }

  return (
    <Container>
        <form className='cities-form' onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor='city-name'>City: </label>
                <input type='text' name='city-name' id='city-name' />
            </div>

            <div>
                <label htmlFor='city-population'>Population: </label>
                <input type='number' name='city-population' id='city-population' />
            </div>

            <div>
                <label htmlFor='city-continent'>Continent: </label>
                <input type='text' name='city-continent' id='city-continent' />
            </div>

            <div>
                <label htmlFor='city-country'>Country: </label>
                <input type='text' name='city-country' id='city-country' />
            </div>

            <div>
                <label htmlFor='city-attractions'>Tourist attractions: </label>
                <textarea name='city-attractions' id='city-attractions' />
            </div>

            <div>
                <label htmlFor='city-capital'>Is capital: </label>
                <input type='checkbox' name='city-capital' id='city-capital' value='true'></input>
            </div>
            
            <input type='submit' id='form-submit-button' />
        </form>
        <div className='cities-wrapper'>
            {cities.map((city, index) => {
                let lastElementClass = '';
                if (index === cities.length - 1 && cities.length % 2 !== 0) {
                    lastElementClass = 'odd-last-city';
                }
                return <CitiesItem data={city} key={index} className={lastElementClass} />
                }
            )}
        </div>
    </Container>
  )
}

export default CitiesPage;