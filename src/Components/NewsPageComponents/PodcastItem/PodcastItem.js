import './PodcastItem.css';

function PodcastItem(props) {
    let { time, title, date, podcastPic, buttonPlay, href } = props;
    if (!title || !time || !href) {
        return '';
    }

    const dateElement = date ? <div className="post-card-info">{date}</div> : '';
    return (
        <div className="podcast-item">
        <div className="podcast-play">
            <img src={podcastPic} alt='' />
            <p className="time">{time}</p>
            <a className="button-play" href={href}><img src={buttonPlay} alt='' /></a>
        </div>
        <div className="podcast-description">
            <h3 className="podcast-title">{title}</h3>
            {dateElement}
        </div>
        </div>
    )
}

export default PodcastItem;