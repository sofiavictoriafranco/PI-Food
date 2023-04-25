import { useDispatch } from "react-redux"
import { getRecipeById } from "../../redux/actions"
import { useEffect, useState } from "react"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
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

    

   

 

    
   const detailSummary = detail.summary
   const summary = detailSummary.replace(/<[^>]*>/g, "")
   




    return(
        <div className={style.div}>

            <h1>Title: {detail.title}</h1>
            <h2>Id: {detail.id}</h2>
            <h2>Summary: {summary} </h2>
            <h2>Health Score: {detail.healthScore}</h2>
            <h2>Instructions: {detail.instructions}</h2>
            <h2>diets: {detail.diets}</h2>
            <img src={detail.image} alt={detail.title}/>


     
    


        </div>
    )
}

export default Detail