function VideoWrapper(props) {
  let { title, motto, button } = props;
    return (
        <div className="video-wrapper">
        <h2 className="title">{title}</h2>
        <iframe className="video-item" width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
        <p className="motto">{motto}</p>
        <a className="button big" href="https://codeacademy.lt/visos-naujienos/">
          <span>{button}</span>
          <svg className="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fillRule="evenodd"/></svg>
        </a>
    </div>
    )
}

export default VideoWrapper;