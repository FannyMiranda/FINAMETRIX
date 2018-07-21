var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
{
                res.render('home',{
                    title: 'Home',
                    layout: '../views/index.hbs',
                    destinos: destinos
                });
            }
        })
        
    

module.exports = router;