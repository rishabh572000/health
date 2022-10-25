import styles from '../../../styles/Componant/ads.module.scss';
import pictur1 from '../../../public/product3.png';
import Image from "next/image";
export default function Ads() {
    const styling = {
        backgroundImage: `url('${pictur1}')`,
        width:"100%",
        height:"100%"
    }
  const Horigontal = () =>{
    return(
      <>
      <div className={styles.horigental} >
          <Image src={pictur1} alt='image' />
        <div className={styles.content}>
          <h3>Sale 30% Off Top Computer Case Gaming</h3>
          <p>Laptop, Computer, Smartphone, Gampad</p>
        </div>
      </div>
      </>
    )
  }
  const Vertical = () =>{
    return(
      <>
        <div className={styles.vertical}>
          <Image src={pictur1} alt='image' />
          <div className={styles.content}>
            <h3>Sale 44% Off Top Computer Case Gaming</h3>
          </div>
        </div>
      </>
    )
  }
return (
  <>
    <div className={styles.ads}>
      <div className={styles.left}>
          <Vertical />
      </div>
      <div className={styles.middel}>
          <Horigontal />
          <Horigontal />
      </div>
      <div className={styles.right}>
          <Vertical />
      </div>
    </div>
  </>
)
}
