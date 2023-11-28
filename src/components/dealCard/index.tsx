import styles from './dealCard.module.css';
import frameDeal from '../../images/Frame-deal.png';
import check from '../../images/check.png';
import percentage from '../../images/percentage.png';
import button from '../../images/button.png';
import frame from '../../images/frame.png';
import frameto600 from '../../images/frameto600.png';
import { useEffect, useState } from 'react';
import guarantee from '../../images/guarantee.png';

function DealCard() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(width);
    if (width < 360) {
      console.log(width);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <div>
        <h1><span className={styles.blueText}>ONE TIME ONLY</span> Special price For 6 Extra Clarifion For Only <span className={styles.blueText}>$14 Each</span> ($84.00 Total!)</h1>
      </div>
      <div className={styles.divMargin}>
        <img src={frameDeal} alt="deal" />
      </div>
      <div className={styles.divMargin}>
        <div className={styles.divDeal}>
          <img src={check} alt="check" />
          <p>Negative Ion Technology may <strong>help with allergens</strong></p>
        </div>
        <div className={styles.divDeal}>
          <img src={check} alt="check" />
          <p>Designed for <strong>air rejuvenation</strong></p>
        </div>
        <div className={styles.divDeal}>
          <img src={check} alt="check" />
          <p><strong>Perfect for every room</strong> in all types of places.</p>
        </div>
      </div>
      <div className={styles.divSave}>
        <img src={percentage} alt="" />
        <p>Save <span className={styles.blueText}>53%</span> and get <span className={styles.blueText}>6 extra Clarifision</span> for only <span className={styles.blueText}>$14 Each</span>.</p>
      </div>
      <button className={styles.buttonClaim}>
        <img src={button} alt="button to claim" />
      </button>
      <div className={styles.paymentMethod}>
        <img src={width < 600 ? frameto600 : frame} alt="payment methods" />
      </div>
      <div className={styles.noThanksDiv}>
        <a href="" className={styles.noThanks}><h2>NO THANKS, I DON'T WANT THIS.</h2></a>
      </div>
      <div className={styles.divGuarantee}>
        <img src={guarantee} alt="guarantee" />
        <p>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
      </div>
    </div>
  );
}

export default DealCard;