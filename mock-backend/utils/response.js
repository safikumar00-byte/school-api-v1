/**
 * Response Utility for Django REST Framework (DRF) style responses
 */

function formatPaginatedResponse(req, items = [], defaultLimit = 50) {
  const limit = parseInt(req.query.limit || req.query.page_size, 10) || defaultLimit;
  let offset = 0;
  if (req.query.offset !== undefined) {
    offset = parseInt(req.query.offset, 10) || 0;
  } else if (req.query.page !== undefined) {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    offset = (page - 1) * limit;
  }
  const total = items.length;

  const sliced = items.slice(offset, offset + limit);

  const protocol = req.protocol || 'http';
  const host = req.get('host') || 'localhost:8000';
  const baseUrl = `${protocol}://${host}${req.baseUrl}${req.path}`;

  const nextOffset = offset + limit;
  const next = nextOffset < total ? `${baseUrl}?limit=${limit}&offset=${nextOffset}` : null;
  const prevOffset = Math.max(0, offset - limit);
  const previous = offset > 0 ? `${baseUrl}?limit=${limit}&offset=${prevOffset}` : null;

  return {
    count: total,
    next,
    previous,
    results: sliced,
  };
}

module.exports = {
  formatPaginatedResponse,
};
