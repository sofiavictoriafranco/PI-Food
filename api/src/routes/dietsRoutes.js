const { Router } = require('express');
const {getAllDiets} = require('../handlers/dietsHandlers')




const router = Router();

router.get('/', getAllDiets)






module.exports = router;