/**
 * Auth Middleware
 * Inspects Token headers without rejecting valid requests in mock mode
 */
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Token ')) {
    req.userToken = authHeader.replace('Token ', '').trim();
  }
  // Attach default mock user context
  req.user = {
    id: 1,
    email: 'admin@visionariesai.com',
    username: 'admin',
    is_superuser: true,
    is_staff: true,
    is_active: true,
    role: 'admin',
  };
  next();
}

module.exports = authMiddleware;
