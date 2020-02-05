const express = require("express");
const router = express.Router();
const fs = require('fs')


// let carsData = require('../../cars.json')
let carsData =  JSON.parse(fs.readFileSync('cars.json', 'utf-8'))



//@routes GET api/cars
//@desc    Get Cars Route
//@access public

router.get(
  "",
  (req, res) => {
    res.json(
      carsData
    );
  }
);

module.exports = router;
