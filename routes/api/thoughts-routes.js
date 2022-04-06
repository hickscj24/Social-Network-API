const router = require('express').Router();
const thoughtController = require('../../controllers/thought-controller')
const { Thought } = require('../../models');


// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
   thoughtController.getAllThoughts(req, res)
  
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  
  
  thoughtController.getThoughtById(req, res)

});

router.post('/', (req, res) => {
  thoughtController.createThought(req, res)
   
  // create a new category

});

router.put('/:id', (req, res) => {
thoughtController.updateThought(req, res)
});

router.delete('/:id', (req, res) => {
 thoughtController.deleteThought(req, res)
  
});

module.exports = router;

