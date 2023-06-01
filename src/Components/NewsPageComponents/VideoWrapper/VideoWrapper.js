import './VideoWrapper.css';
import BigButton from '../BigButton/BigButton';

function VideoWrapper(props) {
  let { title, motto } = props;
  if (!title) {
    return '';
  }

  const mottoElement = motto ? <p className="motto">{motto}</p> : '';

    return (
        <div className="video-wrapper">
        <h2 className="title">{title}</h2>
        <iframe className="video-item" width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        {mottoElement}
        <BigButton text='Visi vaizdo įrašai' href='https://codeacademy.lt/type/video/' />
    </div>
    )
}

export default VideoWrapper;
