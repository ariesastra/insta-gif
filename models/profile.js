'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }

    static formatName() {
      if (this.gender === "Male") {
        return this.name = "Mr. " + this.name
      } else {
        return this.name = "Mrs. " + this.name
      }
    }

  };
  Profile.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Name of User can not be empty"
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "Age of User can not be empty"
        }
      }
    },
    profilepic: DataTypes.STRING,
    address: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    gender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Gender can not be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};