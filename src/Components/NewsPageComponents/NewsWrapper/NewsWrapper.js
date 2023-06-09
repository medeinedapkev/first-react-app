import './NewsWrapper.css';
import BigNewsitem from '../BigNewsItem/BigNewsItem';
import SmallNewsItem from '../SmallNewsItem/SmallNewsItem';
import BigButton from '../BigButton/BigButton';
import bigNews1 from '../../../assets/NewsPageAssets/naujienos1.jpg';
import bigNews2 from '../../../assets/NewsPageAssets/naujienos2.jpg';
import smallNews from '../../../assets/NewsPageAssets/small-news1.jpg';

function NewsWrapper(props) {
  let { title } = props;
  if (!title) {
    return '';
  }

    return (
    <div className="news-wrapper">
     <h1 className="title">{title}</h1>
      <div className="news-list">

          <div className="big-news">
            <BigNewsitem category='AI & deep learning' 
            title='Ar "ChatGPT" užims mūsų darbo vietas?' 
            date='2023-01-27' 
            img={bigNews1} 
            href='https://codeacademy.lt/ar-chatgpt-uzims-musu-darbo-vietas/' />

            <BigNewsitem category='naujienos' 
            title='Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?' 
            date='2022-12-12' 
            img={bigNews2} 
            href='https://codeacademy.lt/imoniu-kova-del-it-specialistu-kaip-sekmingai-atrasti-savo-talentus/' />
          </div>
        
          <div className="small-news">
            <SmallNewsItem category='naujienos' 
            title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' 
            date='2022-12-12' 
            img={smallNews}
            href='https://codeacademy.lt/dezinformacija-ir-kibernetinis-pavojus-kaip-apsisaugoti/' />

            <SmallNewsItem category='naujienos' 
            title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' 
            date='2022-12-12' 
            img={smallNews}
            href='https://codeacademy.lt/dezinformacija-ir-kibernetinis-pavojus-kaip-apsisaugoti/' />

            <SmallNewsItem category='naujienos' 
            title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' 
            date='2022-12-12' 
            img={smallNews}
            href='https://codeacademy.lt/dezinformacija-ir-kibernetinis-pavojus-kaip-apsisaugoti/' />

            <SmallNewsItem category='naujienos' 
            title='Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' 
            date='2022-12-12' 
            img={smallNews}
            href='https://codeacademy.lt/dezinformacija-ir-kibernetinis-pavojus-kaip-apsisaugoti/' />
          </div>
      </div>
      <BigButton text='Visos naujienos' href='https://codeacademy.lt/visos-naujienos/' />
    </div> 
    )
}

export default NewsWrapper;
