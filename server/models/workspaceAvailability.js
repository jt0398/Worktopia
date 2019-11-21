module.exports = function(sequelize, DataTypes) {
  var WorkspaceAvailability = sequelize.define(
    "WorkspaceAvailability",
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );

  WorkspaceAvailability.associate = function(models) {
    models.WorkspaceAvailability.belongsTo(models.Workspace, {
      foreignKey: { allowNull: false }
    });
  };

  return WorkspaceAvailability;
};
