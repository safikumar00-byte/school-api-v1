/**
 * VisionariesAI School System - Mock Backend Server
 * High-fidelity dummy backend preserving original architecture and enabling all 48 frontend screens
 */

const express = require('express');
const cors = require('cors');

const loggerMiddleware = require('./middleware/logger.middleware');
const authMiddleware = require('./middleware/auth.middleware');

// Routes
const authRoutes = require('./routes/auth.routes');
const academicRoutes = require('./routes/academic.routes');
const attendanceRoutes = require('./routes/attendance.routes');
const eventsRoutes = require('./routes/events.routes');
const usersRoutes = require('./routes/users.routes');
const financeRoutes = require('./routes/finance.routes');
const inventoryRoutes = require('./routes/inventory.routes');
const tasksRoutes = require('./routes/tasks.routes');
const leaveRoutes = require('./routes/leave.routes');
const hostelRoutes = require('./routes/hostel.routes');
const examsRoutes = require('./routes/exams.routes');
const transportRoutes = require('./routes/transport.routes');
const communicationRoutes = require('./routes/communication.routes');
const devicesRoutes = require('./routes/devices.routes');
const extendedRoutes = require('./routes/extended.routes');

const app = express();
const PORT = process.env.PORT || 8000;

// Universal CORS support
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
    credentials: true,
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Middleware
app.use(loggerMiddleware);
app.use('/api', authMiddleware);

// Mount API Routers
app.use('/api', authRoutes);
app.use('/api', academicRoutes);
app.use('/api', attendanceRoutes);
app.use('/api', eventsRoutes);
app.use('/api', usersRoutes);
app.use('/api', financeRoutes);
app.use('/api', inventoryRoutes);
app.use('/api', tasksRoutes);
app.use('/api', leaveRoutes);
app.use('/api', hostelRoutes);
app.use('/api', examsRoutes);
app.use('/api', transportRoutes);
app.use('/api', communicationRoutes);
app.use('/api', devicesRoutes);
app.use('/api', extendedRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    mode: 'mock-backend',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// Root Dashboard
app.get(['/', '/api'], (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>VisionariesAI SMS - Mock Backend Server</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 25px; margin: 0; }
    .container { max-width: 900px; margin: 0 auto; background: #1e293b; border-radius: 12px; padding: 24px; }
    h1 { color: #38bdf8; font-size: 24px; margin-top: 0; }
    .badge { display: inline-block; background: #10b981; color: white; padding: 4px 10px; border-radius: 9999px; font-weight: 600; font-size: 13px; margin-bottom: 12px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-top: 20px; }
    .card { background: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 14px; }
    .card h3 { color: #60a5fa; margin-top: 0; font-size: 15px; }
    ul { list-style: none; padding-left: 0; margin: 0; font-size: 12px; color: #94a3b8; }
    li { margin-bottom: 5px; }
    code { background: #334155; color: #e2e8f0; padding: 2px 5px; border-radius: 4px; font-size: 11px; }
    .instruction-box { background: #0369a1; color: white; border-radius: 8px; padding: 14px; margin: 16px 0; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="badge">● MOCK BACKEND ACTIVE</div>
    <h1>VisionariesAI School System - Mock API Server</h1>
    <p>This mock backend emulates the full Django REST backend (OAS 3.0 specification) to power all 48 frontend screens in the application.</p>
    
    <div class="instruction-box">
      <strong>Quick Connection:</strong> Set Base URL to <code>http://localhost:${PORT}</code> (Web/iOS) or <code>http://10.0.2.2:${PORT}</code> (Android Emulator).
      <br>Default login: <code>admin@visionariesai.com</code> / any password.
    </div>

    <h2>Integrated Modules (100% Screen Coverage)</h2>
    <div class="grid">
      <div class="card">
        <h3>1. Authentication & Security</h3>
        <ul>
          <li><code>POST /api/organisations/validate-email/</code></li>
          <li><code>POST /api/get-token/</code></li>
          <li><code>POST /api/auth/refresh/</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>2. Academic Management</h3>
        <ul>
          <li><code>GET /api/academic-years/</code></li>
          <li><code>GET /api/branches/</code></li>
          <li><code>GET /api/departments/</code></li>
          <li><code>GET /api/standards/ & /sections/</code></li>
          <li><code>GET /api/period/teacher-timetable/</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>3. Attendance System</h3>
        <ul>
          <li><code>GET /api/attendance-dashboard/dashboard/</code></li>
          <li><code>GET /api/attendance/</code></li>
          <li><code>GET /api/class-attendance/</code></li>
          <li><code>GET /api/staff-attendance/</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>4. Finance, Fees & Expenditures</h3>
        <ul>
          <li><code>GET /api/fees/ & /api/fee-types/</code></li>
          <li><code>GET /api/total-fee-summary/</code></li>
          <li><code>GET /api/fee-dashboard/fee-overview-analytics/</code></li>
          <li><code>GET /api/expenditure/ & summary</code></li>
          <li><code>GET /api/salary-templates/grouped/</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>5. Hostel Management</h3>
        <ul>
          <li><code>GET /api/hostel-rooms/ & beds</code></li>
          <li><code>GET /api/hostel-visitors/</code></li>
          <li><code>GET /api/hostel-mealplans/</code></li>
          <li><code>GET /api/hostel-products/</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>6. Inventory & Stationery</h3>
        <ul>
          <li><code>GET /api/inventory/ & dashboard</code></li>
          <li><code>GET /api/inventory-types/ & tracking</code></li>
          <li><code>GET /api/stationary/ & fees</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>7. Leave & Holidays</h3>
        <ul>
          <li><code>GET /api/leave/ & /api/leave-quotas/</code></li>
          <li><code>GET /api/holiday-calendar/</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>8. Tasks, Events & Communication</h3>
        <ul>
          <li><code>GET /api/tasks_create/ & submissions</code></li>
          <li><code>GET /api/events/ & /notifications/</code></li>
          <li><code>GET /api/chat/ & /api/documents/</code></li>
          <li><code>GET /api/query/ (Support)</code></li>
        </ul>
      </div>

      <div class="card">
        <h3>9. Transport, IoT & Extended</h3>
        <ul>
          <li><code>GET /api/transport-vehicles/ & trips</code></li>
          <li><code>GET /api/device-readings/live-device-readings/ (Weather)</code></li>
          <li><code>GET /api/wallet/ & /api/foodcourt/</code></li>
          <li><code>GET /api/sports/ & /api/library/</code></li>
        </ul>
      </div>
    </div>
  </div>
</body>
</html>
  `);
});

// 404 Fallback for unhandled paths
app.use((req, res) => {
  console.warn(`[MockBackend 404] Unhandled route: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    detail: `Mock endpoint not found: ${req.method} ${req.originalUrl}`,
    suggestion: 'Check the endpoint URL and ensure it matches the OAS 3.0 specification.',
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[MockBackend Error]', err);
  res.status(500).json({
    detail: 'Internal server error in mock backend',
    error: err.message,
  });
});

// Start Server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log('====================================================');
    console.log(`🚀 VisionariesAI Mock Backend Server is RUNNING!`);
    console.log(`📍 Port:           ${PORT}`);
    console.log(`🌐 Local URL:      http://localhost:${PORT}`);
    console.log(`📡 Health Check:   http://localhost:${PORT}/health`);
    console.log(`📚 Web Dashboard:  http://localhost:${PORT}/`);
    console.log('====================================================');
  });
}

module.exports = app;
