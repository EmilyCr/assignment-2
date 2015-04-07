//list dependancies
var express = require('express');
var router = express.Router();

//add db and dependanceis
//var mongoose = require('mongoose');
//var Photographer = require('../models/photographer');

// interpret Get /photographers - show all photographers
router.get('/photographers', function (req, res, next){
    //get all photographers
    Photographer.find(function (err, photographers) {
        //if/else either show view or show an error
        if (err) {
            res.render('error', { error: err});   
        }
        else{
            res.render('photographers', { photographers: photographers });
            console.log(photographers);
        }
    });
});

//GET /photographers/add - add form
router.get('/photographers.add', function(req, res, next) {
    res.render('add'); 
});

//POST /photographers/add - save
router.post('photgraphers/add', function (req, res, next) {
    //insert a new photographer
    Photographer.create({
        photographer: req.body.photographer,
        Logo: req.body.logo,
        type: req.body.type,
        location: req.body.location,
        price: req.body.price,
        rating: req.body.rating
    }, function (err, products) {
        if (err) {
            console.log(err);
            res.render('error', { error: err }) ;
        }
        else{
            console.log('Photographer saved ' + Photographer);
            res.render('added', { photographer: Photographer.name });
        }
    });
});

//API GET photog handler
router.get('api/photographers', function (req,res, next) {
    Photographer.find(function(err, photographers) {
        if (err) {
            res.send(err);   
        }
        else{
            res.send(photographers)
        }
    });
});


module.exports = router;