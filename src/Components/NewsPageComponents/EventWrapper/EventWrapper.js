import './EventWrapper.css';
import EventItem from '../Eventitem/EventItem';
import BigButton from '../BigButton/BigButton';
import eventPic from '../../../assets/NewsPageAssets/event.png';

function EventWrapper(props) {
    let { title } = props;
    if (!title) {
      return '';
    }
    return (
    <div className="event-wrapper">
      <h2 className="title">{title}</h2>
        <EventItem day='17' month='sau' title='CodeAcademy talents' img={eventPic} href='/#' />
        <EventItem day='17' month='sau' title='CodeAcademy talents' location='Online' href='/#' />
        <EventItem day='17' month='sau' title='CodeAcademy talents' location='Online' href='/#' />

        <BigButton text='Daugiau' href='https://codeacademy.lt/event/' />
    </div>
    )
}

export default EventWrapper;
