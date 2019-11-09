module.exports = function(sequelize, DataTypes) {
  var UserRole = sequelize.define("UserRole", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  });

  UserRole.associate = function(models) {
    models.UserRole.hasMany(models.User);
  };

  return UserRole;
};
