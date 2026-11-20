/**
 * Finance, Fees, Expenditures & Payroll Controller
 */
const {
  mockFeeTypes,
  mockFees,
  mockFeeDashboardAnalytics,
  mockTotalFeeSummary,
  mockFeeSummary,
  mockFeePayments,
  mockExpenditures,
  mockExpenditureSummary,
  mockSalaryCategories,
  mockSalaryTemplatesGrouped,
} = require('../data/finance.data');
const { formatPaginatedResponse } = require('../utils/response');

let feeTypes = [...mockFeeTypes];
let fees = [...mockFees];
let expenditures = [...mockExpenditures];
let salaryCategories = [...mockSalaryCategories];
let salaryTemplates = [...mockSalaryTemplatesGrouped];

// Fees
function getFees(req, res) {
  return res.json(formatPaginatedResponse(req, fees));
}

function createFee(req, res) {
  const newItem = {
    id: fees.length + 1,
    amount: req.body.amount || 10000,
    due_date: req.body.due_date || '2026-12-31',
    fee_type: req.body.fee_type || { id: 1, name: 'General Fee' },
    standard: req.body.standard || { id: 5, name: 'Grade 10' },
    academic_year: req.body.academic_year || { id: 1, name: '2024-2025' },
    branch: req.body.branch || { id: 1, name: 'Main Campus (Central)' },
  };
  fees.push(newItem);
  return res.status(201).json(newItem);
}

function getFeeById(req, res) {
  const item = fees.find((f) => f.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateFee(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = fees.findIndex((f) => f.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  fees[index] = { ...fees[index], ...req.body };
  return res.json(fees[index]);
}

function deleteFee(req, res) {
  const id = parseInt(req.params.id, 10);
  fees = fees.filter((f) => f.id !== id);
  return res.status(204).send();
}

// Fee Types
function getFeeTypes(req, res) {
  return res.json(formatPaginatedResponse(req, feeTypes));
}

function createFeeType(req, res) {
  const newItem = {
    id: feeTypes.length + 1,
    name: req.body.name || 'New Fee Type',
    description: req.body.description || '',
    is_active: true,
  };
  feeTypes.push(newItem);
  return res.status(201).json(newItem);
}

function getFeeTypeById(req, res) {
  const item = feeTypes.find((f) => f.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateFeeType(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = feeTypes.findIndex((f) => f.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  feeTypes[index] = { ...feeTypes[index], ...req.body };
  return res.json(feeTypes[index]);
}

function deleteFeeType(req, res) {
  const id = parseInt(req.params.id, 10);
  feeTypes = feeTypes.filter((f) => f.id !== id);
  return res.status(204).send();
}

// Fee Analytics & Summaries
function getFeeDashboardAnalytics(req, res) {
  return res.json(mockFeeDashboardAnalytics);
}

function getTotalFeeSummary(req, res) {
  return res.json(formatPaginatedResponse(req, mockTotalFeeSummary));
}

function getFeeSummary(req, res) {
  return res.json(formatPaginatedResponse(req, mockFeeSummary));
}

function getFeePayments(req, res) {
  return res.json(formatPaginatedResponse(req, mockFeePayments));
}

// Expenditures
function getExpenditures(req, res) {
  return res.json(formatPaginatedResponse(req, expenditures));
}

function createExpenditure(req, res) {
  const newItem = {
    id: expenditures.length + 1,
    expence_title: req.body.expence_title || req.body.title || 'General Expense',
    category: req.body.category || 'supplies',
    description: req.body.description || '',
    amount: String(req.body.amount || '0'),
    date: req.body.date || new Date().toISOString().split('T')[0],
    paid_to: req.body.paid_to || 'Vendor',
    payment_mode: req.body.payment_mode || 'cash',
    status: req.body.status || 'paid',
    branch: req.body.branch || 1,
    academic_year: req.body.academic_year || 1,
    created_at: new Date().toISOString(),
  };
  expenditures.unshift(newItem);
  return res.status(201).json(newItem);
}

function getExpenditureById(req, res) {
  const item = expenditures.find((e) => e.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateExpenditure(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = expenditures.findIndex((e) => e.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  expenditures[index] = { ...expenditures[index], ...req.body };
  return res.json(expenditures[index]);
}

function deleteExpenditure(req, res) {
  const id = parseInt(req.params.id, 10);
  expenditures = expenditures.filter((e) => e.id !== id);
  return res.status(204).send();
}

function getExpenditureSummary(req, res) {
  return res.json(mockExpenditureSummary);
}

// Salary Templates & Categories
function getSalaryTemplatesGrouped(req, res) {
  return res.json(salaryTemplates);
}

function createSalaryTemplate(req, res) {
  return res.status(201).json({ detail: 'Salary template created successfully.' });
}

function getSalaryCategories(req, res) {
  return res.json(formatPaginatedResponse(req, salaryCategories));
}

function createSalaryCategory(req, res) {
  const newItem = {
    id: salaryCategories.length + 1,
    name: req.body.name || 'New Allowance',
    is_deductible: !!req.body.is_deductible,
  };
  salaryCategories.push(newItem);
  return res.status(201).json(newItem);
}

function updateSalaryCategory(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = salaryCategories.findIndex((c) => c.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  salaryCategories[index] = { ...salaryCategories[index], ...req.body };
  return res.json(salaryCategories[index]);
}

function deleteSalaryCategory(req, res) {
  const id = parseInt(req.params.id, 10);
  salaryCategories = salaryCategories.filter((c) => c.id !== id);
  return res.status(204).send();
}

module.exports = {
  getFees,
  createFee,
  getFeeById,
  updateFee,
  deleteFee,
  getFeeTypes,
  createFeeType,
  getFeeTypeById,
  updateFeeType,
  deleteFeeType,
  getFeeDashboardAnalytics,
  getTotalFeeSummary,
  getFeeSummary,
  getFeePayments,
  getExpenditures,
  createExpenditure,
  getExpenditureById,
  updateExpenditure,
  deleteExpenditure,
  getExpenditureSummary,
  getSalaryTemplatesGrouped,
  createSalaryTemplate,
  getSalaryCategories,
  createSalaryCategory,
  updateSalaryCategory,
  deleteSalaryCategory,
};
