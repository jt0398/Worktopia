module.exports = function(sequelize, DataTypes) {
  var WorkspaceLocation = sequelize.define("WorkspaceLocation", {
    addr1: {
      type: DataTypes.STRING(100)
    },
    addr2: {
      type: DataTypes.STRING(100)
    },
    city: {
      type: DataTypes.STRING(50)
    },
    province: {
      type: DataTypes.STRING(50)
    },
    postal_code: {
      type: DataTypes.STRING(20)
    },
    country: {
      type: DataTypes.STRING(20)
    },
    full_address: {
      type: DataTypes.STRING,
      get() {
        return (
          this.getDataValue("addr1") +
          " " +
          this.getDataValue("addr2") +
          " " +
          this.getDataValue("city") +
          ", " +
          this.getDataValue("province") +
          " " +
          this.getDataValue("postal_code") +
          " " +
          this.getDataValue("country")
        );
      }
    }
  });

  WorkspaceLocation.associate = function(models) {
    models.WorkspaceLocation.hasMany(models.Workspace, {
      foreignKey: { allowNull: false }
    });
    models.WorkspaceLocation.belongsTo(models.User, {
      foreignKey: { allowNull: false }
    });
  };

  return WorkspaceLocation;
};
