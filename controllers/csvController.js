const Controller = require('./controller');
const CheckDataService = require('../service/checkDataService');

class CsvController extends Controller
{


  constructor(req,res,next){

    super(req, res ,next)
    console.log(req.file.path)
  }



  index(){

    var lines=req.file.split('\n');
  
    var result = [];
  
    var headers=lines[0].split(';');
    lines.splice(0, 1);
    lines.forEach(function(line) {
      var obj = {};
      var currentline = line.split(';');
      headers.forEach(function(header, i) {
        obj[header] = currentline[i];
      });
      result.push(obj);
    });

    console.log(result);



/*    let objectISIN={
      "isin":"0001",
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
    let checkDataService = new CheckDataService(objectISIN);
    checkDataService.checkData()
    .then(data=>{
        this.res.json(data);
    })

  }*/

}

}

module.exports = CsvController;
