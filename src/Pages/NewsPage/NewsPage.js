import MainPart from '../../Components/NewsPageComponents/MainPart/MainPart';
import SidePart from '../../Components/NewsPageComponents/SidePart/SidePart';
import './NewsPage.css';

function NewsPage() {
    return (
        <main>
        <div className="whole-part container">    
        <MainPart />
        <SidePart />
          </div>
        </main>
    )
}

export default NewsPage;