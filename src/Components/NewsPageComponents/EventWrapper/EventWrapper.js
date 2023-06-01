import EventItem from '../Eventitem/EventItem';
import eventPic from '../../../assets/NewsPageAssets/event.png';

function EventWrapper(props) {
    let { title, button } = props;
    return (
    <div className="event-wrapper">
      <h2 className="title">{title}</h2>
        <EventItem day='17' month='sau' title='CodeAcademy talents' img={eventPic} />
        <EventItem day='17' month='sau' title='CodeAcademy talents' location='Online' />
        <EventItem day='17' month='sau' title='CodeAcademy talents' location='Online' />

        <a className="button big" href="https://codeacademy.lt/event/">
          <span>{button}</span>
          <svg className="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fillRule="evenodd"/></svg>
        </a>
    </div>
    )
}

export default EventWrapper;