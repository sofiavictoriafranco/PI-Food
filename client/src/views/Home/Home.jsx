import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByDiets, filterByOrigin, getAllRecipes, getByName, getDiets, orderByAlphabet, orderByHealthScore} from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar"
import Pagination from "../../components/Paginado/Pagination"
import styles from './Home.module.css'




function Home () {

    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    let filtered = useSelector(state => state.filtered)

    useEffect(()=>{
        dispatch(getAllRecipes())
    },[dispatch])

    useEffect(()=>{
        dispatch(getDiets())
    },[dispatch])


 
    
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);
    const [searchString, setSearchString] = useState('')


    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    let currentRecipes = filtered.length > 0 ? filtered.slice(indexOfFirstRecipe, indexOfLastRecipe)
    : recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  
    
    const paginate = (pageNumber) => {
      if (currentRecipes.length > 0 && currentRecipes[(pageNumber - 1) * recipesPerPage]) {
        setCurrentPage(pageNumber);
      } else {
        setCurrentPage(1);
      }
    }
    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipes.length / recipesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    

  

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

        setCurrentPage(1)
    
    }







    const filter = (event) => {

        const name = event.target.name
        const value = event.target.value
        if(name === 'origin'){
            dispatch(filterByOrigin(value))
        }else{
            dispatch(filterByDiets(value))
        }
        setCurrentPage(1)
    }




    const order = (event) => {

      const name = event.target.name
      const value = event.target.value

      

      if(name === 'Alfabetico'){
       dispatch(orderByAlphabet(value))
     
      
    
      }else{
       dispatch(orderByHealthScore(value))
        
    }

    setCurrentPage(1)

    }

    console.log(currentPage)
    console.log(filtered)





   

 


  


 

  function handleOriginChange(event) {
    
    const { location } = window;
    location.reload();
  }
    


    

  

    return(
        <div className={styles.home}>
        <NavBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <h1 className={styles.title}>Home</h1>
        
        <div className={styles.select}>
        
        <select  id='origin-select' name="origin" onChange={filter} className={styles.options} >
        <option value="default" >Selecciona un origen</option>
        <option value= "All">All</option>
          <option value="Api">Api</option>
          <option value= "BDD">BDD</option>
          
        </select>
        <select name="diets" onChange={filter} className={styles.options}>
        <option value="default" >Selecciona una dieta</option>
        <option value= "All">All</option>
          {diets?.map((d) => {
            return (
              <option value={d.title} key={d.id}>
                {d.title}
              </option>
            );
          })}
          
        </select>

        
        <select name= "Alfabetico" onChange={order} className={styles.options}>
        <option value="default" >Selecciona por orden alfabetico</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select name= "HealthScore" onChange={order} className={styles.options}>
        <option value="default" >Selecciona por orden de health score</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <button onClick={handleOriginChange} >Go Back</button>



       

        </div>

       


        <CardsContainer recipes={currentRecipes} />
      

     
    <div>
        <Pagination pageNumbers={pageNumbers} paginate={paginate} currentPage={currentPage} />
        </div>


    </div>


        

      
    )
       
    
}

export default Home