module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING
    },
    developerType: {
      type: DataTypes.STRING
    },
    bootcamp: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });
  return User;
};
