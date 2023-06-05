import day from '../../../assets/ProgramsPageAssets/day.png';
import moon from '../../../assets/ProgramsPageAssets/moon.png';
import study from '../../../assets/ProgramsPageAssets/study.png';
import ProgramItem from '../ProgramItem/ProgramItem';
import './ProgramsWrapper.css';

const programData = [
    {
        href: '/#',
        programImg: 'https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg',
        mainTitle: '"Salesforce" CRM - pradedančių',
        description: '„Salesforce“ –  įmonės operacinė sistema leidžia skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.',
        features1: {className: 'icon-cap', img: study, title: '1 lygis'},
        features2: {className: 'icon-moon', img: moon, title: 'vakarais'},
        cardLabel: 'naujas',
    },
    {
        href: '/#',
        programImg: 'https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg',
        mainTitle: 'Python – pradedantiesiems užimtiems asmenims (223002626)',
        description: 'Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.',
        features1: {className: 'icon-cap', img: study, title: 'finasuojama užt -dirbantiems'},
        features2: {className: 'icon-moon', img: moon, title: 'vakarais'},
        cardLabel: 'finansuojama užt',
    },
    {
        href: '/#',
        programImg: 'https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg',
        mainTitle: 'Frontend Serverless (223002583)',
        description: 'Frontend programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.',
        features1: {className: 'icon-cap', img: day, title: 'dienomis'},
        cardLabel: 'finansuojama užt',
    },
    {
        href: '/#',
        programImg: 'https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg',
        mainTitle: 'Frontend pradedantiesiems užimtiems asmenims (223002622)',
        description: 'Frontend programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio ir, suprantama, pakankamai glaudžiai susijęs su web dizainu.',
        features1: {className: 'icon-cap', img: study, title: 'finasuojama užt -dirbantiems'},
        features2: {className: 'icon-moon', img: moon, title: 'vakarais'},
        cardLabel: 'finansuojama užt',
    },
    {
        href: '/#',
        programImg: 'https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg',
        mainTitle: 'Web dizainas UX/UI (223002606)',
        description: 'Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.',
        features1: {className: 'icon-cap', img: day, title: 'dienomis'},
        cardLabel: 'finansuojama užt',
    },
    {
        href: '/#',
        programImg: 'https://codeacademy.lt/wp-content/uploads//2021/04/TS_w.svg',
        mainTitle: 'TypeScript programa (223002404)',
        description: 'Frontend programuotojas - tikra būtinybė moderniam verslui, todėl ši sritis yra paklausiausia darbo rinkoje.',
        features1: {className: 'icon-cap', img: day, title: 'dienomis'},
        cardLabel: 'finansuojama užt',
    },
]

function ProgramsWrapper() {
    return (
        <div className="programs-wrapper">
            <div className="programs-list">
                {programData.map((item, index) => {
                    return (
                        <ProgramItem data={item} id={index} />
                    )
                 })
                }
            </div>
        </div>
    )
}

export default ProgramsWrapper;
