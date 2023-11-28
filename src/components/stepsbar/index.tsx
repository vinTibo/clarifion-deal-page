import styles from './stepsbar.module.css';
import pass from '../../images/pass.png';
import currentStep from '../../images/current-step.png';
import step from '../../images/step.png';

function Stepsbar() {
  return (
    <div className={styles.divSteps}>
      <div className={styles.divStep}>
        <img src={pass} alt="checkedstep" />
        <p>Step 1 : Cart Review</p>
      </div>
      <div className={styles.divStep}>
        <img src={pass} alt="checkedstep" />
        <p>Step 2 : Checkout</p>
      </div>
      <div className={styles.divStep}>
        <img src={currentStep} alt="current step" />
        <p>Step 3 : Special Offer</p>
      </div>
      <div className={styles.divStep}>
        <img src={step} alt="step" />
        <p>Step 4 : Cofirmation</p>
      </div>
    </div>
  )
}

export default Stepsbar;