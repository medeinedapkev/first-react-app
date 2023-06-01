import './BigNewsItem.css';

function BigNewsitem(props) {
  let { img, category, title, date } = props;
    return (
    <a className="news-pic" href="https://codeacademy.lt/ar-chatgpt-uzims-musu-darbo-vietas/">
      <div className="news-item">
         <img src={img} alt='' /> 
         <div className="news-info">
           <div className="post-card">{category}</div>
             <h2 className="news-title">{title}</h2>
           <div className="post-card-info">{date}</div>
         </div>
      </div>
    </a>
    )
}

export default BigNewsitem;