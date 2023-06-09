import './BackgroundImgButton.css';

function GirlButton({href, text1, text2}) {
    if (!href) {
        return '';
    }
    
    const firstSentence = text1 ? <span className="first-sentence">{text1}</span> : '';
    const secondSentence = text2 && <span className="second-sentence">{text2}</span>;

    return (
    <div className="girl-button">
        <a href={href}>
          <div className="girl-title">
              {firstSentence}
              {secondSentence}
          </div>
          <svg className="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fillRule="evenodd"/></svg>
        </a>
    </div>
    )
}

export default GirlButton;