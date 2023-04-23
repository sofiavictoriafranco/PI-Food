import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ORDER_BY_HEALTHSCORE, filterByDiets, filterByOrigin, getAllRecipes, getByName, getDiets, orderByAlphabet, orderByHealthScore } from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar"



function Home () {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])

    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])


 
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    const filtered = useSelector(state => state.filtered)

    


   
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

    const filter = (event) => {

        const name = event.target.name
        const value = event.target.value

        if(name === 'origin'){

            dispatch(filterByOrigin(value))

        }else{

            dispatch(filterByDiets(value))



        }


    }

    const order = (event) => {

      const name = event.target.name
      const value = event.target.value


      if(name === 'Alfabetico'){

        dispatch(orderByAlphabet(value))

    }else{

        dispatch(orderByHealthScore(value))



    }

    }

    

  

    return(
        <>
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <h1>Home</h1>
        <div>
        <select name="origin" onChange={filter}>
          <option value="Api">Api</option>
          <option value="BDD">BDD</option>
        </select>
        <select name="diets" onChange={filter}>
          {diets?.map((d) => {
            return (
              <option value={d.title} key={d.id}>
                {d.title}
              </option>
            );
          })}
        </select>

        
        <select name= "Alfabetico" onChange={order}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select name= "HealthScore" onChange={order}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        </div>
        <CardsContainer
        recipes={filtered.length > 0? filtered : recipes}
        />
        </>
    )
       
    
}

export default Home