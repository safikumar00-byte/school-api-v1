/**
 * Chat, Documents & Support Queries Controller
 */
const {
  mockChatPartners,
  mockChatMessages,
  mockDocuments,
  mockSupportQueries,
} = require('../data/communication.data');
const { formatPaginatedResponse } = require('../utils/response');

let chatPartners = [...mockChatPartners];
let chatMessages = [...mockChatMessages];
let documents = [...mockDocuments];
let supportQueries = [...mockSupportQueries];

// Chat
function getChatMessages(req, res) {
  let filtered = [...chatMessages];
  if (req.query.sender && req.query.receiver) {
    const s = parseInt(req.query.sender, 10);
    const r = parseInt(req.query.receiver, 10);
    filtered = filtered.filter(
      (m) =>
        (m.sender === s && m.receiver === r) ||
        (m.sender === r && m.receiver === s)
    );
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

function sendChatMessage(req, res) {
  const newItem = {
    id: chatMessages.length + 1,
    message: req.body.message || '',
    sender: req.body.sender || 1,
    receiver: req.body.receiver || 2,
    timestamp: new Date().toISOString(),
    is_read: false,
    message_type: req.body.message_type || 'text',
  };
  chatMessages.push(newItem);
  return res.status(201).json(newItem);
}

function getAllReceivedChats(req, res) {
  return res.json(formatPaginatedResponse(req, chatMessages));
}

function getChatWith(req, res) {
  return res.json(chatPartners);
}

function markAsRead(req, res) {
  return res.json({ detail: 'Messages marked as read.' });
}

function isUserOnline(req, res) {
  const userId = parseInt(req.params.userId, 10);
  const partner = chatPartners.find((p) => p.id === userId);
  return res.json({
    user_id: userId,
    is_online: partner ? partner.is_online : true,
  });
}

// Documents
function getDocuments(req, res) {
  let filtered = [...documents];
  if (req.query.search) {
    const q = req.query.search.toLowerCase();
    filtered = filtered.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        (d.description && d.description.toLowerCase().includes(q))
    );
  }
  if (req.query.category && req.query.category !== 'All') {
    filtered = filtered.filter((d) => d.category === req.query.category);
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

function createDocument(req, res) {
  const newItem = {
    id: documents.length + 1,
    title: req.body.title || 'New Document',
    description: req.body.description || '',
    file_url: req.body.file_url || 'https://visionariesai.com/docs/sample.pdf',
    file_type: req.body.file_type || 'PDF',
    file_size: req.body.file_size || 1024000,
    uploaded_by: { first_name: 'Alexander', last_name: 'Hamilton' },
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
    is_public: !!req.body.is_public,
    category: req.body.category || 'Academic',
  };
  documents.unshift(newItem);
  return res.status(201).json(newItem);
}

function getDocumentById(req, res) {
  const item = documents.find((d) => d.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ detail: 'Not found.' });
  return res.json(item);
}

// Support Queries (Tickets)
function getSupportQueries(req, res) {
  let filtered = [...supportQueries];
  if (req.query.status && req.query.status !== 'All') {
    filtered = filtered.filter((q) => q.status.toLowerCase() === req.query.status.toLowerCase());
  }
  return res.json(formatPaginatedResponse(req, filtered));
}

function createSupportQuery(req, res) {
  const newItem = {
    id: supportQueries.length + 1,
    subject: req.body.subject || 'Support Ticket',
    description: req.body.description || '',
    priority: req.body.priority || 'Medium',
    comment: req.body.comment || 'General',
    image: req.body.image || '',
    status: 'Open',
    assigned_to: { id: 1, name: 'Support Helpdesk' },
    created: new Date().toISOString(),
    modified: new Date().toISOString(),
  };
  supportQueries.unshift(newItem);
  return res.status(201).json(newItem);
}

function updateSupportQuery(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = supportQueries.findIndex((q) => q.id === id);
  if (index === -1) return res.status(404).json({ detail: 'Not found.' });
  supportQueries[index] = { ...supportQueries[index], ...req.body, modified: new Date().toISOString() };
  return res.json(supportQueries[index]);
}

module.exports = {
  getChatMessages,
  sendChatMessage,
  getAllReceivedChats,
  getChatWith,
  markAsRead,
  isUserOnline,
  getDocuments,
  createDocument,
  getDocumentById,
  getSupportQueries,
  createSupportQuery,
  updateSupportQuery,
};
