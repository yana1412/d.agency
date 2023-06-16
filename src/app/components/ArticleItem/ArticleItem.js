
import './style.scss'

export default function ArticleItem({ imgUrl, title, text, link }) {
    return (
        <div className="item">
            <img className="item__img" src={imgUrl} alt="article" />
            <div className="item__content">
                <h3 className="item__title">
                    {title}
                </h3>
                <p className="item__text">{text}</p>
                {link ? <div className="item__link">
                    <img className='item__link--img' src="../images/arrow.svg" alt="arrow" />
                    <a className="item__link--text" href={link}>Show more</a>
                </div> : <></>}
            </div>
        </div>
    )
}