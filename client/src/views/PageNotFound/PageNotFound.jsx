import styles from './PageNotFound.module.css'
import { Link } from 'react-router-dom'


const PageNotFound = () => {

    return(

       
        <div className={styles.pageNotFound}>
        <div className={styles.notFound}>
            <h2>The page you are looking for doesn't exist.</h2>
            <h2>Please go to the Landing Page</h2>
            <Link to='/'>
            <button className={styles.myButton}>CLICK ME!</button>
            </Link>
        </div>
    </div>
        
    )
}

export default PageNotFound