module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define("Destinations", {
    //name: DataTypes.STRING,
    //address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    label: DataTypes.STRING
  });
  return destinations;
};
