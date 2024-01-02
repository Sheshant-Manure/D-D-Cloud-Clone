import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import logoURL from '../../Assets/Logo/Logo'
import GlobalButton from '../Styled Components/Global Styled Button/GlobalButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  
  const [scrnWidth, setScrnWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', ()=>setScrnWidth(window.innerWidth))
    setScrnWidth(window.innerWidth);
  }, [scrnWidth])

  const DesktopItems = () => {
    return (<>
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/it-staffing-and-recruitment">IT Staffing & Recruitment</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
    <GlobalButton className={styles.getquote}>Get A Quote</GlobalButton>
    </>)
  }

  const MobileView = () => {
    return (<>
    <ul className={styles.mobileview}>
      <li><FontAwesomeIcon icon={faBars} /> Menu</li>
    </ul>
    </>)
  }

  return (<nav className={styles.navbar}>
    <div className={styles.logo}>
        <img src={logoURL} alt='logo' />
    </div>
    { scrnWidth >= 980 ? <DesktopItems /> : <MobileView /> }
  </nav>)
}

export default Navbar