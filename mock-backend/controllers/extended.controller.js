/**
 * Extended Frontend Screens Controller (Wallet, Food Court, Sports, Library, etc.)
 */
const {
  mockWallet,
  mockFoodCourt,
  mockSports,
  mockLibrary,
  mockTimesheet,
  mockInvoices,
  mockExpenseClaims,
  mockRewards,
} = require('../data/extended.data');
const { formatPaginatedResponse } = require('../utils/response');

// Wallet
function getWalletBalance(req, res) {
  return res.json(mockWallet);
}

function getWalletTransactions(req, res) {
  return res.json(formatPaginatedResponse(req, mockWallet.recent_transactions));
}

function topupWallet(req, res) {
  const amount = parseFloat(req.body.amount) || 1000;
  mockWallet.balance += amount;
  const newTxn = {
    id: `TXN${Date.now()}`,
    description: 'Wallet Top-up (Online Payment)',
    amount,
    date: new Date().toISOString(),
    type: 'credit',
    category: 'Top-up',
  };
  mockWallet.recent_transactions.unshift(newTxn);
  return res.status(201).json({ detail: 'Wallet topped up successfully.', balance: mockWallet.balance, transaction: newTxn });
}

// Food Court
function getFoodCourtMenu(req, res) {
  return res.json({
    categories: mockFoodCourt.categories,
    menu: mockFoodCourt.menu,
  });
}

function getFoodCourtOrders(req, res) {
  return res.json(formatPaginatedResponse(req, mockFoodCourt.orders));
}

function createFoodCourtOrder(req, res) {
  const order = {
    id: `ORD-${Date.now()}`,
    items: req.body.items || [],
    total: req.body.total || 100,
    status: 'Preparing',
    date: new Date().toISOString(),
  };
  mockFoodCourt.orders.unshift(order);
  return res.status(201).json(order);
}

// Sports
function getSportsTeams(req, res) {
  return res.json(mockSports.teams);
}

function getSportsMatches(req, res) {
  return res.json(mockSports.matches);
}

function getSportsRecommendations(req, res) {
  return res.json(mockSports.recommendations);
}

// Library
function getLibraryResources(req, res) {
  return res.json(formatPaginatedResponse(req, mockLibrary.resources));
}

function getECourses(req, res) {
  return res.json(formatPaginatedResponse(req, mockLibrary.ecourses));
}

// Timesheet
function getTimesheet(req, res) {
  return res.json(formatPaginatedResponse(req, mockTimesheet));
}

function createTimesheetEntry(req, res) {
  const newItem = {
    id: mockTimesheet.length + 1,
    ...req.body,
    status: 'Submitted',
  };
  mockTimesheet.unshift(newItem);
  return res.status(201).json(newItem);
}

// Invoices
function getInvoices(req, res) {
  return res.json(formatPaginatedResponse(req, mockInvoices));
}

// Expense Claims
function getExpenseClaims(req, res) {
  return res.json(formatPaginatedResponse(req, mockExpenseClaims));
}

function createExpenseClaim(req, res) {
  const newItem = {
    id: mockExpenseClaims.length + 1,
    ...req.body,
    status: 'Pending Review',
  };
  mockExpenseClaims.unshift(newItem);
  return res.status(201).json(newItem);
}

// Rewards
function getRewards(req, res) {
  return res.json(mockRewards);
}

function getRewardsLeaderboard(req, res) {
  return res.json(mockRewards.leaderboard);
}

// Performance
function getEmployeePerformance(req, res) {
  return res.json({
    rating: 4.8,
    metrics: [
      { name: 'Syllabus Completion', score: '98%', status: 'Exceeds' },
      { name: 'Student Feedback Rating', score: '4.9 / 5', status: 'Exceptional' },
      { name: 'Punctuality & Attendance', score: '97%', status: 'Exceeds' },
      { name: 'Assignment Turnaround', score: '2.1 Days', status: 'Target Met' },
    ],
    goals: [
      { title: 'Publish AI in Secondary Education paper', progress: 70 },
      { title: 'Mentor Junior Math Olympiad team', progress: 90 },
    ],
  });
}

function getTaskPerformance(req, res) {
  return res.json({
    completion_rate: 94.2,
    on_time_submission_rate: 91.5,
    total_assigned: 48,
    completed: 45,
    pending: 3,
  });
}

// Explore / Search
function searchExplore(req, res) {
  return res.json({
    trending: [
      { title: 'Inter-School Sports Meet Registration', category: 'Events', route: '/(tabs)/events' },
      { title: 'Mid-Term Exam Datesheet Released', category: 'Exams', route: '/exams/student-exam-timetable' },
      { title: 'Python for Beginners E-Course', category: 'Library', route: '/library/ecourse' },
    ],
    recommendations: [
      { title: 'View Attendance Trends', route: '/attendance-dashboard' },
      { title: 'Check Fee Statement', route: '/finance/student-fee-details' },
      { title: 'Campus Weather', route: '/weather' },
    ],
  });
}

module.exports = {
  getWalletBalance,
  getWalletTransactions,
  topupWallet,
  getFoodCourtMenu,
  getFoodCourtOrders,
  createFoodCourtOrder,
  getSportsTeams,
  getSportsMatches,
  getSportsRecommendations,
  getLibraryResources,
  getECourses,
  getTimesheet,
  createTimesheetEntry,
  getInvoices,
  getExpenseClaims,
  createExpenseClaim,
  getRewards,
  getRewardsLeaderboard,
  getEmployeePerformance,
  getTaskPerformance,
  searchExplore,
};
