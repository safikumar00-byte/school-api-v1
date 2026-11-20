/**
 * Auth Controller
 */
const { mockOrganizations, mockUsers } = require('../data/auth.data');

function validateEmail(req, res) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ detail: 'Email is required.' });
  }

  const cleanEmail = email.trim().toLowerCase();
  const domain = cleanEmail.split('@')[1];

  const org = mockOrganizations.find((o) => o.domain === domain) || {
    domain,
    url: req.get('host') || 'localhost:8000',
    organization_name: 'VisionariesAI Public School',
    is_active: true,
  };

  return res.json({
    url: org.url,
    organization_name: org.organization_name,
    is_active: org.is_active,
  });
}

function getToken(req, res) {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json({ detail: 'Username is required.' });
  }

  const user = mockUsers.find(
    (u) => u.username === username || u.email.toLowerCase() === username.toLowerCase()
  ) || mockUsers[0];

  return res.json({
    token: user.token || 'mock-token-admin-12345',
    user_id: user.id,
    email: user.email,
    username: user.username,
    is_superuser: user.is_superuser,
    is_staff: user.is_staff,
    is_active: user.is_active,
    role: user.role,
  });
}

function refreshToken(req, res) {
  return res.json({
    token: 'mock-refreshed-token-' + Date.now(),
  });
}

function logout(req, res) {
  return res.json({ detail: 'Successfully logged out.' });
}

module.exports = {
  validateEmail,
  getToken,
  refreshToken,
  logout,
};
