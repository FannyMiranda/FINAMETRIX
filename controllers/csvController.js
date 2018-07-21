const Controller = require('./controller');
const CheckDataService = require('../service/checkDataService');

class CsvController extends Controller
{


  constructor(req,res,next){

    super(req, res ,next)
  }

  index(){
    let objectISDN={
      "isdn":"0001",
      "cabecera":
      {
        "nombre":"Valor 1",
        "moneda": "Euro"
      },
      "lineas":
      [
        {
          "fecha":"20181001",
          "importe":100
        },
        {
          "fecha":"20181002",
          "importe":120
        },
        {
          "fecha":"11/10/2018",
          "importe":56
        }
      ]
    }
    let checkDataService = new CheckDataService(objectISDN);
    checkDataService.checkData()
    .then(data=>{
        this.res.json(data);
    })

  }

}

module.exports = CsvController;
