

const Card = (props) => {
    return(
        <div>
            
            <p>Title:{props.title}</p>
            <p>Diets:{props.diets}</p>
            <img src={props.image} alt={props.title}/>

        </div>
    )
}

export default Card