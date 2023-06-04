import { Routes, Route, Link } from 'react-router-dom';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage.js';
import NewsPage from './Pages/NewsPage/NewsPage.js';
import Navigation from './Components/Navigation/Navigation.js';
import Container from './Components/Container/Container.js';
import ProgramsPage from './Pages/ProgramsPage/ProgramsPage.js';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/news-page' element={<NewsPage />} />
        <Route path='/programs-page' element={<ProgramsPage />} />
        <Route path='/' element={
          <Container>
        <h1>Home page</h1>
        </Container>} />
        <Route path='*' element={
        <Container>
          <h1>404 ERROR. Page not found</h1>
          <Link to='/'>Come back to home page...</Link>
          </Container>} />
      </Routes>
    </div>
  );
}

export default App;
