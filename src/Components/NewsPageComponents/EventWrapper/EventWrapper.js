import './EventWrapper.css';
import EventItem from '../Eventitem/EventItem';
import BigButton from '../BigButton/BigButton';
import eventPic from '../../../assets/NewsPageAssets/event.png';

function EventWrapper(props) {
    let { title } = props;
    return (
    <div className="event-wrapper">
      <h2 className="title">{title}</h2>
        <EventItem day='17' month='sau' title='CodeAcademy talents' img={eventPic} />
        <EventItem day='17' month='sau' title='CodeAcademy talents' location='Online' />
        <EventItem day='17' month='sau' title='CodeAcademy talents' location='Online' />

        <BigButton text='Daugiau' />
    </div>
    )
}

export default EventWrapper;