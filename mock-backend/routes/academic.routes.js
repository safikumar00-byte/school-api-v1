const express = require('express');
const router = express.Router();
const academicController = require('../controllers/academic.controller');

// Academic Years
router.get('/academic-years/', academicController.getAcademicYears);
router.post('/academic-years/', academicController.createAcademicYear);
router.get('/academic-years/:id/', academicController.getAcademicYearById);
router.put('/academic-years/:id/', academicController.updateAcademicYear);
router.patch('/academic-years/:id/', academicController.updateAcademicYear);
router.delete('/academic-years/:id/', academicController.deleteAcademicYear);

// Branches
router.get('/branches/', academicController.getBranches);
router.post('/branches/', academicController.createBranch);
router.get('/branches/:id/', academicController.getBranchById);
router.put('/branches/:id/', academicController.updateBranch);
router.patch('/branches/:id/', academicController.updateBranch);
router.delete('/branches/:id/', academicController.deleteBranch);

// Departments
router.get('/departments/', academicController.getDepartments);
router.post('/departments/', academicController.createDepartment);
router.get('/departments/:id/', academicController.getDepartmentById);
router.put('/departments/:id/', academicController.updateDepartment);
router.patch('/departments/:id/', academicController.updateDepartment);
router.delete('/departments/:id/', academicController.deleteDepartment);
router.post('/departments/:id/add-teachers/', academicController.addTeachersToDepartment);

// Standards
router.get('/standards/', academicController.getStandards);
router.post('/standards/', academicController.createStandard);
router.get('/standards/:id/', academicController.getStandardById);
router.put('/standards/:id/', academicController.updateStandard);
router.patch('/standards/:id/', academicController.updateStandard);
router.delete('/standards/:id/', academicController.deleteStandard);

// Sections, Subjects, Classes, Rooms
router.get('/sections/', academicController.getSections);
router.get('/subjects/', academicController.getSubjects);
router.get('/classes/', academicController.getClasses);
router.get('/rooms/', academicController.getRooms);

// Periods & Timetable
router.get('/period/', academicController.getPeriods);
router.post('/period/', academicController.createPeriod);
router.get('/period/teacher-timetable/', academicController.getTeacherTimetable);
router.get('/teacher-timetable/', academicController.getTeacherTimetable);
router.put('/period/:id/', academicController.updatePeriod);
router.patch('/period/:id/', academicController.updatePeriod);
router.delete('/period/:id/', academicController.deletePeriod);

// Availability
router.get('/availability/available-periods/', academicController.getAvailablePeriods);
router.get('/availability/available-teachers/', academicController.getAvailableTeachers);

module.exports = router;
