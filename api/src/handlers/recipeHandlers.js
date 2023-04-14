const { createRecipe, getRecipeById, getRecipeByName, getAllRecipes } = require("../controllers/recipeControllers");
const {Diets} = require('../db')


const getRecipesHandler = async(req, res) => {

    const {name} = req.query

    try{

    const results = name? await getRecipeByName(name) : await getAllRecipes()

    res.status(200).json(results)

    }catch(error){

        res.status(400).json({error: error.message})
    }

}


const createRecipeHandler = async(req, res) => {

    const {title, image, summary, healthScore, instructions, recipe_diets} = req.body;

    try{

        const newRecipe = await createRecipe(title, image, summary, healthScore, instructions)

        let diet = await Diets.findAll({where: {title: recipe_diets}})
        diet = diet.map(d => d.id)
        await newRecipe.addDiet(diet)

        res.status(201).json(newRecipe)

    }catch(error){

        res.status(400).json({error: error.message})



    }
}

const getRecipeByIdHandler = async(req, res) => {

    const {idRecipe} = req.params

    const source = isNaN(idRecipe)? 'bdd' : 'api'



    try{

        const recipe = await getRecipeById(idRecipe,source)
        res.status(200).json(recipe)





    }catch(error){

        res.status(400).json({error: error.message})

    }



}


module.exports = {
    createRecipeHandler,
    getRecipeByIdHandler,
    getRecipesHandler,
}