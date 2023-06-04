import './PodcastWrapper.css';
import PodcastItem from '../PodcastItem/PodcastItem.js';
import podcastPhoto from '../../../assets/NewsPageAssets/podcast.png';
import buttonPlay from '../../../assets/NewsPageAssets/button-play.svg';

const podcastsData = [
    {
        time: 'Trukmė: 7:55',
        title:'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date: '2022-12-12',
        podcastPic: podcastPhoto,
        buttonPlay: buttonPlay,
        href: '/#',
    },
    {
        time: 'Trukmė: 7:55',
        title:'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date: '2022-12-12',
        podcastPic: podcastPhoto,
        buttonPlay: buttonPlay,
        href: '/#',
    },
    {
        time: 'Trukmė: 7:55',
        title:'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date: '2022-12-12',
        podcastPic: podcastPhoto,
        buttonPlay: buttonPlay,
        href: '/#',
    },
    {
        time: 'Trukmė: 7:55',
        title:'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas',
        date: '2022-12-12',
        podcastPic: podcastPhoto,
        buttonPlay: buttonPlay,
        href: '/#',
    },
]

function PodcastWrapper(props) {
    let { title } = props;

    if (!title) {
        return '';
    }

    return (
        <div className="podcast-wrapper">
           <h2 className="title">{title}</h2>
           { podcastsData.map((podcast, index) => {
            let { time, title, date, podcastPic, buttonPlay, href } = podcast;

            return (
                <PodcastItem time={time} 
                   title={title} 
                   date={date} 
                   podcastPic={podcastPic} 
                   buttonPlay={buttonPlay} 
                   href={href}
                   key={index} />
            )
           })
           }
        </div>
    )
}

export default PodcastWrapper;