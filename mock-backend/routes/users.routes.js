const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

// Users
router.get('/users/', usersController.getUsers);
router.post('/users/', usersController.createUser);
router.get('/users/get-all-users/', usersController.getAllUsers);
router.get('/all-users/', usersController.getAllUsers);
router.get('/users/get-all-users-expect-students/', usersController.getAllUsersExceptStudents);
router.get('/all-users-except-students/', usersController.getAllUsersExceptStudents);
router.get('/users/:id/', usersController.getUserById);
router.put('/users/:id/', usersController.updateUser);
router.patch('/users/:id/', usersController.updateUser);
router.delete('/users/:id/', usersController.deleteUser);

// Groups
router.get('/groups/', usersController.getGroups);
router.post('/groups/', usersController.createGroup);
router.get('/groups/:id/', usersController.getGroupById);

// Designations
router.get('/designations/', usersController.getDesignations);
router.post('/designations/', usersController.createDesignation);

// Student Details
router.get('/student-details/:id/', usersController.getStudentDetails);
router.patch('/student-details/:id/', usersController.updateStudentDetails);

module.exports = router;
