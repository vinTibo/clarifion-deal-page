import lock from '../../images/lock.png'
import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.footerStyle}>
        <p>Copyright | clarifionsupport@clarifion</p>
        <div className={styles.divFooter}>
          <img src={lock} alt="lock image" />
          <p>Secure 256-Bit SSL Encryption.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;