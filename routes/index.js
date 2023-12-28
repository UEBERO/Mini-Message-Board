var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router
  .route('/new')
  .get((req, res) => {
    res.render('form');
  })
  .post((req, res) => {
    const { messageUser, messageText } = req.body;

    console.log("Enviadoooo", messageUser, messageText);

    messages.push({ text: messageText, user: messageUser, added: new Date() });

    res.redirect('/');
  });

module.exports = router;
