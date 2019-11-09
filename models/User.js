/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      user_password: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      user_role_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      user_email_id: {
        type: DataTypes.STRING(45),
        allowNull: true
      }
    },
    {
      tableName: "User"
    }
  );

  return User;
};
