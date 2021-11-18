const { User, Post, Profile } = require('../models');
const path = require('path');

class Controller {
  static getInstaGif(req, res) {
    const { userId } = req.session;
    let userData;
    let postData;

    Profile.findOne({
      include: [{
        model: User,
        required: true
      }],
      where: {
        id: userId
      }
    })
      .then(user => {
        userData = user;
        return Post.findAll({
          include: [{
            model: User,
            required: true
          }],
          order: [
            ['createdAt', 'DESC']
          ]
        })
      })
      .then(post => {
        postData = post
        let profileData = {};
        postData.forEach(el => {
          if (el.id === userData.User.id) {
            profileData.name = userData.name;
            profileData.profilepic = userData.profilepic;
          }
        });

        res.render('index', { userData, postData, profileData });
      })
      .catch(err => {
        res.render('errorPages', { error: err });
      })

  }

  static postGifPage(req, res) {
    res.render('pages/postGif')
  }

  static postInstaGif(req, res) {

  }

  static getAddInstaGif(req, res) {
    const { errors } = req.query;
    if (errors) res.locals.errors = [errors];

    console.log(res.locals.errors);
    res.render('pages/postGif')
  }

  static postAddInstaGif(req, res) {
    let gifFile;
    let uploadPath;
    const { title, content } = req.body;
    const { userId } = req.session;

    if (!req.files || Object.keys(req.files).length === 0) {
      res.locals.errors = ['No File GIF were uploaded!'];
      Controller.getAddInstaGif(req, res);
    }
    else {
      console.log();
      gifFile = req.files.fileUpload;
      uploadPath = path.join(__dirname, '../public/uploads/') + gifFile.name;

      // Use the mv() method to place the file somewhere on your server
      gifFile.mv(uploadPath, function (err) {
        if (err) {
          console.log(err);
          let errors = err.errors.map(error => error.message);
          res.locals.errors = errors;
          Controller.getAddInstaGif(req, res);
        }

        let urlGif = `http://localhost:3000/uploads/${gifFile.name}`;

        Post.create({ title, gifUrl: urlGif, content, UserId: userId })
          .then(post => {
            res.redirect('/');
          })
          .catch(err => {
            if (err.name == 'SequelizeValidationError') {
              let errors = err.errors.map(error => error.message);
              res.locals.errors = errors;
              Controller.getAddInstaGif(req, res);
            }
            else {
              res.render('errorPages/index', { err });
            }
          })
      });

    }
  }

}

module.exports = Controller;