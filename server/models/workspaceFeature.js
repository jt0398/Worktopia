module.exports = function(sequelize, DataTypes) {
  var WorkspaceFeature = sequelize.define(
    "WorkspaceFeature",
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
