import styles from '../styles/Common/Button.module.scss';
import { BsMoonStarsFill } from 'react-icons/bs';
export default function Button(props:any) {
return (
  <>
    <div className={styles.button} style={{ color:props.color, background:props.back}}>
          <div className={styles.text}>
              {/* <span style={{background:props.back}}>{props.text}</span> */}
              {props.text}
          </div>
    </div>
  </>
)
}
