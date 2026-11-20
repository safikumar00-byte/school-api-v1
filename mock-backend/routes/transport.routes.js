const express = require('express');
const router = express.Router();
const transportController = require('../controllers/transport.controller');

// Vehicles
router.get('/transport-vehicles/', transportController.getVehicles);
router.get('/vehicles/', transportController.getVehicles);
router.post('/transport-vehicles/', transportController.createVehicle);

// Trips
router.get('/transport-trips/', transportController.getTrips);
router.get('/trips/', transportController.getTrips);
router.post('/transport-trips/', transportController.createTrip);

// Drivers
router.get('/transport-drivers/', transportController.getDrivers);
router.get('/drivers/', transportController.getDrivers);

module.exports = router;
