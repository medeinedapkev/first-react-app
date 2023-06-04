import './Container.css';

function Container({children, classes}) {
    console.log(children)
    return (
        <div className={`container ${classes ? classes : ''}`}>
            {children}
        </div>
    )
}

export default Container;