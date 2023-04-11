const {Recipe} = require("../db")

const createRecipe = async(title, image, summary, healthScore, instructions) => {

    const newRecipe = await  Recipe.create({title, image, summary, healthScore, instructions})
    return newRecipe



}

module.exports = {
    createRecipe,
}