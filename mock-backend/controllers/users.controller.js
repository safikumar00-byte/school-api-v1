/**
 * Users, Groups, Designations & Profiles Controller
 */
const {
  mockGroups,
  mockDesignations,
  mockUsersList,
  mockStudentDetails,
} = require('../data/users.data');
const { formatPaginatedResponse } = require('../utils/response');

let users = [...mockUsersList];
let groups = [...mockGroups];
let designations = [...mockDesignations];
let studentDetails = { ...mockStudentDetails };

// Users
function getUsers(req, res) {
  let filtered = [...users];
  if (req.query.search) {
    const q = req.query.search.toLowerCase();
    filtered = filtered.filter(
      (u) =>
        u.first_name.toLowerCase().includes(q) ||
        u.last_name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    );
  }
  if (req.query.group) {
    const groupId = parseInt(req.query.group, 10);
    filtered = filtered.filter((u) => u.group?.id === groupId);
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

function getAllUsers(req, res) {
  return res.json(formatPaginatedResponse(req, users));
}

function getAllUsersExceptStudents(req, res) {
  const nonStudents = users.filter((u) => u.group?.name !== 'Student');
  return res.json(formatPaginatedResponse(req, nonStudents));
}

function getUserById(req, res) {
  const item = users.find((u) => u.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function createUser(req, res) {
  const newItem = {
    id: users.length + 1,
    first_name: req.body.first_name || 'New',
    last_name: req.body.last_name || 'User',
    email: req.body.email || `user${users.length + 1}@visionariesai.com`,
    phone: req.body.phone || '+91 98765 00000',
    is_active: true,
    is_staff: !!req.body.is_staff,
    is_superuser: false,
    group: req.body.group || groups[1],
    branch: req.body.branch || { id: 1, name: 'Main Campus (Central)' },
    created: new Date().toISOString(),
    date_joined: new Date().toISOString(),
  };
  users.push(newItem);
  return res.status(201).json(newItem);
}

function updateUser(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  users[index] = { ...users[index], ...req.body };
  return res.json(users[index]);
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id, 10);
  users = users.filter((u) => u.id !== id);
  return res.status(204).send();
}

// Groups
function getGroups(req, res) {
  return res.json(formatPaginatedResponse(req, groups));
}

function getGroupById(req, res) {
  const item = groups.find((g) => g.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function createGroup(req, res) {
  const newItem = {
    id: groups.length + 1,
    name: req.body.name || 'New Group',
    description: req.body.description || '',
  };
  groups.push(newItem);
  return res.status(201).json(newItem);
}

// Designations
function getDesignations(req, res) {
  return res.json(formatPaginatedResponse(req, designations));
}

function createDesignation(req, res) {
  const newItem = {
    id: designations.length + 1,
    name: req.body.name,
    code: req.body.code || 'DESIG',
    is_active: true,
  };
  designations.push(newItem);
  return res.status(201).json(newItem);
}

// Student Details
function getStudentDetails(req, res) {
  const id = parseInt(req.params.id, 10);
  const details = studentDetails[id] || studentDetails[1];
  return res.json(details);
}

function updateStudentDetails(req, res) {
  const id = parseInt(req.params.id, 10);
  studentDetails[id] = { ...(studentDetails[id] || studentDetails[1]), ...req.body };
  return res.json(studentDetails[id]);
}

module.exports = {
  getUsers,
  getAllUsers,
  getAllUsersExceptStudents,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getGroups,
  getGroupById,
  createGroup,
  getDesignations,
  createDesignation,
  getStudentDetails,
  updateStudentDetails,
};
