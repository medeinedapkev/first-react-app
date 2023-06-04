import Container from '../../Components/Container/Container';
import MainPart from '../../Components/NewsPageComponents/MainPart/MainPart';
import SidePart from '../../Components/NewsPageComponents/SidePart/SidePart';
import './NewsPage.css';

function NewsPage() {
    return (
        <main>
          <Container classes='whole-part'>
            <MainPart />
            <SidePart />
          </Container> 
        </main>
    )
}

export default NewsPage;
