import './MainPart.css';
import NewsWrapper from '../NewsWrapper/NewsWrapper';
import VideoWrapper from '../VideoWrapper/VideoWrapper';

function MainPart() {
    return (
        <div className="main-part">
        <section className="news">
            <NewsWrapper title='Naujienos' />
        </section>
  
        <section className="video">
            <VideoWrapper title='Vaizdo įrašai' motto='Jei galiu aš - gali ir tu!' />
        </section>
      </div>
    )
}

export default MainPart;