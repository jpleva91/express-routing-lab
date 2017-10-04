var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
{"id": 1, "name": "jolly rancher", "color": "green"},	
{"id": 2, "name": "pez", "color": "pink"},
{"id": 3, "name": "gummy bear", "color": "red"},
{"id": 4, "name": "warhead", "color": "blue"},
{"id": 5, "name": "sour patch kid", "color": "orange"}
];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req, res) {
	console.log("This returns an INDEX, all of candies!");	// What would go here? 
	res.json(candies);	// Hint: we want all candies in JSON format
});

router.get('/:id', function(req, res) {
	console.log("This SHOWs a single candy based on the id!");
	let myCandy = candies.filter(function(element) {
		return element.id == req.params.id;
	});
	res.json(myCandy[0]);
});

router.post('/', function(req, res) {
	console.log("This CREATEs a new candy!");
	candies.push(req.body);
	res.json("Candy Saved!");
});

router.put('/:id', function(req, res) {
	console.log("This UPDATEs a single candy based on the id!");
	let myCandy = candies.filter(function(element) {
		return element.id == req.params.id;
	});
	let index = candies.indexOf(myCandy[0]);
	candies[index].id = req.params.id;
	candies[index].name = req.body.name;
	candies[index].color = req.body.color;
	res.json("Candy Updated!");
});

router.delete('/:id', function(req, res) {
	console.log("This DESTROYs a single candy based on the id!");
	let myCandy = candies.filter(function(element) {
		return element.id == req.params.id;
	});

	let index = candies.indexOf(myCandy[0]);
	candies.splice(index, 1);

	res.json("Candy Deleted!");
});

// Fill out the rest of the routes here

module.exports = router;