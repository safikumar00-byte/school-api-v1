const express = require('express');
const router = express.Router();
const financeController = require('../controllers/finance.controller');

// Fees
router.get('/fees/', financeController.getFees);
router.post('/fees/', financeController.createFee);
router.get('/fees/:id/', financeController.getFeeById);
router.put('/fees/:id/', financeController.updateFee);
router.patch('/fees/:id/', financeController.updateFee);
router.delete('/fees/:id/', financeController.deleteFee);

// Fee Types
router.get('/fee-types/', financeController.getFeeTypes);
router.post('/fee-types/', financeController.createFeeType);
router.get('/fee-types/:id/', financeController.getFeeTypeById);
router.put('/fee-types/:id/', financeController.updateFeeType);
router.patch('/fee-types/:id/', financeController.updateFeeType);
router.delete('/fee-types/:id/', financeController.deleteFeeType);

// Fee Analytics & Summaries
router.get('/fee-dashboard/fee-overview-analytics/', financeController.getFeeDashboardAnalytics);
router.get('/total-fee-summary/', financeController.getTotalFeeSummary);
router.get('/fee-summary/', financeController.getFeeSummary);
router.get('/fee-payments/', financeController.getFeePayments);

// Expenditures
router.get('/expenditure/', financeController.getExpenditures);
router.get('/expenditures/', financeController.getExpenditures);
router.post('/expenditure/', financeController.createExpenditure);
router.post('/expenditures/', financeController.createExpenditure);
router.get('/expenditure/:id/', financeController.getExpenditureById);
router.get('/expenditures/:id/', financeController.getExpenditureById);
router.patch('/expenditure/:id/', financeController.updateExpenditure);
router.patch('/expenditures/:id/', financeController.updateExpenditure);
router.delete('/expenditure/:id/', financeController.deleteExpenditure);
router.delete('/expenditures/:id/', financeController.deleteExpenditure);
router.get('/expenditure/summary/branch-:branch/academic-year-:academicYear/', financeController.getExpenditureSummary);
router.get('/expenditure-summary/', financeController.getExpenditureSummary);

// Salary Templates & Categories
router.get('/salary-templates/grouped/', financeController.getSalaryTemplatesGrouped);
router.post('/salary-templates/', financeController.createSalaryTemplate);
router.get('/salary-categories/', financeController.getSalaryCategories);
router.post('/salary-categories/', financeController.createSalaryCategory);
router.patch('/salary-categories/:id/', financeController.updateSalaryCategory);
router.delete('/salary-categories/:id/', financeController.deleteSalaryCategory);

module.exports = router;
