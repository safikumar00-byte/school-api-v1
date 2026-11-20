/**
 * Hostel Management Controller
 */
const {
  mockHostelRooms,
  mockHostelBeds,
  mockHostelVisitors,
  mockHostelMealPlans,
  mockHostelProducts,
} = require('../data/hostel.data');
const { formatPaginatedResponse } = require('../utils/response');

let hostelRooms = [...mockHostelRooms];
let hostelBeds = [...mockHostelBeds];
let hostelVisitors = [...mockHostelVisitors];
let hostelMealPlans = [...mockHostelMealPlans];
let hostelProducts = [...mockHostelProducts];

// Hostel Rooms
function getHostelRooms(req, res) {
  return res.json(formatPaginatedResponse(req, hostelRooms));
}

// Hostel Beds
function getHostelBeds(req, res) {
  return res.json(formatPaginatedResponse(req, hostelBeds));
}

function assignBed(req, res) {
  const bedId = parseInt(req.params.bedId, 10);
  const bed = hostelBeds.find((b) => b.id === bedId);
  if (bed) {
    bed.is_occupied = true;
    bed.student = req.body.student || { id: 7, name: 'Assigned Student' };
  }
  return res.json({ detail: 'Bed assigned successfully.', bed });
}

// Hostel Visitors
function getHostelVisitors(req, res) {
  return res.json(formatPaginatedResponse(req, hostelVisitors));
}

function createHostelVisitor(req, res) {
  const newItem = {
    id: hostelVisitors.length + 1,
    visitor_name: req.body.visitor_name || 'Visitor',
    student_name: req.body.student_name || 'Student',
    phone_number: req.body.phone_number || '+91 98765 00000',
    purpose: req.body.purpose || 'Visit',
    visit_date: new Date().toISOString().split('T')[0],
    in_time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    out_time: null,
    room_number: req.body.room_number || 'H-101',
    status: 'Inside Campus',
    id_proof: req.body.id_proof || 'Government ID',
  };
  hostelVisitors.unshift(newItem);
  return res.status(201).json(newItem);
}

function checkOutVisitor(req, res) {
  const visitorId = parseInt(req.params.visitorId, 10);
  const visitor = hostelVisitors.find((v) => v.id === visitorId);
  if (visitor) {
    visitor.status = 'Checked Out';
    visitor.out_time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  return res.json({ detail: 'Visitor checked out successfully.', visitor });
}

// Hostel Meal Plans
function getHostelMealPlans(req, res) {
  return res.json(formatPaginatedResponse(req, hostelMealPlans));
}

function createMealPlan(req, res) {
  const newItem = {
    id: hostelMealPlans.length + 1,
    name: req.body.name,
    meal_type: req.body.meal_type || 'Full Board',
    day_of_week: req.body.day_of_week || 'All Days',
    menu_items: req.body.menu_items || '',
    price: req.body.price || 4000,
    is_active: true,
  };
  hostelMealPlans.push(newItem);
  return res.status(201).json(newItem);
}

function updateMealPlan(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = hostelMealPlans.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  hostelMealPlans[index] = { ...hostelMealPlans[index], ...req.body };
  return res.json(hostelMealPlans[index]);
}

// Hostel Products
function getHostelProducts(req, res) {
  return res.json(formatPaginatedResponse(req, hostelProducts));
}

function createHostelProduct(req, res) {
  const newItem = {
    id: hostelProducts.length + 1,
    name: req.body.name,
    category: req.body.category || 'General',
    quantity: req.body.quantity || 10,
    unit_price: req.body.unit_price || 100,
    minimum_stock: req.body.minimum_stock || 5,
    status: 'In Stock',
  };
  hostelProducts.push(newItem);
  return res.status(201).json(newItem);
}

function updateHostelProduct(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = hostelProducts.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  hostelProducts[index] = { ...hostelProducts[index], ...req.body };
  return res.json(hostelProducts[index]);
}

module.exports = {
  getHostelRooms,
  getHostelBeds,
  assignBed,
  getHostelVisitors,
  createHostelVisitor,
  checkOutVisitor,
  getHostelMealPlans,
  createMealPlan,
  updateMealPlan,
  getHostelProducts,
  createHostelProduct,
  updateHostelProduct,
};
