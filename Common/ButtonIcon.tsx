import styles from '../styles/Common/Button.module.scss';
import { BsMoonStarsFill } from 'react-icons/bs';
export default function ButtonIcon(props:any) {
return (
  <>
    <div className={styles.buttonIcon} style={{background:props.back, color:props.color, fontSize:props.font}}>
          <div className={styles.icon}>
              <span>{props.text}</span>
          </div>
    </div>
  </>
)
}