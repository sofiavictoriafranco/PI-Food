import styles from './Landing.module.css'
import {Link} from 'react-router-dom'



const Landing = () => {

    return(

       
        <div className={styles.landingfondo}>
        <div className={styles.landing}>
            <h1>WELCOME TO THE FOOD APP</h1>
            <Link to='/home'>
            <button className={styles.myButton}>Click me!</button>
            </Link>
        </div>
    </div>
        
    )
}

export default Landing