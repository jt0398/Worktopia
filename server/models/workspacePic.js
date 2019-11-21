module.exports = function(sequelize, DataTypes) {
  var WorkspacePic = sequelize.define(
    "WorkspacePic",
    {
      image_path: {
        type: DataTypes.STRING(250),
        allowNull: false
      }
    },
    {
      indexes: [
        // Create a unique index on image_path
        {
          unique: true,
          fields: ["image_path"]
        }
      ]
    }
  );

  WorkspacePic.associate = function(models) {
    models.WorkspacePic.belongsTo(models.Workspace, {
      foreignKey: { allowNull: false }
    });
  };

  return WorkspacePic;
};
