module.exports = function(sequelize, DataTypes) {
  var WorkspaceFeature = sequelize.define(
    "workspacefeature",
    {
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );

  return WorkspaceFeature;
};
