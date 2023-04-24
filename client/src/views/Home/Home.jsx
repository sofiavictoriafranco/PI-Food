import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByDiets, filterByOrigin, getAllRecipes, getByName, getDiets, orderByAlphabet, orderByHealthScore} from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar"




function Home () {

    const dispatch = useDispatch()
    
    

    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);

    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])

    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])


 
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    let filtered = useSelector(state => state.filtered)

    


   
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

    // Get current recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filtered.length > 0 ? filtered : recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
    pageNumbers.push(i);
  }


  function Pagination({ pageNumbers, paginate }) {
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }


 

  function handleOriginChange(event) {
    // Recarga la página actual en la misma ruta
    const { location } = window;
    location.reload();
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

        <button onClick={handleOriginChange}>Volver</button>



       

        </div>

       


        <CardsContainer recipes={currentRecipes} />
      <Pagination pageNumbers={pageNumbers} paginate={paginate} />

     
    


    </>


        

      
    )
       
    
}

export default Home