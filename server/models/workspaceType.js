module.exports = function(sequelize, DataTypes) {
  var WorkspaceType = sequelize.define(
    "workspacetype",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );

  WorkspaceType.associate = function(models) {
    models.WorkspaceType.hasMany(models.Workspace, {
      foreignKey: { allowNull: false }
    });
  };

  return WorkspaceType;
};
