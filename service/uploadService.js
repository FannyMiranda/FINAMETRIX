const Multer = require('multer');

class uploadService{
         constructor(){
          this.storage = Multer.diskStorage({
               destination: (req, file, cb) => {
                   cb(null, "public/archivos");
               },
               filename: (req, file, cb) => {
                   console.log(file.originalname);
                   cb(null, file.originalname);
               }
           });
         }

       up(){
             let storage= this.storage;
             let upload = Multer({storage});
             return upload;
       }

};

module.exports = uploadService;