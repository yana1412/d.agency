import './style.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className='footer__wrapper'>
                    <p className='footer__data'> Ukraine 2000-2015</p>
                    <div className='footer__social'>
                        <a className='footer__link' href="#">
                            <img className='footer__link--img' src="../images/social/fb.svg" alt="facebook" />
                        </a>
                        <a className='footer__link' href="#">
                            <img className='footer__link--img' src="../images/social/tw.svg" alt="twiter" />
                        </a>
                        <a className='footer__link' href="#">
                            <img className='footer__link--img' src="../images/social/ln.svg" alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}