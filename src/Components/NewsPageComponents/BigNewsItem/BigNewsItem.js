import './BigNewsItem.css';

function BigNewsitem(props) {
  let { img, category, title, date, href } = props;
  if (!title || !img || !href) {
    return '';
  }
  const categoryElement = category ? <div className="post-card">{category}</div> : '';
  const dateElement = date ? <div className="post-card-info">{date}</div> : '';

    return (
    <a className="news-pic" href={href}>
      <div className="news-item">
         <img src={img} alt='' /> 
         <div className="news-info">
           {categoryElement}
             <h2 className="news-title">{title}</h2>
           {dateElement}
         </div>
      </div>
    </a>
    )
}

export default BigNewsitem;