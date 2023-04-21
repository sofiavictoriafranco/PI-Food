const { Router } = require('express');
const {createRecipeHandler, getRecipeByIdHandler, getRecipesHandler} = require('../handlers/recipeHandlers')




const router = Router();

const validate = (req,res,next) => {

    const {title, summary, healthScore, instructions} = req.body

    if(!title || !summary || !healthScore || !instructions) return res.status(400).json({error: 'Missing data'})

    next();
}

router.post('/', validate, createRecipeHandler)
router.get('/:idRecipe', getRecipeByIdHandler)
router.get('/', getRecipesHandler)






module.exports = router;
