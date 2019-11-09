module.exports = function(sequelize, DataTypes) {
  var WorkspaceLocation = sequelize.define("WorkspaceLocation", {
    addr1: {
      type: DataTypes.STRING(100)
    },
    addr2: {
      type: DataTypes.STRING(100)
    },
    city: {
      type: DataTypes.STRING(50)
    },
    province: {
      type: DataTypes.STRING(50)
    },
    postal_code: {
      type: DataTypes.STRING(20)
    }
  });

  WorkspaceLocation.associate = function(models) {
    models.WorkspaceLocation.hasMany(models.Workspace, {
      foreignKey: { allowNull: false }
    });
  };

  return WorkspaceLocation;
};
