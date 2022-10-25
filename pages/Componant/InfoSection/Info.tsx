import React from 'react';
import style from '../../../styles/Componant/Info.module.scss';
import { TbBus } from 'react-icons/tb';
import { MdPayment } from 'react-icons/md';
import { RiWechatLine } from 'react-icons/ri';
import { MdMobileFriendly } from 'react-icons/md';


export default function Info() {
  const Icon = (props:any) =>{
    return(
      <>
       <div className={style.item}>
          <div className={style.left}>
            {props.icon}
          </div>
          <div className={style.right}>
            <h4>{props.head}</h4>
            <p>{props.para}</p>
          </div>
        </div>
      </>
    )
  }
return (
  <>
    <div className={style.info}>
      <div className={style.infoSection}>

       <Icon head='FREE DELIVERY' para='For all orders over $120' icon={<TbBus />}/>

       <Icon head='SAFE PAYMENT' para='100% secure payment' icon={<MdPayment />}/>

       <Icon head='24/7 HELP CENTER' para='Dedicated 24/7 support' icon={<RiWechatLine />}/>

       <Icon head='FRIENDLY SERVICES' para='30 day satisfaction guarantee' icon={<MdMobileFriendly />}/>

      </div>
    </div>
  </>
)
}
