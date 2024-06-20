import React from 'react'
import logoimg from './images/download (1).png'
import accountimg from './images/download.png'

function Header() {
  return (
    <section>
        <div className='header'>
            <div className='logo-section'>
                <img src={logoimg} alt='' height={50} width={50}/>
                <h3>ET Money</h3>
            </div>
            <div className='header-list'><ul>
                <li>Mutual Funds </li>
                <li>Genius </li>
                <li>NPS</li>
                <li>More </li>
                            </ul></div>
        <div className='account-sec'>
            <img src={accountimg} height={50} width={50} alt=''/>
            <p>My Account</p>
        </div>
        </div>
    </section>
  )
}

export default Header