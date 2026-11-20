const express = require('express');
const router = express.Router();
const hostelController = require('../controllers/hostel.controller');

// Hostel Rooms & Beds
router.get('/hostel-rooms/', hostelController.getHostelRooms);
router.get('/hostel-beds/', hostelController.getHostelBeds);
router.post('/hostel-beds/:bedId/assign_student/', hostelController.assignBed);

// Visitors
router.get('/hostel-visitors/', hostelController.getHostelVisitors);
router.post('/hostel-visitors/', hostelController.createHostelVisitor);
router.post('/hostel-visitors/:visitorId/check_out/', hostelController.checkOutVisitor);

// Meal Plans
router.get('/hostel-mealplans/', hostelController.getHostelMealPlans);
router.get('/hostel-meal-plans/', hostelController.getHostelMealPlans);
router.post('/hostel-mealplans/', hostelController.createMealPlan);
router.patch('/hostel-mealplans/:id/', hostelController.updateMealPlan);

// Products
router.get('/hostel-products/', hostelController.getHostelProducts);
router.post('/hostel-products/', hostelController.createHostelProduct);
router.patch('/hostel-products/:id/', hostelController.updateHostelProduct);

module.exports = router;
