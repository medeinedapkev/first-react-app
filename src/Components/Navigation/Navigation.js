import './Navigation.css';
import CodeAcademyLogo from '../../assets/CodeAcademy-visi_Logotipas-juodas.png';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

function Navigation() {
    return (
        <header className="main-header">
        <Container>
          <div className="main-header-wrapper">
  
            <div className="logo-wrapper">
                <Link to='/'>
                  <img
                    src={CodeAcademyLogo}
                    width="115"
                    alt="CodeAcademy"
                  />
                </Link>
            </div>
  
            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu">
            <span className="hamb-line"></span>
            </label>

            <nav className="main-navigation">
              <ul className="main-menu">
                <li className="menu-item">
                  <Link to='/'>Apie mus</Link>
                </li>
                <li className="menu-item">
                  <Link to="/programs-page">Programos</Link>
                </li>
                <li className="menu-item">
                  <Link to="/news-page">Naujienos</Link>
                </li>
                <li className="menu-item">
                  <Link to='/contact-us'>Kontaktai</Link>
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