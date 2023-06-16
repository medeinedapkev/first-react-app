import { Routes, Route, Link } from 'react-router-dom';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage.js';
import NewsPage from './Pages/NewsPage/NewsPage.js';
import Navigation from './Components/Navigation/Navigation.js';
import Container from './Components/Container/Container.js';
import ProgramsPage from './Pages/ProgramsPage/ProgramsPage.js';
import CounterPage from './Pages/CounterPage/CounterPage.js';
import ShoppingListPage from './Pages/ShoppingListPage/ShoppingListPage.js';
import CitiesPage from './Pages/CitiesPage/CitiesPage.js';
import ToDoPage from './Pages/ToDoPage/ToDoPage.js';
import ChuckNorrisPage from './Pages/ChuckNorrisPage/ChuckNorrisPage.js';
import DogsApiPage from './Pages/DogsApiPage/DogsApiPage.js';
import AIPage from './Pages/AIPage/AIPage.js';
import UniversitiesAPIPage from './Pages/UniversitiesAPIPage/UniversitiesAPIPage.js';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/contact-us' element={<ContactUsPage />} />
        <Route path='/news-page' element={<NewsPage />} />
        <Route path='/programs-page' element={<ProgramsPage />} />
        <Route path='/counter-page' element={<CounterPage />} />
        <Route path='/shopping-list' element={<ShoppingListPage />} />
        <Route path='/cities-page' element={<CitiesPage />} />
        <Route path='/to-do-list' element={<ToDoPage />} />
        <Route path='/api/chuck-norris' element={<ChuckNorrisPage />} />
        <Route path='/api/dogs-page' element={<DogsApiPage />} />
        <Route path='/api/ai-page' element={<AIPage />} />
        <Route path='/api/universities-page' element={<UniversitiesAPIPage />} />
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
