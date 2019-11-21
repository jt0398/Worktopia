module.exports = function(sequelize, DataTypes) {
  var Feature = sequelize.define("Feature", {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  });

  Feature.associate = function(models) {
    models.Feature.belongsToMany(models.Workspace, {
      through: "WorkspaceFeature"
    });
  };

  return Feature;
};
