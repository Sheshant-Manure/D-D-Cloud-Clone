import React from 'react'
import styles from './Services.module.css'
import GlobalButton from '../Styled Components/Global Styled Button/GlobalButton'

const Services = () => {
  return (
    <div className={styles.services}>
        <span>Our Services</span>
        <h2>"Elevate Your Business <br /> With Our IT Services"</h2>
        <div className={styles.cardcontainer}>
            <div className={styles.card}>
                <img src='https://modinatheme.com/quantech/wp-content/uploads/2023/03/coding.svg' alt='webapp-designing' />
                <GlobalButton className={styles.servicesBtn}>Web App &<br /> Designing</GlobalButton>
                <h4>Develop amazing web and app experiences.</h4>
                <h4><a href='/webapp'>Read More</a></h4>
            </div>
            <div className={styles.card}>
                <img src='https://modinatheme.com/quantech/wp-content/uploads/2023/03/ux-design.svg' alt='mobileapp-development' />
                <GlobalButton  className={styles.servicesBtn}>Mobile App &<br /> Development</GlobalButton>
                <h4>Looking for mobile app design services? Browse.</h4>
                <h4><a href='/webapp'>Read More</a></h4>
            </div>
            <div className={styles.card}>
                <img src='https://modinatheme.com/quantech/wp-content/uploads/2023/03/solution-1.svg' alt='digital-marketing' />
                <GlobalButton  className={styles.servicesBtn}>Digital<br /> Marketing</GlobalButton>
                <h4>Digital Marketing Mastery: Fueling Your Online Success</h4>
                <h4><a href='/webapp'>Read More</a></h4>
            </div>
            <div className={styles.card}>
                <img src='https://ddcloud.in/wp-content/uploads/2023/03/award.png' alt='IT-Staffing-Recruitment' />
                <GlobalButton  className={styles.servicesBtn}>IT Staffing &<br /> Recruitment</GlobalButton>
                <h4>Bridging Talent and Business Needs</h4>
                <h4><a href='/webapp'>Read More</a></h4>
            </div>
        </div>
    </div>
  )
}

export default Services