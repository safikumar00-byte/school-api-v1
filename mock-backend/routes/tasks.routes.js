const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks.controller');

// Tasks (supports /api/tasks_create/ and /api/tasks/)
router.get('/tasks_create/', tasksController.getTasks);
router.get('/tasks/', tasksController.getTasks);
router.post('/tasks_create/', tasksController.createTask);
router.post('/tasks/', tasksController.createTask);
router.get('/tasks_create/:id/', tasksController.getTaskById);
router.get('/tasks/:id/', tasksController.getTaskById);
router.patch('/tasks_create/:id/', tasksController.updateTask);
router.patch('/tasks/:id/', tasksController.updateTask);
router.delete('/tasks_create/:id/', tasksController.deleteTask);
router.delete('/tasks/:id/', tasksController.deleteTask);

// Task Submissions
router.get('/task-submissions/', tasksController.getTaskSubmissions);
router.post('/task-submissions/', tasksController.createTaskSubmission);
router.patch('/task-submissions/:id/', tasksController.updateTaskSubmission);
router.delete('/task-submissions/:id/', tasksController.deleteTaskSubmission);

module.exports = router;
