const { Router } = require('express');
const {createRecipeHandler, getRecipeByIdHandler, getRecipesHandler} = require('../handlers/recipeHandlers')




const router = Router();

router.post('/', createRecipeHandler)
router.get('/:idRecipe', getRecipeByIdHandler)
router.get('/', getRecipesHandler)






module.exports = router;
