function EventItem(props) {
    let { day, month, title, location, img } = props;
    const photoElement = img ? <img src={img} alt='' /> : '';
    const locationElement = location ? <div className="event-location">{location}</div> : '';
    return (
        <div className="event-item">
        <a href="/#">
          {photoElement}
          <div className="event-content">
          <div className="event-date">
            <span className="event-day">{day}</span>
            <span className="event-month">{month}</span>
          </div>
          <div className="event-info">
          {locationElement}
          <h3 className="event-card-title">{title}</h3>
          </div>
          </div>
        </a>
      </div>
    )
}

export default EventItem;