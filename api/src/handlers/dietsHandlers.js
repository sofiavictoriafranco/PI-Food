const axios = require('axios')
const {getAllDietsController} = require('../controllers/dietsControllers')
const {Diets} = require('../db')

const getAllDiets = async(req, res) => {



        Diets.findAll()
        .then(diets => res.send(diets))
        .catch(error => console.log(error))



   


}

module.exports = {
    getAllDiets,
}