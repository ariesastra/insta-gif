
class ProfileController {
  static getProfilePage(req, res) {
    res.render('pages/profilePage');
  }

  static getEditProfile(req, res) {
    res.render('pages/editProfile');
  }

  static postEditProfile(req, res) {
    res.send('post');
  }
}

module.exports = ProfileController;