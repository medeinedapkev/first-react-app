import NewsWrapper from '../NewsWrapper/News.Wrapper';
import VideoWrapper from '../VideoWrapper/VideoWrapper';

function MainPart() {
    return (
        <div className="main-part">
        <section className="news">
            <NewsWrapper mainTitle='Naujienos' button='Visos naujienos' />
        </section>
  
        <section className="video">
            <VideoWrapper title='Vaizdo įrašai' motto='Jei galiu aš - gali ir tu!' button='Visi vaizdo įrašai' />
        </section>
      </div>
    )
}

export default MainPart;