import './Navigation.css';
import CodeAcademyLogo from '../../assets/CodeAcademy-visi_Logotipas-juodas.png';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';

function Navigation() {
    return (
        <header className="main-header">
        <Container>
          <div className="main-header-wrapper">
  
            <div className="logo-wrapper">
                <NavLink to='/'>
                  <img
                    src={CodeAcademyLogo}
                    width="115"
                    alt="CodeAcademy"
                  />
                </NavLink>
            </div>
  
            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu">
            <span className="hamb-line"></span>
            </label>

            <nav className="main-navigation">
              <ul className="main-menu">
                <li className="menu-item">
                  <NavLink to='/'>Apie mus</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/programs-page">Programos</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/news-page">Naujienos</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='/contact-us'>Kontaktai</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='/counter-page'>Counter</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='/shopping-list'>Shopping list</NavLink>
                </li>
                <li className="menu-item"><a href="/#">EN</a></li>
              </ul>
              <a className="nav-button" href="tel:+370 663 66 555">Skambinti</a>
            </nav>
          </div>
          </Container>
      </header>
    )
}

export default Navigation;