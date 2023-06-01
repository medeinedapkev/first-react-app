import './SmallNewsItem.css';

function SmallNewsItem(props) {
    let { img, category, title, date } = props;
    return (
        <a className="news-pic small" href="https://codeacademy.lt/dezinformacija-ir-kibernetinis-pavojus-kaip-apsisaugoti/">
        <div className="news-item small">
         <img src={img} alt='' />
          <div className="news-info small">
           <div className="post-card small">{category}</div>
            <h3 className="news-title small">{title}</h3>
           <div className="post-card-info">{date}</div>
        </div>
     </div>
    </a>
    )
}

export default SmallNewsItem;