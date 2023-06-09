import { useDispatch } from "react-redux"
import { getRecipeById } from "../../redux/actions"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import style from './Detail.module.css'

const Detail = () => {

    const dispatch = useDispatch()

    const {idRecipe} = useParams()

     useEffect(()=>{
        dispatch(getRecipeById(idRecipe))
    },[idRecipe])

    const detail = useSelector(state => state.detail)



    

   

 


    console.log(detail.diets)

    
    if(Array.isArray(detail.diets) && typeof(detail.diets[0]) !== 'string'){

        

        detail.diets = detail.diets.map(o => o.title) 

    }
   
    
    
   
   




    return(
        <div className={style.div}>

            <h1>Title: {detail && detail.title ? detail.title : ''}</h1>
            <h2>Id: {detail && detail.id ? detail.id : ''}</h2>
            <h2>Summary:  {detail && detail.summary ? detail.summary.replace(/<[^>]*>/g, "") : ''}</h2>
            <h2>Health Score: {detail && detail.healthScore ? detail.healthScore : ''}</h2>
            <h2>Instructions: {detail && detail.instructions ? detail.instructions.replace(/<[^>]*>/g, "") : ''} </h2>
            <h2>diets: {detail && detail.diets ? detail.diets.join(', ') : ""}</h2>
            <img src={detail.image} alt={detail.title}/>


      
    


        </div>
    )
}

export default Detail