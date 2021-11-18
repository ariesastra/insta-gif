'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User)
    }
  };
  Post.init({
    title:  {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Title of the post can not be empty"
        }
      }
    },
    gifUrl:  {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "GifUrl of the post can not be empty"
        }
      }
    },
    content:  {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: "Content of the post can not be empty"
        }
      }
    },
    UserId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};