import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRecipes, getByName } from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar"



function Home () {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])

 
    const recipes = useSelector(state => state.recipes)


   
    const [searchString, setSearchString] = useState('')

  

    function handleChange (event)  {
        event.preventDefault()
        setSearchString(event.target.value.toLowerCase())
        
    }

    function handleSubmit (event){
        event.preventDefault();
        if (searchString.trim('') === '') {  
          
        } else {
          dispatch(getByName(searchString))
        }
    }

   

  

    return(
        <>
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <h1>Home</h1>
        <CardsContainer
        recipes={recipes}
        />
        </>
    )
       
    
}

export default Home