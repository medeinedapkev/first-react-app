import './BigButton.css';

function BigButton(props) {
    let { text, href } = props;
    if (!href || !text) {
        return '';
    }
    return (
        <a className="button-big" href={href}>
        <span>{text}</span>
        <svg className="arrow-blue" xmlns="http://www.w3.org/2000/svg" width="20" height="33"><path fill="#1200FF" d="M3.264 32.528L.76 30.026l13.761-13.761L.762 2.504 3.263 0l16.263 16.264z" fillRule="evenodd"/></svg>
        </a>
    )
}

export default BigButton;