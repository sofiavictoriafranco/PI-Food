import styles from './Landing.module.css'
import {Link} from 'react-router-dom'



const Landing = () => {

    return(

       
        <div className={styles.landing}>
        <div className={styles.container}>
            <h1>PI FOODS</h1>
            <Link to='/home'>
            <button>Welcome</button>
            </Link>
        </div>
    </div>
        
    )
}

export default Landing