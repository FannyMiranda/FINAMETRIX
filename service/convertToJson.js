//var csv is the CSV contents with headers


function csvJSON(csv){

    var lines=csv.split('\n');
  
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
  
    return result; //JavaScript object
    return JSON.stringify(result); JSON
  }
  
 
  //delimitado por punto y coma 

  function CSVToArray( strData, strDelimiter ){

      strDelimiter = (strDelimiter || ";");
  
      // Creando expresiones regulares 
      var objPattern = new RegExp(
          (
              // Delimiters.
              "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
  
              // Quoted fields.
              "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
  
              // Standard fields.
              "([^\"\\" + strDelimiter + "\\r\\n]*))"
          ),
          "gi"
          );
  

      var arrData = [];
      var headers = [];
      var headersFound = false;
      var headerIndex = 0;
  

      var arrMatches = null;
  

      while (arrMatches = objPattern.exec( strData )){
  
          // Get the delimiter that was found.
          var strMatchedDelimiter = arrMatches[ 1 ];
  

          if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter){
  
   
              arrData.push( {} );
              headersFound = true;
              headerIndex = 0;
          }
  
          var strMatchedValue;

          // capturando (quoted or unquoted).
          if (arrMatches[ 2 ]){

              strMatchedValue = arrMatches[ 2 ].replace(new RegExp( "\"\"", "g" ),"\"");
  
          } else {
  
              // We found a non-quoted value.
              strMatchedValue = arrMatches[ 3 ];
  
          }
  
  
          // Now that we have our value string, let's add
          // it to the data array.
          if (!headersFound) {
            headers.push(strMatchedValue);
          } else {
            arrData[arrData.length -1][headers[headerIndex]] = strMatchedValue;
            headerIndex ++;
          }
      }
  
      // Return the parsed data.
      return( arrData );
  }
  
  function csvFileToJSON(file) {
    if (!window.FileReader || !window.File) {
      return Promise.reject('Does not support File API');
    }
    if (!(file instanceof File)) {
      return Promise.reject('Not a file');
    }
  
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();
  
      reader.onerror = function(err) {
        reject(err);
      };
  
      // Closure to capture the file information.
      reader.onload = function() {
        var text = reader.result;
        resolve(CSVToArray(text));
      };
  
      // Read in the image file as a data URL.
      reader.readAsText(file);
    });
  }