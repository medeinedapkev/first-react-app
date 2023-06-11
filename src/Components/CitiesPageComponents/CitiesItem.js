import { deleteHandler } from '../Functions/Functions.js';

function CitiesItem({ data, oddClass, setFunction, index }) {
    const { name, population, location, touristAttractions, isCapital, features } = data;
    
    let cityNameElement = <h2>{name}</h2>;
    let cityDescriptionElement = <p>{name} city is located in {location.continent}, {location.country} and has population of {population} people.</p>;
    let capitalClass = '';

    if (isCapital) {
        cityNameElement = <h2>{name} (capital)</h2>;
        cityDescriptionElement = <p>{name} is the capital of {location.country}. {name} city is located in {location.continent}, {location.country} and has population of {population} people.</p>;
        capitalClass = ' capital';
    }

    let touristAttractionsTitle;

    if (touristAttractions && touristAttractions.length > 1) {
        touristAttractionsTitle = <h3>Main Tourist attractions of {name} are:</h3>;
    } else if (touristAttractions && touristAttractions.length === 1) {
        touristAttractionsTitle = <h3>Main Tourist attraction of {name} is:</h3>;
    }

    let featuresTitle;

    if (features && features.length > 1) {
      featuresTitle = <h4>Features:</h4>;
    } else if (features && features.length === 1) {
      featuresTitle = <h4>Feature:</h4>;
    }

    const featureItem = features.map((feature, index) => <span key={index}>#{feature} </span>);

  return (
    <div className={`city-item${capitalClass}${oddClass}`}>
        {cityNameElement}
        {cityDescriptionElement}

        {touristAttractionsTitle}
           {touristAttractions && touristAttractions.length > 0 && (
            <ul>
              {touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
            </ul>
        )}

        {featuresTitle}
        {featureItem}

        <button onClick={() => deleteHandler(setFunction, index)}>Delete</button>
        <button onClick={() => {console.log(data)}}>Edit</button>
    </div>
  )
}

export default CitiesItem;

