// - import express -
var express = require('express');
// - import body-parser -
var bodyParser = require('body-parser');
// - create Router constructor using express -
router = express.Router();

// - candies "database" -
var candies = [
{"id": 1, "name": "jolly rancher", "color": "green"},	
{"id": 2, "name": "pez", "color": "pink"},
{"id": 3, "name": "gummy bear", "color": "red"},
{"id": 4, "name": "warhead", "color": "blue"},
{"id": 5, "name": "sour patch kid", "color": "orange"}
];

// === INDEX ===
router.get('/', function(req, res) {
	console.log("This returns an INDEX, all of candies!");
	// - return candies array -
	res.json(candies);
});

// === SHOW === 
router.get('/:id', function(req, res) {
	console.log("This SHOWs a single candy based on the id!");
	// - Return element where id is equal to request paramater id -
	let myCandy = candies.filter(function(element) {
		return element.id == req.params.id;
	});
	// - return first sub-index of myCandy array -
	res.json(myCandy[0]);
});

// === CREATE ===
router.post('/', function(req, res) {
	console.log("This CREATEs a new candy!");
	// - push request body to candies array -
	candies.push(req.body);
	// - return candy saved message -
	res.json("Candy Saved!");
});

// === UPDATE ===
router.put('/:id', function(req, res) {
	console.log("This UPDATEs a single candy based on the id!");
	let myCandy = candies.filter(function(element) {
		return element.id == req.params.id;
	});
	// - declare index variable as first index of myCandy array -
	let index = candies.indexOf(myCandy[0]);
	// - set id property to request parameters id -
	candies[index].id = req.params.id;
	// - set name property to request body name -
	candies[index].name = req.body.name;
	// - set color property to request body color -
	candies[index].color = req.body.color;
	res.json("Candy Updated!");
});

// === DESTROY ===
router.delete('/:id', function(req, res) {
	console.log("This DESTROYs a single candy based on the id!");
	let myCandy = candies.filter(function(element) {
		return element.id == req.params.id;
	});
	let index = candies.indexOf(myCandy[0]);
	// - remove index of candies array -
	candies.splice(index, 1);
	res.json("Candy Deleted!");
});

// - Export router -
module.exports = router;