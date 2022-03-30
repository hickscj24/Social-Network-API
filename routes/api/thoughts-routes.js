const router = require('express').Router();
const Thoughtscontroller = require('../../controllers/thought-controller')
const { Thought } = require('../../models');


// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Thoughtscontroller.getAllThoughts(req, res)

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  
  
  Thoughtscontroller.getThoughtById(req, res)

});

router.post('/', (req, res) => {
  Thoughtscontroller.createThought(req, res)
   
  // create a new category

});

router.put('/:id', (req, res) => {
Thoughtscontroller.updateThought(req, res)
});

router.delete('/:id', (req, res) => {
 Thoughtscontroller.deleteThought(req, res)
  
});

module.exports = router;

