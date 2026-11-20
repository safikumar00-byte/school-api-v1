/**
 * Leave Management & Holiday Calendar Controller
 */
const {
  mockLeaveRequests,
  mockLeaveQuotas,
  mockHolidays,
} = require('../data/leave.data');
const { formatPaginatedResponse } = require('../utils/response');

let leaveRequests = [...mockLeaveRequests];
let leaveQuotas = [...mockLeaveQuotas];
let holidays = [...mockHolidays];

// Leave Requests
function getLeaveRequests(req, res) {
  return res.json(formatPaginatedResponse(req, leaveRequests));
}

function createLeaveRequest(req, res) {
  const newItem = {
    id: leaveRequests.length + 1,
    employee: {
      id: 2,
      first_name: req.body.first_name || 'Sarah',
      email: req.body.email || 'sarah.j@visionariesai.com',
      department: { id: 1, name: 'Mathematics' },
    },
    user: {
      first_name: req.body.first_name || 'Sarah',
      email: req.body.email || 'sarah.j@visionariesai.com',
    },
    leave_type: req.body.leave_type || 'Casual Leave',
    created: new Date().toISOString(),
    applied_date: new Date().toISOString().split('T')[0],
    from_date: req.body.from_date || '2026-11-25',
    to_date: req.body.to_date || '2026-11-26',
    days_requested: req.body.days_requested || 2,
    reason: req.body.reason || '',
    status: 'pending',
  };
  leaveRequests.unshift(newItem);
  return res.status(201).json(newItem);
}

function updateLeaveRequest(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = leaveRequests.findIndex((r) => r.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  leaveRequests[index] = { ...leaveRequests[index], ...req.body };
  return res.json(leaveRequests[index]);
}

function deleteLeaveRequest(req, res) {
  const id = parseInt(req.params.id, 10);
  leaveRequests = leaveRequests.filter((r) => r.id !== id);
  return res.status(204).send();
}

function approveLeaveRequest(req, res) {
  const id = parseInt(req.params.id, 10);
  let index = leaveRequests.findIndex((r) => r.id === id);
  if (index === -1) {
    if (leaveRequests.length > 0) {
      index = 0;
    } else {
      const mockRecord = {
        id,
        status: req.body.status || 'approved',
        approved_by: { id: 1, name: 'Alexander Hamilton' },
        approved_date: new Date().toISOString(),
      };
      return res.json(mockRecord);
    }
  }
  leaveRequests[index] = {
    ...leaveRequests[index],
    status: req.body.status || 'approved',
    approved_by: { id: 1, name: 'Alexander Hamilton' },
    approved_date: new Date().toISOString(),
  };
  return res.json(leaveRequests[index]);
}

// Leave Quotas
function getLeaveQuotas(req, res) {
  return res.json(formatPaginatedResponse(req, leaveQuotas));
}

function createLeaveQuota(req, res) {
  const newItem = {
    id: leaveQuotas.length + 1,
    ...req.body,
    last_updated: new Date().toISOString(),
  };
  leaveQuotas.push(newItem);
  return res.status(201).json(newItem);
}

function updateLeaveQuota(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = leaveQuotas.findIndex((q) => q.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  leaveQuotas[index] = { ...leaveQuotas[index], ...req.body };
  return res.json(leaveQuotas[index]);
}

function deleteLeaveQuota(req, res) {
  const id = parseInt(req.params.id, 10);
  leaveQuotas = leaveQuotas.filter((q) => q.id !== id);
  return res.status(204).send();
}

function getAnnualLeaveQuotas(req, res) {
  return res.json(formatPaginatedResponse(req, leaveQuotas));
}

function createAnnualLeaveQuota(req, res) {
  return createLeaveQuota(req, res);
}

// Holidays
function getHolidays(req, res) {
  return res.json(formatPaginatedResponse(req, holidays));
}

function createHoliday(req, res) {
  const newItem = {
    id: holidays.length + 1,
    name: req.body.name || 'New Holiday',
    date: req.body.date || '2026-12-31',
    type: req.body.type || 'public',
    description: req.body.description || '',
    is_active: true,
    branch: req.body.branch || { id: 1, name: 'Main Campus (Central)' },
  };
  holidays.push(newItem);
  return res.status(201).json(newItem);
}

function updateHoliday(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = holidays.findIndex((h) => h.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  holidays[index] = { ...holidays[index], ...req.body };
  return res.json(holidays[index]);
}

function deleteHoliday(req, res) {
  const id = parseInt(req.params.id, 10);
  holidays = holidays.filter((h) => h.id !== id);
  return res.status(204).send();
}

module.exports = {
  getLeaveRequests,
  createLeaveRequest,
  updateLeaveRequest,
  deleteLeaveRequest,
  approveLeaveRequest,
  getLeaveQuotas,
  createLeaveQuota,
  updateLeaveQuota,
  deleteLeaveQuota,
  getAnnualLeaveQuotas,
  createAnnualLeaveQuota,
  getHolidays,
  createHoliday,
  updateHoliday,
  deleteHoliday,
};
