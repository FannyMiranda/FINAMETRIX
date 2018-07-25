var express = require('express');
var router = express.Router();
var UploadService= require('../service/uploadService');
const CsvController = require('../controllers/csvController');
const Valor = require('../models/valoresModel');

let uploadService = new UploadService();
let upload = uploadService.up();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Finametrix' });
});

router.post('/upload',upload.single("file"), function(req, res, next) {
  res.json(req.file)
});

router.get('/csv',(req,res,next)=>{
  let csvController = new CsvController(req,res,next);
  csvController.index();
})

/*router.get('/create',(req,res,next)=>{
  let valorOb = new Valor({
    isin: "09090900" ,
    nombre: "prueba",
    divisa: "euros",
    familia: "laquesea",
    cuerpo:[{
      fecha:"2018/05/03",
      valor:123.2
    }]
  });

  valorOb.save(err=>{
    if(err) console.error(err);
    console.log("Almacenado");
  })
  res.json(valorOb);

})


router.get('/recuperar/:isin',(req,res, next)=>{
  Valor.find({isin: req.params.isin},(err, valor)=>{
    if(err) console.error(err);
    res.json(valor);
    console.log(valor[0].cuerpo);
  })
})

router.get('/recuperarmas',(req, res, next)=>{
Valor.find({'cuerpo.fecha':'2018/05/03'},(err, data)=>{
  console.log(JSON.stringify(data));
});
Valor.aggregate([
    {$match: {"isin": 09090900}},
	{$addFields : {"cuerpo":{$filter:{ // We override the existing field!
		input: "$cuerpo",
		as: "cuerpo",
		cond: {$eq: ["$$cuerpo.fecha", '2018/05/03']}
	}}}}],(erro, data)=>{

    console.log(data);
  });


});*/


module.exports = router;
