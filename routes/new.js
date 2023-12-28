var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // Add some messages for project
  res.send('esto es un nuevo mensaje')

  res.render('/new', { title: "Mini Messageboard", messages: messages })
});

// router.get('/new', function(req, res, next){
//   res.render()
// })

module.exports = router;
  