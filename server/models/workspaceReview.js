module.exports = function(sequelize, DataTypes) {
  var WorkspaceReview = sequelize.define(
    "WorkspaceReview",
    {
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      comment: {
        type: DataTypes.STRING(250),
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );

  WorkspaceReview.associate = function(models) {
    models.WorkspaceReview.belongsTo(models.User, {
      foreignKey: { allowNull: false }
    });
    models.WorkspaceReview.belongsTo(models.Workspace, {
      foreignKey: { allowNull: false }
    });
  };

  return WorkspaceReview;
};
