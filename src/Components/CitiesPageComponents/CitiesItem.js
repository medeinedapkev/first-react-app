function CitiesItem({ data, className }) {
    const { name, population, location, touristAttractions, isCapital } = data;
    
    let cityNameElement = <h2>{name}</h2>;
    let cityDescriptionElement = <p>{name} city is located in {location.continent}, {location.country} and has population of {population} people.</p>;
    let mainClassName = 'city-item' + ' ' + className;

    if (isCapital) {
        cityNameElement = <h2>{name} (capital)</h2>;
        cityDescriptionElement = <p>{name} is the capital of {location.country}. {name} city is located in {location.continent}, {location.country} and has population of {population} people.</p>
        mainClassName = mainClassName + ' ' + 'capital';
    }

    let touristAttractionsTitle;

    if (touristAttractions.length > 1) {
        touristAttractionsTitle = <h3>Main Tourist attractions of {name} are:</h3>;
    } else if (touristAttractions.length === 1) {
        touristAttractionsTitle = <h3>Main Tourist attraction of {name} is:</h3>;
    }

  return (
    <div className={mainClassName}>
        {cityNameElement}
        {cityDescriptionElement}

        {touristAttractionsTitle}
           {touristAttractions.length > 0 && (
            <ul>
              {touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
            </ul>
        )}

    </div>
  )
}

export default CitiesItem;

