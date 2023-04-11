const { createRecipe } = require("../controllers/recipeControllers");


// const getRecipesHandler = () => {

//     const {name} = req.query

//     if( name !== undefined ){

//     }else {
        
//     }

// }


const createRecipeHandler = async(req, res) => {

    const {title, image, summary, healthScore, instructions} = req.body;

    try{

        const newRecipe = await createRecipe(title, image, summary, healthScore, instructions)
        res.status(201).json(newRecipe)

    }catch(error){

        res.status(400).json({error: error.message})



    }
}


module.exports = {
    createRecipeHandler,
}