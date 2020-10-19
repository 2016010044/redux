var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/todos', function(req, res, next) {
   res.json({
     status: 200,
     data: [
       {id: 1, title: "学习2个小时的react课程", finished: false},
       {id: 2, title: "学习1个小时的webpack课程", finished: false},
       {id: 3, title: "学习1个小时的node课程", finished: false},
       {id: 4, title: "刷2小时的抖音", finished: false}
     ]
   })
});

module.exports = router;
