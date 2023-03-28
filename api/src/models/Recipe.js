const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
 
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: 'recipe'
    
  });
};
       



