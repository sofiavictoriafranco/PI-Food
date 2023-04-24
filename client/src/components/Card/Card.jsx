import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = (props) => {
    return(
        <div className={style.card}>

            <Link to={`/detail/${props.id}`} className={style.myButton}>
            
            <p>Title: {props.title}</p>
            <p>Diets: {props.diets}</p>
            <img src={props.image} alt={props.title}/>
            </Link>

        </div>
    )
}

export default Card