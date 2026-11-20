/**
 * Academic Management Controller
 */
const {
  mockAcademicYears,
  mockBranches,
  mockDepartments,
  mockStandards,
  mockSections,
  mockSubjects,
  mockClasses,
  mockPeriods,
  mockTeacherTimetable,
  mockRooms,
} = require('../data/academic.data');
const { formatPaginatedResponse } = require('../utils/response');

// In-memory state
let academicYears = [...mockAcademicYears];
let branches = [...mockBranches];
let departments = [...mockDepartments];
let standards = [...mockStandards];
let sections = [...mockSections];
let subjects = [...mockSubjects];
let classes = [...mockClasses];
let periods = [...mockPeriods];
let rooms = [...mockRooms];

// Academic Years
function getAcademicYears(req, res) {
  return res.json(formatPaginatedResponse(req, academicYears));
}

function createAcademicYear(req, res) {
  const newItem = {
    id: academicYears.length + 1,
    name: req.body.name || 'New Academic Year',
    start_date: req.body.start_date || '2027-04-01',
    end_date: req.body.end_date || '2028-03-31',
    is_active: req.body.is_active !== undefined ? req.body.is_active : true,
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
  };
  academicYears.push(newItem);
  return res.status(201).json(newItem);
}

function getAcademicYearById(req, res) {
  const item = academicYears.find((y) => y.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateAcademicYear(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = academicYears.findIndex((y) => y.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  academicYears[index] = { ...academicYears[index], ...req.body, modified: new Date().toISOString() };
  return res.json(academicYears[index]);
}

function deleteAcademicYear(req, res) {
  const id = parseInt(req.params.id, 10);
  academicYears = academicYears.filter((y) => y.id !== id);
  return res.status(204).send();
}

// Branches
function getBranches(req, res) {
  let filtered = [...branches];
  if (req.query.is_active !== undefined) {
    const isActive = req.query.is_active === 'true' || req.query.is_active === true;
    filtered = filtered.filter((b) => b.is_active === isActive);
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

function createBranch(req, res) {
  const newItem = {
    id: branches.length + 1,
    name: req.body.name || 'New Campus Branch',
    address: req.body.address || 'Address pending',
    phone: req.body.phone || '+91 98765 00000',
    email: req.body.email || 'branch@visionariesai.com',
    is_active: true,
    location: req.body.location || { latitude: 12.9716, longitude: 77.5946 },
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
  };
  branches.push(newItem);
  return res.status(201).json(newItem);
}

function getBranchById(req, res) {
  const item = branches.find((b) => b.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateBranch(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = branches.findIndex((b) => b.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  branches[index] = { ...branches[index], ...req.body, modified: new Date().toISOString() };
  return res.json(branches[index]);
}

function deleteBranch(req, res) {
  const id = parseInt(req.params.id, 10);
  branches = branches.filter((b) => b.id !== id);
  return res.status(204).send();
}

// Departments
function getDepartments(req, res) {
  let filtered = [...departments];
  if (req.query.branch) {
    const branchId = parseInt(req.query.branch, 10);
    filtered = filtered.filter((d) => d.branch?.id === branchId);
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

function createDepartment(req, res) {
  const newItem = {
    id: departments.length + 1,
    name: req.body.name,
    department_type: req.body.department_type || 'Teaching',
    is_active: true,
    staff_count: 0,
    head_of_the_department: req.body.head_of_the_department,
    branch: req.body.branch || branches[0],
    description: req.body.description || '',
    access_to_all_users: true,
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
  };
  departments.push(newItem);
  return res.status(201).json(newItem);
}

function getDepartmentById(req, res) {
  const item = departments.find((d) => d.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateDepartment(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = departments.findIndex((d) => d.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  departments[index] = { ...departments[index], ...req.body, modified: new Date().toISOString() };
  return res.json(departments[index]);
}

function deleteDepartment(req, res) {
  const id = parseInt(req.params.id, 10);
  departments = departments.filter((d) => d.id !== id);
  return res.status(204).send();
}

function addTeachersToDepartment(req, res) {
  return res.json({ detail: 'Teachers added successfully.' });
}

// Standards (Grades)
function getStandards(req, res) {
  let filtered = [...standards];
  if (req.query.branch) {
    const branchId = parseInt(req.query.branch, 10);
    filtered = filtered.filter((s) => s.branch === branchId);
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

function createStandard(req, res) {
  const newItem = {
    id: standards.length + 1,
    name: req.body.name,
    branch: req.body.branch || 1,
    academic_year: req.body.academic_year || 1,
    is_active: true,
  };
  standards.push(newItem);
  return res.status(201).json(newItem);
}

function getStandardById(req, res) {
  const item = standards.find((s) => s.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateStandard(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = standards.findIndex((s) => s.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  standards[index] = { ...standards[index], ...req.body };
  return res.json(standards[index]);
}

function deleteStandard(req, res) {
  const id = parseInt(req.params.id, 10);
  standards = standards.filter((s) => s.id !== id);
  return res.status(204).send();
}

// Sections
function getSections(req, res) {
  let filtered = [...sections];
  if (req.query.standard) {
    const stdId = parseInt(req.query.standard, 10);
    filtered = filtered.filter((s) => s.standard === stdId);
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

// Subjects
function getSubjects(req, res) {
  return res.json(formatPaginatedResponse(req, subjects));
}

// Classes
function getClasses(req, res) {
  return res.json(formatPaginatedResponse(req, classes));
}

// Rooms
function getRooms(req, res) {
  return res.json(formatPaginatedResponse(req, rooms));
}

// Periods
function getPeriods(req, res) {
  return res.json(formatPaginatedResponse(req, periods));
}

function createPeriod(req, res) {
  const newItem = {
    id: periods.length + 1,
    name: req.body.name,
    period_number: req.body.period_number || periods.length + 1,
    start_time: req.body.start_time || '09:00:00',
    end_time: req.body.end_time || '09:45:00',
    is_break: !!req.body.is_break,
  };
  periods.push(newItem);
  return res.status(201).json(newItem);
}

function updatePeriod(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = periods.findIndex((p) => p.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  periods[index] = { ...periods[index], ...req.body };
  return res.json(periods[index]);
}

function deletePeriod(req, res) {
  const id = parseInt(req.params.id, 10);
  periods = periods.filter((p) => p.id !== id);
  return res.status(204).send();
}

// Timetables & Availability
function getTeacherTimetable(req, res) {
  return res.json(mockTeacherTimetable);
}

function getAvailablePeriods(req, res) {
  return res.json({
    available_periods: periods.filter((p) => !p.is_break),
  });
}

function getAvailableTeachers(req, res) {
  return res.json({
    available_teachers: [
      { id: 2, name: 'Sarah Johnson', department: 'Mathematics' },
      { id: 3, name: 'Dr. Robert Chen', department: 'Mathematics' },
      { id: 4, name: 'Dr. Evelyn Reed', department: 'Science & Physics' },
      { id: 5, name: 'Alan Turing', department: 'Computer Science & AI' },
    ],
  });
}

module.exports = {
  getAcademicYears,
  createAcademicYear,
  getAcademicYearById,
  updateAcademicYear,
  deleteAcademicYear,
  getBranches,
  createBranch,
  getBranchById,
  updateBranch,
  deleteBranch,
  getDepartments,
  createDepartment,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  addTeachersToDepartment,
  getStandards,
  createStandard,
  getStandardById,
  updateStandard,
  deleteStandard,
  getSections,
  getSubjects,
  getClasses,
  getRooms,
  getPeriods,
  createPeriod,
  updatePeriod,
  deletePeriod,
  getTeacherTimetable,
  getAvailablePeriods,
  getAvailableTeachers,
};
