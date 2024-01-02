import React from 'react'
import styles from './Carousel.module.css'
import images from './SlideImages'

const Carousel = () => {
  return (
    <div className={styles.carousel}>
        {images.map((img, i)=> {
            return(<>
            <div className={styles.slide}>
                <img src={img[i].url} alt={img[i].url} />
                <div className={styles.overlay}>
                    <p>{img[i].comment}</p>
                    <h1>{img[i].title}</h1>
                    <h2>{img[i].subtitle}</h2>
                </div>
            </div>
            </>)
        })}
    </div>
  )
}

export default Carousel