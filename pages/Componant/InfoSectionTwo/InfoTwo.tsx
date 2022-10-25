import styles from '../../../styles/Componant/Info.module.scss';
import Image from 'next/image'
import product1 from '../../../public/product8.png'
import product2 from '../../../public/product9.png'
export default function InfoTwo() {
return (
  <>
    <div className={styles.infotwo}>
      <div className={styles.Tleft}>
        <div className={styles.image}>
            <Image src={product1} />
        </div>
        <div className={styles.content}>
            <p>Bestseller Products</p>
            <h3>PC & Docking Station</h3>
            <span></span>
            <h4>Discount 20% Off, Top Quality Products</h4>
        </div>
      </div>
      <div className={styles.Tleft}>
        <div className={styles.image}>
            <Image src={product2} />
        </div>
        <div className={styles.content}>
            <p>Bestseller Products</p>
            <h3>PC & Docking Station</h3>
            <span></span>
            <h4>Discount 20% Off, Top Quality Products</h4>
        </div>
      </div>
    </div>
  </>
)
}
