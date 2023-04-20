import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRecipes } from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar"



function Home () {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)

    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])

    const [filtered, setFiltered] = useState(recipes)
    const [searchString, setSearchString] = useState('')

    function handleChange (event)  {
        event.preventDefault()
        setSearchString(event.target.value)
        
    }

    function handleSubmit (event){
        event.preventDefault();
        if (searchString.trim('') === '') {  
          setFiltered(recipes);
        } else {
          const filtered = recipes.filter(recipe => recipe.title.includes(searchString));
          setFiltered(filtered);
        }
    }

  

    return(
        <>
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <h1>Home</h1>
        <CardsContainer
        recipes={filtered}
        />
        </>
    )
       
    
}

export default Home