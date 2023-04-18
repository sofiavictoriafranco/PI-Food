import Card from "../Card/Card";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRecipes } from "../../redux/actions"


const CardsContainer = () => {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)

    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])



    return(
        <div>

            {
                recipes && recipes.map( e => {
                    return <Card

                    id= {e.id}
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