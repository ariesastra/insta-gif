const { User, Post, Profile } = require('../models');

class Controller {
  static getInstaGif(req, res) {
    let userData;
    Profile.findAll({
      include: [{
        model: User,
        required: true
      }]
    })
      .then(user => {
        userData = user;
        return Post.findAll({
          include: [{
            model: User,
            required: true
          }]
        })
      })
      .then(post => {
        let postData = post
        console.log(userData, postData);
        res.render('index', { userData, postData });
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
    res.render('pages/postGif', { err: null })
  }

  static postAddInstaGif(req, res) {
    let gifFile;
    let uploadPath;
    const { title, gifUrl, content } = req.body;
    const { userId } = req.session;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files.gifFile);
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    gifFile = req.files.gifFile;
    uploadPath = __dirname + '/public/uploads/' + gifFile.name;

    // Use the mv() method to place the file somewhere on your server
    gifFile.mv(uploadPath, function (err) {
      if (err)
        return res.status(500).send(err);

      res.send('File uploaded!');
    });

    // console.log(userId)
    // Post.create({ title, gifUrl, content, UserId: userId })
    //   .then(post => {
    //     res.redirect('/')
    //   })
    //   .catch(err => {
    //     res.send(err)
    //   })

  }

}

module.exports = Controller;