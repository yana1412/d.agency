import './style.scss'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='container'>
                <div className="hero__wrapper">
                    <div className="hero__top-left"></div>
                    <div className="hero__top-right"></div>
                    <div className="hero__bottom-left"></div>
                    <div className="hero__bottom-right"></div>
                    <p className='hero__text'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </p>
                    <h1 className='hero__title'>Workforce Survey</h1>
                    <button className='hero__btn' type='button'>Start Now</button>
                </div>
            </div>
        </div>
    )
}

