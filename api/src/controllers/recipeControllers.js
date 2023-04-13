const {Recipe, Diets} = require("../db")
const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env

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
}