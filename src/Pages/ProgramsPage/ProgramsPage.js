import Container from '../../Components/Container/Container';
import GirlButton from '../../Components/ProgramsPage/GirlButton/GirlButton';
import ProgramsSideMenu from '../../Components/ProgramsPage/ProgramsSideMenu/ProgramsSideMenu';
import ProgramsWrapper from '../../Components/ProgramsPage/ProgramsWrapper/ProgramsWrapper';
import './ProgramsPage.css';

function ProgramsPage() {
    return (
        <main className="main">
            <Container>
            <h1 className="title">Programos</h1>
            <GirlButton href='/#' text1='Nežinai ką pasirinkti?' text2=' Spręsk IT testą' />

            <div className="small-landscape">
            <button className="button blue">Išvalyti</button>
            </div>
            
            <div className="content">
                <ProgramsSideMenu />
              <section className="programs">    
                <ProgramsWrapper />
              </section>
            </div>

         </Container>
    </main>
    )
}

export default ProgramsPage;