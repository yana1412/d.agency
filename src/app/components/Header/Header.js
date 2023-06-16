'use client'

import { useState } from 'react'

import './style.scss'

export default function Header() {
    const [nav, setNav] = useState(false)
    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a className="logo" href="#">
                        <img className="logo__img" src="../images/logo.svg" alt="logo" />
                    </a>
                    <nav className='menu'>
                        <ul className={`menu__list ${nav ? 'active' : ''}`}>
                            <li className="menu__list--item">
                                <a className="menu__list--link" href='#'>What we do</a>
                            </li>
                            <li className="menu__list--item">
                                <a className="menu__list--link" href='#'>Our work</a>
                            </li>
                            <li className="menu__list--item">
                                <a className="menu__list--link" href='#'>seo insights </a>
                            </li>
                            <li className="menu__list--item">
                                <a className="menu__list--link" href='#'>  About us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <img className='menu__burger' src="../images/menu.svg" alt="menu" onClick={() => setNav(!nav)} />
            </div>
        </div>
    )
}