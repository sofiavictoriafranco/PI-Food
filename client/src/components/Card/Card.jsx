import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = (props) => {

   const diets = props.diets.join(', ');


    return(
        <div className={style.card}>

            <Link to={`/detail/${props.id}`} className={style.myButton}>
            
            <p>Title: {props.title}</p>
            <p>Diets: {diets}</p>
            <img src={props.image} alt={props.title} className={style.img}/>
            </Link>

        </div>
    )
}

export default Card