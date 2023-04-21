import Card from "../Card/Card";
import style from './CardsContainer.module.css'


const CardsContainer = (props) => {




    return(
        <div className={style.container}>

            {
                props.recipes && props.recipes.map( e => {
                    return <Card

                    id={e.id}
                    title= {e.title}
                    image= {e.image}
                    diets= {e.diets}

                    />

       
                        
                    
                })
            }

        </div>
    )



}

export default CardsContainer