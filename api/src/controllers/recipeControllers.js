const {Recipe} = require("../db")
const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env

const createRecipe = async(title, image, summary, healthScore, instructions) => {

    const newRecipe = await  Recipe.create({title, image, summary, healthScore, instructions})
    return newRecipe



}

const getRecipeById = async(idRecipe, source) => {

    const recipe = source === 'api'?
    (await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)).data :
    await Recipe.findByPk(idRecipe)
    return recipe



}

module.exports = {
    createRecipe,
    getRecipeById,
}