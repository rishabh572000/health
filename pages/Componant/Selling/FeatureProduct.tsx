import SHeader from "./SellingProduct/SHeader";
import styles from '../../../styles/Componant/feaProduct.module.scss';
import One from '../../../public/product8.png';
import Two from '../../../public/product5.png';
import Three from '../../../public/product9.png';
import Four from '../../../public/product7.png';
import Five from '../../../public/product4.png';
import Image from "next/image";
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Button from "../../../Common/Button";
import ButtonIcon from "../../../Common/ButtonIcon";

export default function FeatureProduct() {

    const Card = (props:any) =>{
     return(
        <>
         <div className={styles.CardStart} style={{width:'300px'}}>
          <div className={styles.image}>
            <Image src={props.image} alt='image' />
          </div>
          <div className={styles.content}>
              <h4>{props.title}</h4>
              <div className={styles.start}>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStar /></span>
                <span><BsStar /></span>
              </div>
              <div className={styles.price}>
                  {props.price}
              </div>
          </div>
        </div>
        </>
     )
    }
return (
  <>
    <div className={styles.featureProduct}>
      <SHeader heading='Top Featured Products' special='View all' />
      <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.CardStart}>
          <div className={styles.image}>
            <Image src={One} alt='imge'/>
          </div>
          <div className={styles.content}>
              <h4>Pioneer High Performance Hi-Res Wired</h4>
              <div className={styles.start}>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStarFill /></span>
                <span><BsStar /></span>
                <span><BsStar /></span>
              </div>
              <div className={styles.price}>
                195.00
              </div>
              <div className={styles.description}>
               <p>Designed by Hans J. Wegner in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of...</p>
              </div>
              <div className={styles.buttons}>
                 <Button text='Add to Card' color='#000' back='#fee440'/>
                 <ButtonIcon text={<AiOutlineHeart />} color='#4d4d4d' back='#ebecff' font='1.6rem'/>
              </div>
          </div>
        </div>
        </div>
        <div className={styles.right}>
            <Card image={Four} title='The last of a series' price='245.00' />
            <Card image={Two} title='The last of a series' price='245.00' />
            <Card image={Three} title='The last of a series' price='245.00' />
            <Card image={Five} title='The last of a series' price='245.00' />
        </div>
      </div>
    </div>
  </>
)
}
