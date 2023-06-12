import Button from '../../Button/Button.js';
import './ProgramsSideMenu.css';

function ProgramsSideMenu({title, button}) {
    return (
        <section className="programs-side-menu">
                    <div className="side-menu-wrapper">
                    <h2 className="side-menu-title">{title}</h2>
                     <div className="menu-element">
                        <label htmlFor="theme">Tema</label>
                        <select nameName="topic" id="theme">
                            <option value="all">VISOS</option>
                            <option value="testing">TESTAVIMAS</option>
                            <option value="programming">PROGRAVIMAS</option>
                            <option value="design">DIZAINAS</option>
                            <option value="data">DUOMENYS</option>
                            <option value="marketing">RINKODARA</option>
                        </select>
                     </div>

                     <div className="menu-element">
                        <label htmlFor="location">Vieta</label>
                        <select name="place" id="location">
                            <option value="all">VISOS</option>
                            <option value="online">ONLINE</option>
                            <option value="city">VILNIUS</option>
                            <option value="city">KAUNAS</option>
                            <option value="city">KLAIPĖDA</option>
                        </select>
                     </div>

                     <div className="menu-element">
                        <label htmlFor="type">Tipas</label>
                        <select name="all-types" id="type">
                            <option value="all">VISI</option>
                            <option value="courses-in-english">COURSES IN ENGLISH</option>
                            <option value="for-beginners">PRADEDANČIŲ KURSAI</option>
                            <option value="for-advanced">PAŽENGUSIŲ STUDIJOS</option>
                            <option value="levels">1 + 2 LYGIS</option>
                            <option value="courses-101">STUDIJOS 101</option>
                            <option value="financing-for-unemployed">FINANSUOJAMA UŽT - NEDIRBANTIEMS</option>
                            <option value="financing-for-workers">FINANSUOJAMA UŽT - DIRBANTIEMS</option>                           
                        </select>
                     </div>

                     <div className="menu-element">
                     <fieldset>
                        <legend>Laikas</legend>
                        <div className="day-time">
                        <input type="checkbox" id="day" />
                        <label htmlFor="day">Dienomis</label>
                       </div>
                       <div className="evenings">
                        <input type="checkbox" id="evening" />
                        <label htmlFor="evening">Vakarais</label>
                       </div>
                    </fieldset>
                     </div>

                     <Button type='reset' text={button} ></Button>

                    </div>
                  </section>
    )
}

export default ProgramsSideMenu;