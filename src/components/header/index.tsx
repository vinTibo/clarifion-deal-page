import trunk from '../../images/trunk.png';
import checkmark from '../../images/checkmark.png';
import heart from '../../images/heart.png';
import arrowCheckmark from '../../images/arrow-sync-checkmark.png';
import styles from './header.module.css';
import clarifionLogo from '../../images/clarifion-logo.png';
import secureLogos from '../../images/secure-logos.png';

function Header() {
  return (
    <header>
      <div className={styles.headerStyle}>
        <div className={styles.divHeader}>
          <img src={checkmark} alt="checkmark image" />
          <p>30 DAY SATISFACTION GUARANTEE</p>
        </div>
        <div className={styles.divHeader}>
          <img src={trunk} alt="trunk image" />
          <p>FREE DELIVERY ON ORDERS OVER $40.00</p>
        </div>
        <div className={styles.divHeader}>
          <img src={heart} alt="heart image" />
          <p>50.000+ HAPPY CUSTOMERS</p>
        </div>
        <div className={styles.divHeader}>
          <img src={arrowCheckmark} alt="arrowCheckmark image" />
          <p>100% MONEY BACK GUARANTEE</p>
        </div>
      </div>
      <div className={styles.divSecure}>
        <img src={clarifionLogo} alt="clarifion logo" />
        <img src={secureLogos} alt="secure logos" />
      </div>
      <div className={styles.divTitle}>
        <h1>Wait ! Your Order In Progress.</h1>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</p>
      </div>
    </header>
  );
}

export default Header;