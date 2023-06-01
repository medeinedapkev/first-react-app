import PodcastItem from '../PodcastItem/PodcastItem';
import podcastPhoto from '../../../assets/NewsPageAssets/podcast.png';
import buttonPlay from '../../../assets/NewsPageAssets/button-play.svg';
import './PodcastWrapper.css';

function PodcastWrapper(props) {
    let { title } = props;
    if (!title) {
        return '';
    }

    return (
        <div className="podcast-wrapper">
           <h2 className="title">{title}</h2>
           <PodcastItem time='Trukmė: 7:55' 
           title='Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas' 
           date='2022-12-12' 
           podcastPic={podcastPhoto} 
           buttonPlay={buttonPlay} 
           href='/#' />

           <PodcastItem time='Trukmė: 7:55' 
           title='Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas' 
           date='2022-12-12' 
           podcastPic={podcastPhoto} 
           buttonPlay={buttonPlay}
           href='/#' />

           <PodcastItem time='Trukmė: 7:55' 
           title='Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas' 
           date='2022-12-12' 
           podcastPic={podcastPhoto} 
           buttonPlay={buttonPlay}
           href='/#' />

           <PodcastItem time='Trukmė: 7:55' 
           title='Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas' 
           date='2022-12-12' 
           podcastPic={podcastPhoto} 
           buttonPlay={buttonPlay}
           href='/#' />
        </div>
    )
}

export default PodcastWrapper;