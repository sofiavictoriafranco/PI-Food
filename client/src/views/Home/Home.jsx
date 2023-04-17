import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRecipes } from "../../redux/actions"


function Home () {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)

    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])

    return(
        <div>

            {
                recipes && recipes.map( e => {
                    return(

                        <div key={e.id}>
                <h3>{e.title}</h3>
                <img src={e.image} alt={e.name}/>
            </div>
                        
                    )
                })
            }

            

        </div>
    )
}

export default Home