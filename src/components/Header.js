import React from 'react'
import img from '../images/image-jeremy.png'

import '../css/main.css'

const Header = ({setTimeDaily, setTimeMonthly, setTimeWeekly, state}) => {

    const dailyClass = state === 'daily' ? 'active' : null
    const weeklyClass = state === 'weekly' ? 'active' : null
    const monthlyClass = state === 'monthly' ? 'active' : null

    return (
        <header className='header'>
            <div className='header__profile'>
                <img src={img} alt='Jeremy Robson' className='header__image' />
                <h1 className='header__title'>Report for <span className='header__span'>Jeremy Robson</span></h1>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav__ul'>
                    <li className={dailyClass} onClick={setTimeDaily}>Daily</li>
                    <li className={weeklyClass} onClick={setTimeWeekly}>Weekly</li>
                    <li className={monthlyClass} onClick={setTimeMonthly}>Monthly</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

