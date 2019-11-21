module.exports = function(sequelize, DataTypes) {
  var UserRole = sequelize.define(
    "userrole",
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

  UserRole.associate = function(models) {
    models.UserRole.hasMany(models.User, {
      foreignKey: { allowNull: false }
    });
  };

  return UserRole;
};
