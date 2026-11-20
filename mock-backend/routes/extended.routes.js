const express = require('express');
const router = express.Router();
const extendedController = require('../controllers/extended.controller');

// Wallet
router.get('/wallet/balance/', extendedController.getWalletBalance);
router.get('/wallet/transactions/', extendedController.getWalletTransactions);
router.post('/wallet/topup/', extendedController.topupWallet);

// Food Court
router.get('/foodcourt/menu/', extendedController.getFoodCourtMenu);
router.get('/foodcourt/orders/', extendedController.getFoodCourtOrders);
router.post('/foodcourt/orders/', extendedController.createFoodCourtOrder);

// Sports
router.get('/sports/teams/', extendedController.getSportsTeams);
router.get('/sports/matches/', extendedController.getSportsMatches);
router.get('/sports/recommendations/', extendedController.getSportsRecommendations);
router.get('/sports/events/', extendedController.getSportsMatches);

// Library
router.get('/library/resources/', extendedController.getLibraryResources);
router.get('/library/catalog/', extendedController.getLibraryResources);
router.get('/library/ecourses/', extendedController.getECourses);
router.get('/library/ecourse/', extendedController.getECourses);

// Timesheet
router.get('/timesheet/', extendedController.getTimesheet);
router.post('/timesheet/', extendedController.createTimesheetEntry);

// Invoices
router.get('/invoices/', extendedController.getInvoices);

// Expense Claims
router.get('/expenses/', extendedController.getExpenseClaims);
router.post('/expenses/', extendedController.createExpenseClaim);

// Rewards
router.get('/rewards/', extendedController.getRewards);
router.get('/rewards/achievements/', extendedController.getRewards);
router.get('/rewards/leaderboard/', extendedController.getRewardsLeaderboard);

// Performance
router.get('/performance/employee/', extendedController.getEmployeePerformance);
router.get('/performance/tasks/', extendedController.getTaskPerformance);
router.get('/teacher/performance/', extendedController.getEmployeePerformance);
router.get('/student/performance/', extendedController.getEmployeePerformance);

// Explore & Search
router.get('/explore/trending/', extendedController.searchExplore);
router.get('/explore/recommendations/', extendedController.searchExplore);
router.get('/search/', extendedController.searchExplore);

module.exports = router;
