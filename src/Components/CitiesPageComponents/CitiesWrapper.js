import CitiesItem from '../../Components/CitiesPageComponents/CitiesItem.js';

const CitiesWrapper = ({ citiesData, setFunction }) => {
  return (
    <div className='cities-wrapper'>
        {citiesData.map((city, index) => {
            let lastElementClass = '';
            if (index === citiesData.length - 1 && citiesData.length % 2 !== 0) {
                lastElementClass = ' odd-last-city';
            }
            return <CitiesItem data={city} key={index} oddClass={lastElementClass} index={index} setFunction={setFunction} />
            }
        )}
    </div>
  )
}

export default CitiesWrapper;