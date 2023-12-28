import React from 'react'
import styles from './Topbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {

  return (
    <nav className={styles.topbar}>
      <ul>
        <li><FontAwesomeIcon icon={faPhoneVolume} /> (+91) 8125887920</li>
        <li><FontAwesomeIcon icon={faEnvelope} /> info@ddcloud.in</li>
        <li><FontAwesomeIcon icon={faLocationDot} /> Begumpet, Hyderabad</li>
      </ul>
    </nav>
  )
}

export default Topbar