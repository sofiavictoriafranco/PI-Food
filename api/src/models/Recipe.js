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
      defaultValue:'https://www.elmueble.com/medio/2023/03/16/recetas-sanas_f45fa664_230316141534_900x900.jpg',

    

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
