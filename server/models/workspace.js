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
    },
    isActive: {
      type: DataTypes.BOOLEAN
    }
  });

  Workspace.associate = function(models) {
    models.Workspace.belongsTo(models.WorkspaceType, {
      foreignKey: { allowNull: false }
    });
    models.Workspace.hasMany(models.Booking, {
      foreignKey: { allowNull: false }
    });
    models.Workspace.belongsTo(models.WorkspaceLocation, {
      foreignKey: { allowNull: false }
    });
    models.Workspace.hasMany(models.WorkspacePic, {
      foreignKey: { allowNull: false }
    });
    models.Workspace.belongsToMany(models.Feature, {
      through: "WorkspaceFeature"
    });
    models.Workspace.hasMany(models.WorkspaceReview, {
      foreignKey: { allowNull: false }
    });
  };

  return Workspace;
};
