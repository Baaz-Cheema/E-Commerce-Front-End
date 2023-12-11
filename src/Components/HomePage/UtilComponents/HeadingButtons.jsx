import styles from './HeadingButtons.module.css'
import { Link } from 'react-router-dom'

export default function HeadingButtons({ navLeft, navRight, disableL, title, linkTo }) {

    return <div className={styles.heading}>
        <div>
            <h2>{title}</h2>
            <Link to={'/store'}>{linkTo}<i className='bx bx-chevron-right' ></i></Link>
        </div>
        <div className={styles.btns}>
            <button onClick={navLeft}><i className='bx bx-chevron-left' ></i></button>
            <button disabled={disableL} onClick={navRight}><i className='bx bx-chevron-right' ></i></button>
        </div>
    </div>
}