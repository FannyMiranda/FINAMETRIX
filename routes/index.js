var express = require('express');
var router = express.Router();
var UploadService= require('../service/uploadService');
const CsvController = require('../controllers/csvController');


let uploadService = new UploadService();
let upload = uploadService.up();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Finametrix' });
});

router.post('/upload',upload.single("file"), function(req, res, next) {
  res.json(req.file)
});

router.get('csv',(req,res,next)=>{
  let csvController = new CsvController(req,res,next);
  csvController.index();
})
module.exports = router;
