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
      allowNull: true,
    },

    image: {

      type: DataTypes.STRING,
      allowNull: true,

    

    },

    summary: {

      type: DataTypes.STRING,
      allowNull: true,

    },

    healthScore: {

      type: DataTypes.FLOAT,
      allowNull: true,


    },

    instructions: {

      type: DataTypes.STRING,
      allowNull: true, 

    },

   

   

   





  }, 
  {timestamps: false});
};
