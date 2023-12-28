import React from 'react'
import styles from './Topbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Topbar = () => {

  return (
    <nav className={styles.topbar}>
      <ul>
        <li><FontAwesomeIcon icon={faPhoneVolume} /> (+91) 8125887920</li>
        <li><FontAwesomeIcon icon={faEnvelope} /> info@ddcloud.in</li>
        <li><FontAwesomeIcon icon={faLocationDot} /> Begumpet, Hyderabad</li>
      </ul>
      <div className={styles.socials}>
        <ul>
          <li><FontAwesomeIcon icon={faFacebook} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagram} /></li>
          <li><FontAwesomeIcon icon={faLinkedin} /></li>
          <li><FontAwesomeIcon icon={faYoutube} /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar