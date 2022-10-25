import navstyle from '../styles/Common/NavStyle.module.scss'
import { IoIosArrowDown } from 'react-icons/io';
import spec from '../Data/navData';
import Image from 'next/image'
import specialist from '../public/specialist.jpg';
import { useState } from 'react';


export default function Navbar() {
  const [selectNav, setSelectNav] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const selectNavHead = (e:number) =>{
    setSelectNav(e);
    setShowNav(true)
  }
  const cursorLeave = () =>{
    setSelectNav(0);
    setShowNav(false)
  }
return (
   <>
     <div className={navstyle.navbar}>
        <div className={navstyle.left}>

        </div>
        <div className={navstyle.middle} >
            <h4 onMouseOver={()=>selectNavHead(1)}>MEDICINE<span></span></h4>
            <h4 onMouseOver={()=>selectNavHead(2)}>SPECIALITIES<span></span></h4>
            <h4>BUITY<span></span></h4>
            <h4>CARE DITE<span></span></h4>
            <h4>Mother & Baby Care<span></span></h4>
        </div>
        <div className={navstyle.right}>
            <p>Spend $70 more and get free shipping!</p>
        </div>
     </div>
     {showNav?
     <div className={navstyle.navDataList} onMouseOver={()=>selectNavHead(selectNav)} onMouseOut={()=>cursorLeave()}>
     <div className={navstyle.header}>
           {spec[selectNav-1]?.map((val:any, ind:number)=>{
          return(
            <>
            <div className={navstyle.section}>
            <h3 key={ind}>{val?.heading}</h3>

            {val.data.map((value:any, index:number)=>{
              return(
                <>
                <p key={index}>{value.name}</p>
                </>
              )
            })}
            </div>
            </>
          )
           })}
          <div className={navstyle.imageSection}>
            <Image className={navstyle.image} src={specialist} alt='image' width={350} height={220} />
          </div>
     </div>
     <div className={navstyle.footer}>
         
     </div>
     </div> 
     :null}
   </>
)
}
