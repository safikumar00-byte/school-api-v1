const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.controller');

// Events
router.get('/events/', eventsController.getEvents);
router.post('/events/', eventsController.createEvent);
router.get('/events/:id/', eventsController.getEventById);
router.put('/events/:id/', eventsController.updateEvent);
router.patch('/events/:id/', eventsController.updateEvent);
router.delete('/events/:id/', eventsController.deleteEvent);

// Announcements
router.get('/announcements/', eventsController.getAnnouncements);
router.post('/announcements/', eventsController.createAnnouncement);
router.get('/announcements/:id/', eventsController.getAnnouncementById);
router.put('/announcements/:id/', eventsController.updateAnnouncement);
router.patch('/announcements/:id/', eventsController.updateAnnouncement);
router.delete('/announcements/:id/', eventsController.deleteAnnouncement);

// Notifications
router.get('/notifications/', eventsController.getNotifications);
router.get('/notification-types/', eventsController.getNotificationTypes);

module.exports = router;
