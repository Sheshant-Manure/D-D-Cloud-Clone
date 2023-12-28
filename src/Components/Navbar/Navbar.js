import React from 'react'
import styles from './Navbar.module.css'
import logoURL from '../../Assets/Logo/Logo'
import GlobalButton from '../Styled Components/Global Styled Button/GlobalButton'

const Navbar = () => {
  return (<nav className={styles.navbar}>
    <div className={styles.logo}>
        <img src={logoURL} alt='logo' />
    </div>
    <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/it-staffing-and-recruitment">IT Staffing & Recruitment</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
    <GlobalButton className={styles.getquote}>Get A Quote</GlobalButton>
  </nav>)
}

export default Navbar