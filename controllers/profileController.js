const { User, Post, Profile } = require('../models/index');

class ProfileController {
  static getProfilePage(req, res) {
    let id = +req.params.id
    console.log(req.params.id)
    let userData;
    Profile.findOne({
      where: {
        UserId: id
      },
      include: [{
        model: User,
        required: true
      }]
    })
      .then(user => {
        userData = user;
        //console.log(userData)
        return Post.findAll({
          where: {
            UserId: id
          },
          include: [{
            model: User,
            required: true
          }],

        })
      })
      .then(post => {
        let postData = post;
        console.log(postData);
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
    const { id } = req.params;
    const {
      profilepic,
      name,
      age,
      address,
      gender
    } = req.body;
    let data = {
      name,
      age,
      profilepic,
      address,
      gender
    }
    console.log(data);
    Profile.update(data, {
      where: {
        id: id
      }
    })
      .then(data => {
        res.redirect(`/profile/${id}`);
      })
      .catch(err => {
        res.render('errorPages', { error: err });
      });
  }
}

module.exports = ProfileController;