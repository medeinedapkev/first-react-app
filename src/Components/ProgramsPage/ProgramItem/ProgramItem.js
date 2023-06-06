

function ProgramItem({data, id}) {
    let { href, programImg, mainTitle, description, cardLabel, features } = data;

    if (!href || !mainTitle) {
        return '';
    }

    let featuresElement;

    if (features && features.length > 0) {
        data.features.map((feature) => {
        console.log(feature)
        
        featuresElement =  (
        <div className="program-card-features">
          <img className={feature.className} alt='' src={feature.img} />
          <span className="icon-title">{feature.title}</span>
        </div>)

        return featuresElement;
      })
    }

    const descriptionElement = description ? <p className="program-description">{description}</p> : '';
    const imgElement = programImg ? <img className="program-img" alt='' src={programImg} /> : '';
    const extraCardElement = cardLabel && <span className="extra-card-label">{cardLabel}</span>;

    return (
            <a className="programs-item" href={href} key={id}>
                <div className="program-content">
                 {imgElement}
                 <h2 className="program-title">{mainTitle}</h2>
                  {descriptionElement}
                </div>
                <div className="program-card">
                    {featuresElement}
                    
                </div>
            {extraCardElement}
          </a>
    )
}

export default ProgramItem;