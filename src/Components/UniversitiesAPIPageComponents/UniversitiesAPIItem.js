import { v4 as uuid } from 'uuid';

const UniversitiesAPIItem = ({ data }) => {
    if (!data) {
        return;
    }

    const universityElement = data && data.length > 0 && data.map(university => {
        const universityItem = (
        <div className='university-item' key={uuid()}>
            <h4>{university.name}</h4>
            <span>{university.country}</span>
            {university.web_pages.map(page => <a key={uuid()} href={page} rel='norefferer' target='_blank'>You can visit their page here...</a>)}
        </div>
        )

        return universityItem;
    })

  return (
    <div className='universities-wrapper'>
        <h3>Universities of {data.length} list:</h3>
            {universityElement}
    </div>
  )
}

export default UniversitiesAPIItem;