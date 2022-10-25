import style from '../styles/Common/Slider.module.scss';
import shose from '../public/mask.png';
import sliderData from './SliderData';
import {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import Button from './Button';


export default function Slider() {
    const [data, setData]=useState(sliderData[0]);
    const [stage, setStage]=useState(1);

const myfunction = () =>{
  const length:number=sliderData.length;
  
  stage<length-1?setStage(stage+1):setStage(0)
  console.log(data)
  
  setData(sliderData[stage])
}
useEffect(()=>{
 let myslider = setInterval(myfunction, 5000);
 return()=>{
   clearInterval(myslider)
 }
}, [stage])




return (
  <>
    <div className={style.slider}>
      <div className={style.container}>
        <div className={style.textSection}>
            <div className={style.token}>{data?.token}</div>
            <div className={style.text}>
                <h2 key={data.id} id='slime'>{data?.sHeading}</h2>
                <h1 key={data.id+12}>{data?.mHeading}</h1>
                
                <p>{data?.para}</p>
            </div>
           
            <div  className={style.button}> <Button text={data?.button} color='#000' back='#fee440'/></div>
        </div>
        <div className={style.image}>
         <div className={style.imageContainer}>
          <Image src={data?.image} key={data.id+121} alt='image' objectFit="contain" className={style.imageSlide}/>
          </div>
        </div>
      </div>

    </div>
  </>
)
}
