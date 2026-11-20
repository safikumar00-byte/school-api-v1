/**
 * Events, Announcements & Notifications Controller
 */
const {
  mockEvents,
  mockAnnouncements,
  mockNotifications,
  mockNotificationTypes,
} = require('../data/events.data');
const { formatPaginatedResponse } = require('../utils/response');

let events = [...mockEvents];
let announcements = [...mockAnnouncements];
let notifications = [...mockNotifications];

// Events
function getEvents(req, res) {
  return res.json(formatPaginatedResponse(req, events));
}

function createEvent(req, res) {
  const newItem = {
    id: events.length + 1,
    title: req.body.title || 'New Event',
    description: req.body.description || '',
    start_date: req.body.start_date || new Date().toISOString(),
    end_date: req.body.end_date || new Date().toISOString(),
    location: req.body.location || 'Campus Auditorium',
    event_type: req.body.event_type || 'General',
    organizer: req.body.organizer || 'Administration',
    is_active: true,
    branch: req.body.branch || 1,
    created: new Date().toISOString(),
  };
  events.unshift(newItem);
  return res.status(201).json(newItem);
}

function getEventById(req, res) {
  const item = events.find((e) => e.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateEvent(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  events[index] = { ...events[index], ...req.body };
  return res.json(events[index]);
}

function deleteEvent(req, res) {
  const id = parseInt(req.params.id, 10);
  events = events.filter((e) => e.id !== id);
  return res.status(204).send();
}

// Announcements
function getAnnouncements(req, res) {
  return res.json(formatPaginatedResponse(req, announcements));
}

function createAnnouncement(req, res) {
  const newItem = {
    id: announcements.length + 1,
    title: req.body.title || 'New Announcement',
    message: req.body.message || '',
    category: req.body.category || 'General',
    priority: req.body.priority || 'Normal',
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
    is_active: true,
    branch: req.body.branch || 1,
  };
  announcements.unshift(newItem);
  return res.status(201).json(newItem);
}

function getAnnouncementById(req, res) {
  const item = announcements.find((a) => a.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

function updateAnnouncement(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = announcements.findIndex((a) => a.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  announcements[index] = { ...announcements[index], ...req.body, modified: new Date().toISOString() };
  return res.json(announcements[index]);
}

function deleteAnnouncement(req, res) {
  const id = parseInt(req.params.id, 10);
  announcements = announcements.filter((a) => a.id !== id);
  return res.status(204).send();
}

// Notifications
function getNotifications(req, res) {
  return res.json(formatPaginatedResponse(req, notifications));
}

function getNotificationTypes(req, res) {
  return res.json(mockNotificationTypes);
}

module.exports = {
  getEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  getAnnouncements,
  createAnnouncement,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
  getNotifications,
  getNotificationTypes,
};
