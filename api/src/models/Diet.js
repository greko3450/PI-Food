const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diet", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true

    },
    name: {
      // type: DataTypes.ARRAY(DataTypes.STRING),
      type: DataTypes.STRING,
      allowNull: false,
    
    }
  }, {
    timestamps: true,
      freezeTableName: true,
      tableName: 'diet'
  })
}
