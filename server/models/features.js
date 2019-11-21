module.exports = function(sequelize, DataTypes) {
  var Feature = sequelize.define(
    "feature",
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );

  Feature.associate = function(models) {
    models.Feature.belongsToMany(models.Workspace, {
      through: "WorkspaceFeature"
    });
  };

  return Feature;
};
