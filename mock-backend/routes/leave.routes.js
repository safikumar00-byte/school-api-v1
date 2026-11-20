const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leave.controller');

// Leave Requests
router.get('/leave/', leaveController.getLeaveRequests);
router.get('/leave-requests/', leaveController.getLeaveRequests);
router.post('/leave/', leaveController.createLeaveRequest);
router.post('/leave-requests/', leaveController.createLeaveRequest);
router.patch('/leave/:id/', leaveController.updateLeaveRequest);
router.delete('/leave/:id/', leaveController.deleteLeaveRequest);
router.patch('/leave/:id/approve/', leaveController.approveLeaveRequest);
router.post('/leave/:id/approve/', leaveController.approveLeaveRequest);

// Leave Quotas
router.get('/leave-quotas/', leaveController.getLeaveQuotas);
router.post('/leave-quotas/', leaveController.createLeaveQuota);
router.patch('/leave-quotas/:id/', leaveController.updateLeaveQuota);
router.delete('/leave-quotas/:id/', leaveController.deleteLeaveQuota);
router.get('/annual-leave-quotas/', leaveController.getAnnualLeaveQuotas);
router.post('/annual-leave-quotas/', leaveController.createAnnualLeaveQuota);
router.get('/annual-leave-quotas/:id/', leaveController.getLeaveQuotas);

// Holidays
router.get('/holiday-calendar/', leaveController.getHolidays);
router.get('/holidays/', leaveController.getHolidays);
router.post('/holiday-calendar/', leaveController.createHoliday);
router.patch('/holiday-calendar/:id/', leaveController.updateHoliday);
router.delete('/holiday-calendar/:id/', leaveController.deleteHoliday);

module.exports = router;
