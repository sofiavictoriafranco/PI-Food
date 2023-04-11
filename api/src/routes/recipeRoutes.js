const { Router } = require('express');
const {createRecipeHandler} = require('../handlers/recipeHandlers')




const router = Router();

router.post('/', createRecipeHandler)






module.exports = router;
