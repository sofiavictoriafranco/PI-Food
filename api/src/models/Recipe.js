const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {

    id: {

      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,



    },


    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {

      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'https://spoonacular.com/recipeImages/633942-556x370.jpg',

    

    },

    summary: {

      type: DataTypes.STRING,
      allowNull: false,

    },

    healthScore: {

      type: DataTypes.FLOAT,
      allowNull: false,


    },

    instructions: {

      type: DataTypes.STRING,
      allowNull: false, 

    },

    recipeDiets: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:true,
    },


    created: {
      type: DataTypes.BOOLEAN,
      default: true,
    }

   

   

   





  }, 
  {timestamps: false});
};
