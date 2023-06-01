import './VideoWrapper.css';
import BigButton from '../BigButton/BigButton';

function VideoWrapper(props) {
  let { title, motto } = props;
    return (
        <div className="video-wrapper">
        <h2 className="title">{title}</h2>
        <iframe className="video-item" width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <p className="motto">{motto}</p>
        <BigButton text='Visi vaizdo įrašai' />
    </div>
    )
}

export default VideoWrapper;