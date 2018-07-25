const fs=require('fs');
const csv=require('fast-csv');

const stream = fs.createReadStream(req.file.path);

const streamCsv = csv({
    
     headers: ['Tipo de Registro', 'ISIN', 'fecha', 'Precio', 'cinco'],
    delimiter: ';'

}).on('data',data=>{ 
  // aqui va el push al array
  arrayObj.push([a,b,c,d,e])
  result.push(obj)
  
this.res.json(data)
})
  .on('end', () => console.log('Proceso Terminado'))

  


stream.pipe(streamCsv)