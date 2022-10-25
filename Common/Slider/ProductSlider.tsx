import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Common/Productslider.module.scss'
import { type } from 'os';

type props={
  id:number;
  name:string;
  price:number;
  sold:string;
  avla:string;
  image:string
}
export default function ProductSlider(props:props){
return (
  <>
    <div className={styles.productSlider}>
      <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.image}>
            <Image src={props.image} alt="Picture of the author" width={500} height={500} />
            </div>
            <div className={styles.content}>
              <div className={styles.name}>
              {props.name}
              </div>
              <div className={styles.price}>
                  {props.price}
              </div>
              <div className={styles.bar}> r</div>
              <div className={styles.soldAvl}>
                  <div className={styles.sold}>
                    {props.sold}
                  </div>
                  <div className={styles.avl}>
                   {props.avla}
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </>
)
}
