import day from '../../../assets/ProgramsPageAssets/day.png';
import moon from '../../../assets/ProgramsPageAssets/moon.png';
import study from '../../../assets/ProgramsPageAssets/study.png';
import './ProgramsWrapper.css';

function ProgramsWrapper() {
    return (
        <div className="programs-wrapper">
                    <div className="programs-list">
                        <a className="programs-item" href="/#">
                            <div className="program-content">
                             <img className="program-img" alt='' src="https://codeacademy.lt/wp-content/uploads/2022/08/Black-18.svg" />
                             <h2 className="program-title">"Salesforce" CRM - pradedančių</h2>
                              <p className="program-description">„Salesforce“ –  įmonės operacinė sistema leidžia skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
                            </div>
                        <div className="program-card">
                            <div className="program-card-features">
                                <img className="icon-cap" alt='' src={study} />
                                <span className="icon-title">1 lygis</span>
                            </div>
                            <div className="program-card-features">
                                <img className="icon-moon" alt='' src={moon} />
                                <span className="icon-title">vakarais</span>
                            </div>
                        </div>
                        <span className="extra-card-label">naujas</span>
                      </a>

                      <a className="programs-item" href="/#">
                        <div className="program-content">
                           <img className="program-img" alt='' src="https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg" />
                           <h2 className="program-title">Python – pradedantiesiems užimtiems asmenims (223002626)</h2>
                           <p className="program-description">Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu. </p>
                        </div>
                        <div className="program-card">
                            <div className="program-card-features">
                                <img className="icon-cap" alt='' src={study} />
                                <span className="icon-title">finasuojama užt -dirbantiems</span>
                            </div>
                            <div className="program-card-features">
                                <img className="icon-moon" alt='' src={moon} />
                                <span className="icon-title">vakarais</span>
                            </div>
                        </div>
                        <span className="extra-card-label">finansuojama užt</span>
                      </a>

                      <a className="programs-item" href="/#">
                        <div className="program-content">
                        <img className="program-img" alt='' src="https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg" />
                        <h2 className="program-title">Frontend Serverless (223002583)</h2>
                        <p className="program-description">Frontend programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.</p>
                        </div>
                        <div className="program-card">
                            <div className="program-card-features">
                                <img className="icon-cap" alt='' src={day} />
                                <span className="icon-title">Dienomis</span>
                            </div>
                        </div>
                        <span className="extra-card-label">finansuojama užt</span>
                      </a>

                      <a className="programs-item" href="/#">
                        <div className="program-content">
                        <img className="program-img" alt='' src="https://codeacademy.lt/wp-content/uploads//2021/03/Fron-End_dark-1.svg" />
                        <h2 className="program-title">Frontend pradedantiesiems užimtiems asmenims (223002622)</h2>
                        <p className="program-description">Frontend programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio ir, suprantama, pakankamai glaudžiai susijęs su web dizainu.</p>
                        </div>
                     <div className="program-card">
                         <div className="program-card-features">
                             <img className="icon-cap" alt='' src={study} />
                             <span className="icon-title">finasuojama užt -dirbantiems</span>
                         </div>
                         <div className="program-card-features">
                             <img className="icon-moon" alt='' src={moon} />
                             <span className="icon-title">vakarais</span>
                         </div>
                     </div>
                     <span className="extra-card-label">finansuojama užt</span>
                   </a>

                   <a className="programs-item" href="/#">
                    <div className="program-content">
                    <img className="program-img" alt='' src="https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg" />
                    <h2 className="program-title">Web dizainas UX/UI (223002606)</h2>
                    <p className="program-description">Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.</p>
                    </div>
                    <div className="program-card">
                        <div className="program-card-features">
                            <img className="icon-cap" alt='' src={day} />
                            <span className="icon-title">Dienomis</span>
                        </div>
                    </div>
                    <span className="extra-card-label">finansuojama užt</span>
                  </a>

                  <a className="programs-item" href="/#">
                    <div className="program-content">
                    <img className="program-img" alt='' src="https://codeacademy.lt/wp-content/uploads//2021/04/TS_w.svg" />
                    <h2 className="program-title">TypeScript programa (223002404)</h2>
                    <p className="program-description">Frontend programuotojas - tikra būtinybė moderniam verslui, todėl ši sritis yra paklausiausia darbo rinkoje.</p>
                    </div>
                    <div className="program-card">
                        <div className="program-card-features">
                            <img className="icon-cap" alt='' src={day} />
                            <span className="icon-title">Dienomis</span>
                        </div>
                    </div>
                    <span className="extra-card-label">finansuojama užt</span>
                  </a>
                  </div>
              </div>
    )
}

export default ProgramsWrapper;