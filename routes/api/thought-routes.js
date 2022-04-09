const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// set up GET all at /api/thoughts
router
  .route('/')
  .get(getAllThoughts);

// set up POST at /api/thoughts/<userId>
router
  .route('/:userId')
  .post(createThought);

// set up GET one, PUT and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// set up POST reaction at /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// set up DELETE reaction at /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);


module.exports = router;