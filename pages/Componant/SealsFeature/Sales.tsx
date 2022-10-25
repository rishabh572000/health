import React from 'react';
import Image from 'next/image';
import buity from '../../../public/bueaty.jpg';
import Specelest from '../../../public/specilist.jpg';
import Presonal from '../../../public/presonal.jpg';
import styles from '../../../styles/Componant/sales.module.scss';

export default function Sales() {

  const ImageSec = (props:any) =>{
    return(
      <>
       <div className={styles.item}>
         <div className={styles.text}>
          <h2>{props.head} </h2>
          <p>{props.para}</p>
         </div>
         <div className={styles.cont}>
          <Image src={props.image} />
         </div>
        </div>
      </>
    )
  }
return (
  <>
    <div className={styles.sales}>
      <div className={styles.container}>

       <ImageSec head='Care your skin with Buity' para='Discount 20% On Products' image={buity} />

       <ImageSec head='Care your skin with Buity' para='Discount 20% On Products' image={Specelest} />

       <ImageSec head='Care your skin with Buity' para='Discount 20% On Products' image={Presonal} />

      

      </div>
    </div>
  </>
)
}
