import ButtonIcon from '../../../Common/ButtonIcon';
import styles from '../../../styles/Componant/footer.module.scss';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Upper() {
return (
  <>
    <div className={styles.upper}>
      <div className={styles.left}>
        <h2>Follow Us</h2>
        <p>We make consolidating, marketing and tracking your social media website easy.</p>
        <div className={styles.socialIcon}>
        <ButtonIcon text={<FiTwitter />} color='#fff' back='#40c1df'/>
        <ButtonIcon text={<FaFacebookF />} color='#fff' back='#3c5b9b'/>
        <ButtonIcon text={<FaInstagram />} color='#fff' back='#c619b8'/>
        <ButtonIcon text={<FaYoutube />} color='#fff' back='#ff0e00'/>
        <ButtonIcon text={<FaLinkedin />} color='#fff' back='#3c5b9b'/>
        </div>
      </div>
      <div className={styles.middle}>
        <h2>Sign Up To Newsletter</h2>
        <p>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>
        <div className={styles.input}>
            <input type='text' placeholder='Your email' />
            <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className={styles.right}>
        <h2>Download App</h2>
        <p>Dukamarket App is now available on App Store & Google Play. Get it now.</p>
      </div>
    </div>
  </>
)
}
