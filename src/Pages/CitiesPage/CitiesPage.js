import './CitiesPage.css';
import Container from '../../Components/Container/Container.js';
import { useState } from 'react';
import CitiesForm from '../../Components/CitiesPageComponents/CitiesForm';
import CitiesWrapper from '../../Components/CitiesPageComponents/CitiesWrapper';

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
            features: ['Art Galleries', 'Historic Sites'],
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
            features: ['Historic Sites'],
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
            features: ['Beach', 'Hiking trails'],
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
            features: ['Hiking trails', 'Historic Sites', 'Bus Tours'],
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
            features: [],
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
            features: ['Metro', 'Hiking trails', 'Bus Tours'],
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
            features: ['Bus Tours'],
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
            features: ['Metro', 'Art Galleries', 'Historic Sites', 'Bus Tours'],
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
            features: ['Beach', 'Metro', 'Historic Sites', 'Bus Tours'],
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
            features: ['Art Galleries', 'Historic Sites', 'Bus Tours'],
        },
    ]

    const [ cities, setCities ] = useState(citiesData);

    function addNewCity(newCity) {
        setCities(prevState => {
        const newState = [newCity, ...prevState];

        return newState;
    })

    }

    return (
        <Container>
            <CitiesForm onNewCity={addNewCity} />

            <CitiesWrapper citiesData={cities} setFunction={setCities} />
        </Container>
    )
}

export default CitiesPage;