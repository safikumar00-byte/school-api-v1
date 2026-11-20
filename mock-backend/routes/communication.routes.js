const express = require('express');
const router = express.Router();
const commController = require('../controllers/communication.controller');

// Chat
router.get('/chat/', commController.getChatMessages);
router.post('/chat/', commController.sendChatMessage);
router.get('/chat/all-received-chats/', commController.getAllReceivedChats);
router.get('/chat/chat_with/', commController.getChatWith);
router.post('/chat/mark_as_read/', commController.markAsRead);
router.get('/chat/is_user_online/:userId/', commController.isUserOnline);

// Documents
router.get('/documents/', commController.getDocuments);
router.post('/documents/', commController.createDocument);
router.get('/documents/:id/', commController.getDocumentById);

// Support Queries (Tickets)
router.get('/query/', commController.getSupportQueries);
router.get('/support-queries/', commController.getSupportQueries);
router.post('/query/', commController.createSupportQuery);
router.post('/support-queries/', commController.createSupportQuery);
router.patch('/query/:id/', commController.updateSupportQuery);

module.exports = router;
