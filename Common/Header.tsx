import Style from '../styles/Common/Header.module.scss'
import { GrSearch } from 'react-icons/gr';
import { HiUser } from 'react-icons/hi';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { BsFillBagCheckFill } from 'react-icons/bs';
export default function Header() {

    const login = <HiUser />

    const MyIcon = (props:any) =>{
        return(
          <>
          <div className={Style.Icons}>
          <div className={Style.Icon}>
              {props.icon}
          </div>
          <div className={Style.details}>
            <span>{props.top}</span>
            <p>{props.bottom}</p>
          </div>
        </div>
          </>
        )
    }

return (
  <>
    <div className={Style.header}>
      <div className={Style.title}>
          healthINDIA
      </div>
      <div className={Style.search}>
          <input type='text' placeholder="Search..." />
          <div className={Style.searchButton}><GrSearch /></div>
      </div>
      <div className={Style.infoIcon}>
        <MyIcon top='Login' bottom='Login/Registration' icon={<HiUser />}/>
        <MyIcon top='Favorite' bottom='My Wishlist' icon={<MdOutlineFavoriteBorder />}/>
        <MyIcon top='Your Card:' bottom='$200' icon={<BsFillBagCheckFill />}/>
      </div>
    </div>
  </>
)
}
