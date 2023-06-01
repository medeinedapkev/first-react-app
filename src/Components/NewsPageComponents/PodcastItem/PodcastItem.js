import './PodcastItem.css';

function PodcastItem(props) {
    let { time, title, date, podcastPic, buttonPlay } = props;
    return (
        <div className="podcast-item">
        <div className="podcast-play">
            <img src={podcastPic} alt='' />
            <p className="time">{time}</p>
            <a className="button-play" href="/#"><img src={buttonPlay} alt='' /></a>
        </div>
        <div className="podcast-description">
            <h3 className="podcast-title">{title}</h3>
            <div className="post-card-info">{date}</div>
        </div>
        </div>
    )
}

export default PodcastItem;