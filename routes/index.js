var express = require('express');
var router = express.Router();
let UploadService = require('../service/uploadService');
let uploadService = new UploadService();
let upload = uploadService.up(); 
// instaciar clase dos lineas anteriores
let CsvControler = require('../controllers/csvconvertcontroller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', upload.single('file'), function(req, res, next) {
  let csvControler = new CsvControler(req, res, next);
  csvControler.csvConvert();
}); 

router.get('/inicio', function(req, res, next) {
  res.render('vista.hbs', {
    title: '1 vista',
    page: 'pagina variable',
    layout: 'template.hbs'
  });
});


module.exports = router;
