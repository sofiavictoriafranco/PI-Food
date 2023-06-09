const {Recipe, Diets} = require("../db")
const { Op } = require('sequelize');
const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env


const getRecipeByName = async(name) => {

  let recipeBDD = await Recipe.findAll({
    where: 
    {title: {

      [Op.iLike]: `%${name}%`

    }
    
    }})

    recipeBDD = recipeBDD.map( e => ({

      id: e.id,
      title: e.title,
      image: e.image,
      summary: e.summary,
      healthScore: e.healthScore,
      instructions: e.analyzedInstructions,
      diets: e.recipeDiets,
      created: true,

    }))

  let recipeApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true`)).data.results

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

  const array = [... recipeBDD, ... recipeApi]

  

  if (array.length === 0) {
    throw new Error('No existe');
  } else {
    return array;
  }





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
      create: true,
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

const createRecipe = async(title, image, summary, healthScore, instructions, recipeDiets) => {

  if (!image) {
    image = Recipe.rawAttributes.image.defaultValue;
  }


    const newRecipe = await  Recipe.create({title, image, summary, healthScore, instructions, recipeDiets})
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

    

    if(recipe === undefined){
      throw new Error('No existe')
    } else{
      return recipe
    }

}else{
   let recipe = await Recipe.findByPk(idRecipe, { include: {
        model: Diets,
        attributes: ["title"],
        through: {
          attributes: [],
        },
      } })

      if(recipe === null){
        throw new Error('No existe')

      }else {
        return recipe
      }

    }


    



}

module.exports = {
    createRecipe,
    getRecipeById,
    getAllRecipes,
    getRecipeByName,
}