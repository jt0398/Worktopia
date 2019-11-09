module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define("Booking", {
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rental_price: {
      type: DataTypes.FLOAT(11, 10),
      allowNull: false
    }
  });

  Booking.associate = function(models) {
    models.Booking.belongsTo(models.User, {
      foreignKey: { allowNull: false }
    });
    models.Booking.belongsTo(models.Workspace, {
      foreignKey: { allowNull: false }
    });
  };

  return Booking;
};
