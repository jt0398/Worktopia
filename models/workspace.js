module.exports = function(sequelize, DataTypes) {
  var Workspace = sequelize.define("Workspace", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(250)
    },
    dimension: {
      type: DataTypes.STRING(30)
    },
    no_occupants: {
      type: DataTypes.INTEGER
    },
    floor: {
      type: DataTypes.STRING(20)
    },
    rental_price: {
      type: DataTypes.FLOAT(11, 10)
    }
  });

  Workspace.associate = function(models) {
    models.Workspace.belongsTo(models.User);
  };

  return Workspace;
};
