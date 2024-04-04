// Import necessary modules
const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

// Create an instance of the Express router
const router = Router();

// Define routes
router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateToDo);
router.post('/delete', deleteToDo);

// Export the router for use in other files
module.exports = router;
