/**
 * Inventory & Stationery Controller
 */
const {
  mockInventoryTypes,
  mockInventory,
  mockInventoryDashboard,
  mockInventoryTracking,
  mockStationery,
  mockStationeryFees,
} = require('../data/inventory.data');
const { formatPaginatedResponse } = require('../utils/response');

let inventory = [...mockInventory];
let inventoryTypes = [...mockInventoryTypes];
let inventoryTracking = [...mockInventoryTracking];
let stationery = [...mockStationery];
let stationeryFees = [...mockStationeryFees];
let stationeryTypes = [
  { id: 1, name: 'Notebooks', description: 'Standard notebook', is_active: true },
  { id: 2, name: 'Instruments', description: 'Geometry and art tools', is_active: true },
  { id: 3, name: 'Journals', description: 'Lab manual and records', is_active: true },
];

// Inventory Items
function getInventory(req, res) {
  return res.json(formatPaginatedResponse(req, inventory));
}

function createInventory(req, res) {
  const newItem = {
    id: inventory.length + 1,
    name: req.body.name || 'New Item',
    description: req.body.description || '',
    quantity: parseInt(req.body.quantity, 10) || 1,
    price: parseFloat(req.body.price) || 0,
    status: req.body.status || 'Available',
    is_stationary: !!req.body.is_stationary,
    inventory_type: req.body.inventory_type || inventoryTypes[0],
    inventory_tracking: [],
  };
  inventory.push(newItem);
  return res.status(201).json(newItem);
}

function getInventoryById(req, res) {
  const item = inventory.find((i) => i.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateInventory(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = inventory.findIndex((i) => i.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  inventory[index] = { ...inventory[index], ...req.body };
  return res.json(inventory[index]);
}

function deleteInventory(req, res) {
  const id = parseInt(req.params.id, 10);
  inventory = inventory.filter((i) => i.id !== id);
  return res.status(204).send();
}

function getInventoryDashboard(req, res) {
  return res.json(mockInventoryDashboard);
}

function getInventoryStatus(req, res) {
  return res.json({
    total_assets: inventory.length,
    in_use: 215,
    under_maintenance: 12,
    decommissioned: 3,
  });
}

// Inventory Types
function getInventoryTypes(req, res) {
  return res.json(formatPaginatedResponse(req, inventoryTypes));
}

function createInventoryType(req, res) {
  const newItem = {
    id: inventoryTypes.length + 1,
    name: req.body.name,
    type: req.body.type || 'General',
    branch: req.body.branch || 1,
    academic_year: req.body.academic_year || 1,
    is_active: true,
  };
  inventoryTypes.push(newItem);
  return res.status(201).json(newItem);
}

// Inventory Tracking
function getInventoryTracking(req, res) {
  return res.json(formatPaginatedResponse(req, inventoryTracking));
}

function createInventoryTracking(req, res) {
  const newItem = {
    id: inventoryTracking.length + 1,
    ...req.body,
    date: new Date().toISOString().split('T')[0],
  };
  inventoryTracking.push(newItem);
  return res.status(201).json(newItem);
}

function updateInventoryTracking(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = inventoryTracking.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  inventoryTracking[index] = { ...inventoryTracking[index], ...req.body };
  return res.json(inventoryTracking[index]);
}

function deleteInventoryTracking(req, res) {
  const id = parseInt(req.params.id, 10);
  inventoryTracking = inventoryTracking.filter((t) => t.id !== id);
  return res.status(204).send();
}

// Stationery
function getStationery(req, res) {
  return res.json(formatPaginatedResponse(req, stationery));
}

function createStationery(req, res) {
  const newItem = {
    id: stationery.length + 1,
    name: req.body.name,
    description: req.body.description || '',
    price: req.body.price || 50,
    quantity: req.body.quantity || 100,
    is_active: true,
    branch: req.body.branch || 1,
    academic_year: req.body.academic_year || 1,
  };
  stationery.push(newItem);
  return res.status(201).json(newItem);
}

function getStationeryTypes(req, res) {
  return res.json(formatPaginatedResponse(req, stationeryTypes));
}

function getStationeryTypeById(req, res) {
  const item = stationeryTypes.find((s) => s.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function createStationeryType(req, res) {
  const maxId = stationeryTypes.reduce((max, i) => Math.max(max, i.id || 0), 0);
  const newItem = {
    id: maxId + 1,
    name: req.body.name || 'New Stationery Type',
    description: req.body.description || '',
    is_active: req.body.is_active !== undefined ? req.body.is_active : true,
  };
  stationeryTypes.push(newItem);
  return res.status(201).json(newItem);
}

function updateStationeryType(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = stationeryTypes.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  stationeryTypes[index] = { ...stationeryTypes[index], ...req.body };
  return res.json(stationeryTypes[index]);
}

function deleteStationeryType(req, res) {
  const id = parseInt(req.params.id, 10);
  stationeryTypes = stationeryTypes.filter((s) => s.id !== id);
  return res.status(204).send();
}

// Stationery Fees
function getStationeryFees(req, res) {
  return res.json(formatPaginatedResponse(req, stationeryFees));
}

function getStationeryFeeById(req, res) {
  const item = stationeryFees.find((s) => s.id === parseInt(req.params.id, 10)) || stationeryFees[0];
  return res.json(item);
}

function createStationeryFee(req, res) {
  const newItem = {
    id: stationeryFees.length + 1,
    ...req.body,
  };
  stationeryFees.push(newItem);
  return res.status(201).json(newItem);
}

function updateStationeryFee(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = stationeryFees.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  stationeryFees[index] = { ...stationeryFees[index], ...req.body };
  return res.json(stationeryFees[index]);
}

function deleteStationeryFee(req, res) {
  const id = parseInt(req.params.id, 10);
  stationeryFees = stationeryFees.filter((s) => s.id !== id);
  return res.status(204).send();
}

module.exports = {
  getInventory,
  createInventory,
  getInventoryById,
  updateInventory,
  deleteInventory,
  getInventoryDashboard,
  getInventoryStatus,
  getInventoryTypes,
  createInventoryType,
  getInventoryTracking,
  createInventoryTracking,
  updateInventoryTracking,
  deleteInventoryTracking,
  getStationery,
  createStationery,
  getStationeryTypes,
  getStationeryTypeById,
  createStationeryType,
  updateStationeryType,
  deleteStationeryType,
  getStationeryFees,
  getStationeryFeeById,
  createStationeryFee,
  updateStationeryFee,
  deleteStationeryFee,
};
