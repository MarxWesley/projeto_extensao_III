import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselBs.module.css'

function CarouselBs({img1, img2}) {
  return (
    <Carousel data-bs-theme="dark" fade interval={2000} className={styles['container']}>
      <Carousel.Item className={styles['container_img']}>
        <img
          className={`d-block w-100 ${styles['carousel_img']}`}
          src={img1}
          alt="Primeiro Slide do Carousel"
        />
      </Carousel.Item>
      <Carousel.Item className={styles['container_img']}>
        <img
          className={`d-block w-100 ${styles['carousel_img']}`}
          src={img2}
          alt="Primeiro Slide do Carousel"
        />
        <Carousel.Caption className={styles['custom-caption']}>
          <h5>{}</h5>
          <p>{}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBs;