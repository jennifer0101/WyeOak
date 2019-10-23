module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define("Destinations", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  });
  return destinations;
};
