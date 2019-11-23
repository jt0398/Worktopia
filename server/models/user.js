var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
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
    },
    {
      indexes: [
        // Create a unique index on username
        {
          unique: true,
          fields: ["username"]
        }
      ]
    }
  );

  User.associate = function(models) {
    models.User.belongsTo(models.UserRole, {
      foreignKey: { allowNull: false }
    });
    models.User.hasMany(models.WorkspaceLocation, {
      foreignKey: { allowNull: false }
    });
    models.User.hasMany(models.Booking, {
      foreignKey: { allowNull: false }
    });
    models.User.hasMany(models.WorkspaceReview, {
      foreignKey: { allowNull: false }
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by
  //the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return User;
};
