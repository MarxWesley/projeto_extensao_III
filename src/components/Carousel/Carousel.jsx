import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'

const Carousel = ({img1, img2, img3,alt}) => {
  const settings = {
    dots: true,          // Exibe os pontinhos
    infinite: true,      // Carrossel infinito
    speed: 500,          // Velocidade de transição
    slidesToShow: 1,     // Exibe um slide por vez
    slidesToScroll: 1,   // Avança um slide por vez
    autoplay: true,      // Ativa o autoplay
    autoplaySpeed: 3000, // Tempo entre as trocas de slides (em milissegundos)
  };

  return (
    <Slider {...settings}>
      <div className={styles.container}><img className={styles.banner_img} src={img1} alt={alt}/></div>
      <div className={styles.container}><img className={styles.banner_img} src={img2} alt={alt}/></div>
      <div className={styles.container}><img className={styles.banner_img} src={img3} alt={alt}/></div>
    </Slider>
  );
};

export default Carousel