const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory.controller');

// Inventory
router.get('/inventory/', inventoryController.getInventory);
router.post('/inventory/', inventoryController.createInventory);
router.get('/inventory/dashboard/', inventoryController.getInventoryDashboard);
router.get('/inventory-dashboard/', inventoryController.getInventoryDashboard);
router.get('/inventory/inventory-status/', inventoryController.getInventoryStatus);
router.get('/inventory-status/', inventoryController.getInventoryStatus);
router.get('/inventory/:id/', inventoryController.getInventoryById);
router.patch('/inventory/:id/', inventoryController.updateInventory);
router.delete('/inventory/:id/', inventoryController.deleteInventory);

// Inventory Types
router.get('/inventory-types/', inventoryController.getInventoryTypes);
router.post('/inventory-types/', inventoryController.createInventoryType);

// Inventory Tracking
router.get('/inventory-tracking/', inventoryController.getInventoryTracking);
router.post('/inventory-tracking/', inventoryController.createInventoryTracking);
router.patch('/inventory-tracking/:id/', inventoryController.updateInventoryTracking);
router.delete('/inventory-tracking/:id/', inventoryController.deleteInventoryTracking);

// Stationery
router.get('/stationary/', inventoryController.getStationery);
router.post('/stationary/', inventoryController.createStationery);

// Stationery Types
router.get('/stationary-types/', inventoryController.getStationeryTypes);
router.post('/stationary-types/', inventoryController.createStationeryType);
router.get('/stationary-types/:id/', inventoryController.getStationeryTypeById);
router.patch('/stationary-types/:id/', inventoryController.updateStationeryType);
router.delete('/stationary-types/:id/', inventoryController.deleteStationeryType);

// Stationery Fees
router.get('/stationary-fee/', inventoryController.getStationeryFees);
router.get('/stationary-fees/', inventoryController.getStationeryFees);
router.post('/stationary-fee/', inventoryController.createStationeryFee);
router.get('/stationary-fee/:id/', inventoryController.getStationeryFeeById);
router.patch('/stationary-fee/:id/', inventoryController.updateStationeryFee);
router.delete('/stationary-fee/:id/', inventoryController.deleteStationeryFee);

module.exports = router;
