import productImage from '../../images/product-image.png';
import frameComment from '../../images/frame-comment.png';
import styles from './home.module.css';
import DealCard from '../dealCard';

function Home() {
  return (
    <div className={styles.divHome}>
      <div className={styles.divComment}>
        <img src={productImage} alt="clarifition" className={styles.imgClarifion} />
        <img src={frameComment} alt="" />
      </div>
      <div className={styles.divDeal}>
        <DealCard />
      </div>
    </div>
  );
}

export default Home;