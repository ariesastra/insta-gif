const { User, Post, Profile } = require('../models/index');

class ProfileController {
  static getProfilePage(req, res) {
    let userData;
    Profile.findAll({
      include: [{
        model: User,
        required: true
      }]
    })
      .then(user => {
        userData = user;
        return Post.findOne({
          include: [{
            model: User,
            required: true
          }],
          where: {
            id: userData[0].id
          }
        })
      })
      .then(post => {
        let postData = post;
        console.log(userData, postData);
        res.render('pages/profilePage', { userData, postData });
      })
      .catch(err => {
        res.render('errorPages', { error: err });
      })
  }

  static getEditProfile(req, res) {
    const { id } = req.params;
    let profileData;
    Profile.findAll({
      include: [{
        model: User,
        required: true
      }],
      where: {
        id: id
      }
    })
      .then(user => {
        res.render('pages/editProfile', { userData: user });
      })
      .catch(err => {
        res.render('errorPages', { error: err });
      });
  }

  static postEditProfile(req, res) {

    res.send('post');
  }
}

module.exports = ProfileController;