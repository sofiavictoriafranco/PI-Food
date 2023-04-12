const { createRecipe } = require("../controllers/recipeControllers");
const {Diets} = require('../db')


// const getRecipesHandler = () => {

//     const {name} = req.query

//     if( name !== undefined ){

//     }else {
        
//     }

// }


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


module.exports = {
    createRecipeHandler,
}