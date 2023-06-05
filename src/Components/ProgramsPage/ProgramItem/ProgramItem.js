

function ProgramItem({data, id}) {
    let { href, programImg, mainTitle, description, cardLabel, features1, features2 } = data;

    if (!href || !mainTitle) {
        return '';
    }
    const descriptionElement = description ? <p className="program-description">{description}</p> : '';
    const features2Element = features2 && <div className="program-card-features">
                                              <img className={features2.className} alt='' src={features2.img} />
                                              <span className="icon-title">{features2.title}</span>
                                          </div>;
    
    const ProgramCardElement = features1 && <div className="program-card">
                                                <div className="program-card-features">
                                                    <img className={features1.className} alt='' src={features1.img} />
                                                    <span className="icon-title">{features1.title}</span>
                                                </div>
                                                {features2Element}
                                            </div>;

    return (
            <a className="programs-item" href={href} key={id}>
                <div className="program-content">
                 <img className="program-img" alt='' src={programImg} />
                 <h2 className="program-title">{mainTitle}</h2>
                  {descriptionElement}
                </div>
                {ProgramCardElement}
            <span className="extra-card-label">{cardLabel}</span>
          </a>
    )
}

export default ProgramItem;