import BigNewsitem from '../BigNewsItem/BigNewsItem';
import SmallNewsItem from '../SmallNewsItem/SmallNewsItem';
import bigNews1 from '../../../assets/NewsPageAssets/naujienos1.jpg';
import bigNews2 from '../../../assets/NewsPageAssets/naujienos2.jpg';
import smallNews from '../../../assets/NewsPageAssets/small-news1.jpg'

function NewsWrapper(props) {
  let { mainTitle, button } = props;
    return (
    <div className="news-wrapper">
     <h1 className="title">{mainTitle}</h1>
      <div className="news-list">

          <div className="big-news">
            <BigNewsitem category='AI & deep learning' title='Ar "ChatGPT" užims mūsų darbo vietas?' date='2023-01-27' img={bigNews1} />
            <BigNewsitem category='naujienos' title='Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?' date='2022-12-12' img={bigNews2} />
          </div>
        
          <div className="small-news">
            <SmallNewsItem category='naujienos' title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' date='2022-12-12' img={smallNews} />
            <SmallNewsItem category='naujienos' title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' date='2022-12-12' img={smallNews} />
            <SmallNewsItem category='naujienos' title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' date='2022-12-12' img={smallNews} />
            <SmallNewsItem category='naujienos' title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' date='2022-12-12' img={smallNews} />
          </div>
      </div>
      <a className="button big" href="https://codeacademy.lt/visos-naujienos/">
        <span>{button}</span>
        <svg className="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fillRule="evenodd"/></svg></a>
    </div> 
    )
}

export default NewsWrapper;