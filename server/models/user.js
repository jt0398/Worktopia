module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
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
    phone_no: {
      type: DataTypes.STRING(50)
    }
  });

  User.associate = function(models) {
    models.User.belongsTo(models.UserRole);
    models.User.hasMany(models.Workspace);
  };

  return User;
};
