const {Recipe, Diets} = require("../db")
const { Op } = require('sequelize');
const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env


const getRecipeByName = async(name) => {

  const recipeBDD = await Recipe.findAll({
    where: 
    {title: {

      [Op.iLike]: `%${name}%`

    }
    
    }})

  let recipeApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`)).data.results

  recipeApi = recipeApi.map( e => (
    
    {

      id: e.id,
      title: e.title,
      image: e.image,
      summary: e.summary,
      healthScore: e.healthScore,
      instructions: e.analyzedInstructions,
      created: false,
      

    }
  
  ))

  return [... recipeBDD, ... recipeApi]





}

const getAllRecipes = async() => {

  let recipeBDD = await Recipe.findAll({
    include: {
      model: Diets,
    }
  })

  recipeBDD = recipeBDD.map(e => {
    return {
      id: e.id,
      title: e.title,
      image: e.image,
      summary: e.summary,
      healthScore: e.healthScore,
      instructions: e.instructions,
      diets: e.diets.map(d => d.title),
      create: e.create,
    }
  })

  let recipeApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`)).data.results

  recipeApi = recipeApi.map( e => (
    
    {

      id: e.id,
      title: e.title,
      image: e.image,
      summary: e.summary,
      healthScore: e.healthScore,
      instructions: e.analyzedInstructions,
      diets: e.diets,
      created: false,
      

    }
  
  ))



  return [... recipeBDD, ... recipeApi]

}

const createRecipe = async(title, image, summary, healthScore, instructions) => {

    const newRecipe = await  Recipe.create({title, image, summary, healthScore, instructions})
    return newRecipe



}

const getRecipeById = async(idRecipe, source) => {

     if (source === 'api'){
    let recipe = (await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)).data

    recipe = {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        instructions: recipe.instructions,
        diets: recipe.diets,

    }

    return recipe

}else{
   let recipe = await Recipe.findByPk(idRecipe, { include: {
        model: Diets,
        attributes: ["title"],
        through: {
          attributes: [],
        },
      } })

      return recipe

    }


    



}

module.exports = {
    createRecipe,
    getRecipeById,
    getAllRecipes,
    getRecipeByName,
}