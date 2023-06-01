import './SmallNewsItem.css';

function SmallNewsItem(props) {
    let { img, category, title, date, href } = props;
    if (!title || !img || !href) {
        return '';
    }
    const categoryElement = category ? <div className="post-card small">{category}</div> : '';
    const dateElement = date ? <div className="post-card-info">{date}</div> : '';

    return (
        <a className="news-pic small" href={href}>
        <div className="news-item small">
         <img src={img} alt='' />
          <div className="news-info small">
           {categoryElement}
            <h3 className="news-title small">{title}</h3>
           {dateElement}
        </div>
     </div>
    </a>
    )
}

export default SmallNewsItem;