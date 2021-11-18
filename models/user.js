'use strict';
const {
  Model
} = require('sequelize');
var bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post)
      User.hasOne(models.Profile)
    }
  };
  User.init({
    email:  {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Email of User can not be empty"
        }
      }
    },
    password:  {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Password of User can not be empty"
        }
      }
    }
  }, {
    hooks :{
        beforeCreate(user,options){
          var salt = bcrypt.genSaltSync(10);
          var hash = bcrypt.hashSync(user.password, salt);
          user.password = hash
        }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};