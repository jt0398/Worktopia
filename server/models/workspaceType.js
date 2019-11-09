module.exports = function(sequelize, DataTypes) {
  var WorkspaceType = sequelize.define("WorkspaceType", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  });

  WorkspaceType.associate = function(models) {
    models.WorkspaceType.hasMany(models.Workspace);
  };

  return WorkspaceType;
};
