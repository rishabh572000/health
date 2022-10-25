import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import ProductSlider from '../../../../Common/Slider/ProductSlider';
import porduct4 from '../../../../public/product4.png';
import porduct3 from '../../../../public/product3.png';
import porduct5 from '../../../../public/product5.png';
import porduct6 from '../../../../public/product6.png';
import styles from '../../../../styles/Componant/feature.module.scss';
import { useState } from 'react';

export default function SHeader(props:any) {
  
  const {heading, time, data} = props?.heading

  const mainData=[
    {
      id:1,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct4
    },
    {
      id:2,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct3
    },
    {
      id:8,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct6
    },
    {
      id:9,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct5
    },
  ]
  const productData=[
    {
      id:1,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct4
    },
    {
      id:2,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct3
    },
    {
      id:3,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct6
    },
    {
      id:4,
      name:'Johnson baby powder',
      price:235.00,
      sold:'Sold: 85',
      aval:'Available: 15',
      image:porduct5
    },
  ]
  const Tabs = () =>{
    return(
      <>
      {/* className={styles.active} */}
        <div className={styles.tabs}>
          {!props.special?data.map((val:any, ind:number)=>{
            return <p key={ind} >{val.name}</p>
          }): <p>{props?.special}</p>}
        </div>
      </>
    )
  }

  const nextButton = () =>{
    productData.pull
  }

  const Timeing= () =>{
    const [count, setCount] = useState({})


    // unting down to
var countDownDate = new Date("March 5, 2023 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
const countDown = {
  days:days,
  hours:hours,
  minutes:minutes,
  seconds:seconds
}
setCount(countDown)

}, 1000)

    return(
      <>
      {count.days} <span> &nbsp; DAYS &nbsp;</span> {count.hours} <span> &nbsp; HRS &nbsp;</span> {count.minutes} <span> &nbsp; MINS &nbsp;</span> {count.seconds} <span> &nbsp; SEC &nbsp; </span>
      </>
    )
  }

return (
  <>
    <div className={styles.sheader}>
      <div className={styles.left}>
        <h3>{props?.heading.heading? props?.heading.heading:props.heading}</h3>
      </div>
      <div className={styles.rightTime}>
        <div className={styles.content}>
          {time ? <> 
          <h3>Hurry Up! Offer ends in:</h3>
          <div className={styles.time}>
           <Timeing />
           </div></> :<Tabs />}
       
        </div>
      </div>
    </div>
    {props.slider?<div className={styles.containerSlider}>
      <div className={styles.leftButton}>
        <BiLeftArrow />
      </div>
      <div className={styles.slider}>
        {productData.map((val, ind)=><ProductSlider name={val.name} price={val.price} sold={val.sold} avla={val.aval} image={val.image}/>)}
      </div>
      <div className={styles.rightButton} onClick={nextButton}>
        <BiRightArrow/>
      </div>
    </div>:null}
    
  </>
)
}
