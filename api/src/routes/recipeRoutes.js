const { Router } = require('express');
const {createRecipeHandler, getRecipeByIdHandler} = require('../handlers/recipeHandlers')




const router = Router();

router.post('/', createRecipeHandler)
router.get('/:idRecipe', getRecipeByIdHandler)






module.exports = router;
