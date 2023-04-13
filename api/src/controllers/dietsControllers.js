const {Diets} = require('../db');
const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;

const getAllDietsController = async() => {
    
        const diet = [];
        const response = await axios(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
          )
          const diets = response.data.results.map(e => e.diets);
        
        for(let i = 0; i < diets.length; i++){
            for(let j = 0; j < diets[i].length; j++){
                if(!diet.includes(diets[i][j])){
                    diet.push(diets[i][j])
                }
            }
        }

        


        const allDiets = diet.map(e => ({title: e}))
        allDiets.push({
            title: 'vegetarian'
        })
        await Diets.bulkCreate(allDiets);
        console.log('Dietas cargadas en base de datos')
        
   
};

module.exports = {
    getAllDietsController,
}