module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define("Destinations", {
    //name: DataTypes.STRING,
    //address: DataTypes.STRING,
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    label: DataTypes.STRING,
    hotel1: DataTypes.STRING,
    hotel1Img: DataTypes.STRING,
    hotel2: DataTypes.STRING,
    hotel2Img: DataTypes.STRING,
    hotel3: DataTypes.STRING,
    hotel3Img: DataTypes.STRING
  });
  return destinations;
};
