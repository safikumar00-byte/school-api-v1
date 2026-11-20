/**
 * Comprehensive Automated Verification Suite for Mock Backend
 * Tests:
 * - Suite 1: All 192 API Service endpoints matching frontend contracts
 * - Suite 2: Extended frontend screens endpoints (Wallet, Foodcourt, Sports, Library, etc.)
 * - Suite 3: Pagination & Query Filtering (page, page_size, limit, offset, search)
 * - Suite 4: Authentication & Middleware verification
 * - Suite 5: Error handling & 404 validation
 * - Suite 6: Full end-to-end CRUD consistency lifecycle
 */

const http = require('http');
const path = require('path');
const app = require('./server');
const apiServiceCalls = require('./test-calls.json');

const TEST_PORT = 8999;
let server;

// Extended Screen Endpoints
const extendedEndpoints = [
  { method: 'GET', path: '/api/wallet/balance/', expectedStatus: 200, checkField: 'balance' },
  { method: 'GET', path: '/api/wallet/transactions/', expectedStatus: 200, checkField: 'results' },
  { method: 'POST', path: '/api/wallet/topup/', body: { amount: 500 }, expectedStatus: 201 },
  { method: 'GET', path: '/api/foodcourt/menu/', expectedStatus: 200, checkField: 'menu' },
  { method: 'GET', path: '/api/foodcourt/orders/', expectedStatus: 200, checkField: 'results' },
  { method: 'POST', path: '/api/foodcourt/orders/', body: { items: [{ name: 'Salad Bowl', qty: 1 }], total: 95 }, expectedStatus: 201 },
  { method: 'GET', path: '/api/sports/teams/', expectedStatus: 200 },
  { method: 'GET', path: '/api/sports/matches/', expectedStatus: 200 },
  { method: 'GET', path: '/api/sports/recommendations/', expectedStatus: 200 },
  { method: 'GET', path: '/api/library/resources/', expectedStatus: 200, checkField: 'results' },
  { method: 'GET', path: '/api/library/ecourses/', expectedStatus: 200, checkField: 'results' },
  { method: 'GET', path: '/api/timesheet/', expectedStatus: 200, checkField: 'results' },
  { method: 'POST', path: '/api/timesheet/', body: { hours_worked: 6, task_description: 'Lab grading' }, expectedStatus: 201 },
  { method: 'GET', path: '/api/invoices/', expectedStatus: 200, checkField: 'results' },
  { method: 'GET', path: '/api/expenses/', expectedStatus: 200, checkField: 'results' },
  { method: 'POST', path: '/api/expenses/', body: { claim_title: 'Lab glassware', amount: 1200 }, expectedStatus: 201 },
  { method: 'GET', path: '/api/rewards/', expectedStatus: 200, checkField: 'badges' },
  { method: 'GET', path: '/api/rewards/leaderboard/', expectedStatus: 200 },
  { method: 'GET', path: '/api/performance/employee/', expectedStatus: 200, checkField: 'metrics' },
  { method: 'GET', path: '/api/performance/tasks/', expectedStatus: 200, checkField: 'completion_rate' },
  { method: 'GET', path: '/api/explore/trending/', expectedStatus: 200, checkField: 'trending' },
  { method: 'GET', path: '/api/search/?query=science', expectedStatus: 200, checkField: 'trending' },
];

function makeRequest({ method, path: reqPath, body = null, token = 'mock-token-admin-12345' }) {
  return new Promise((resolve) => {
    const postData = body ? JSON.stringify(body) : '';
    const headers = {
      'Content-Type': 'application/json',
    };
    if (token) headers['Authorization'] = `Token ${token}`;
    if (postData) headers['Content-Length'] = Buffer.byteLength(postData);

    const options = {
      hostname: '127.0.0.1',
      port: TEST_PORT,
      path: reqPath,
      method,
      headers,
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        let json = null;
        try {
          if (data) json = JSON.parse(data);
        } catch (e) {
          json = data;
        }
        resolve({
          statusCode: res.statusCode,
          data: json,
        });
      });
    });

    req.on('error', (e) => resolve({ statusCode: 599, error: e.message }));
    if (postData) req.write(postData);
    req.end();
  });
}

async function runTests() {
  server = app.listen(TEST_PORT, async () => {
    console.log(`\n=============================================================`);
    console.log(`  VisionariesAI Mock Backend - Full Verification Test Suite  `);
    console.log(`  Running on port ${TEST_PORT}                               `);
    console.log(`=============================================================\n`);

    let passed = 0;
    let failed = 0;
    const failures = [];

    function assert(testName, condition, details = '') {
      if (condition) {
        passed++;
        console.log(`  ✅ PASS: ${testName}`);
      } else {
        failed++;
        console.error(`  ❌ FAIL: ${testName} - ${details}`);
        failures.push({ testName, details });
      }
    }

    // Suite 1: All 192 API Service Endpoints
    console.log(`\n--- [Suite 1] All API Service Endpoints (${apiServiceCalls.length} Tests) ---`);
    for (const test of apiServiceCalls) {
      try {
        const res = await makeRequest(test);
        const ok = res.statusCode >= 200 && res.statusCode < 300;
        assert(
          `${test.method.padEnd(6)} ${test.path.padEnd(48)} (${test.methodName})`,
          ok,
          `Expected 2xx, got ${res.statusCode}`
        );
      } catch (err) {
        assert(`${test.method.padEnd(6)} ${test.path}`, false, err.message);
      }
    }

    // Suite 2: Extended Screen Endpoints
    console.log(`\n--- [Suite 2] Extended Screens Endpoints (${extendedEndpoints.length} Tests) ---`);
    for (const test of extendedEndpoints) {
      try {
        const res = await makeRequest(test);
        const statusOk = res.statusCode === test.expectedStatus;
        const fieldOk = test.checkField ? (res.data && res.data[test.checkField] !== undefined) : true;
        assert(
          `${test.method.padEnd(6)} ${test.path}`,
          statusOk && fieldOk,
          `Expected status ${test.expectedStatus} and field '${test.checkField}', got status ${res.statusCode}`
        );
      } catch (err) {
        assert(`${test.method.padEnd(6)} ${test.path}`, false, err.message);
      }
    }

    // Suite 3: Pagination & Query Filters
    console.log(`\n--- [Suite 3] Pagination & Query Filters ---`);
    try {
      // Pagination test with page & page_size
      const pageRes = await makeRequest({ method: 'GET', path: '/api/academic-years/?page=1&page_size=2' });
      assert(
        'GET /api/academic-years/?page=1&page_size=2 pagination format',
        pageRes.statusCode === 200 && Array.isArray(pageRes.data?.results) && pageRes.data.results.length <= 2,
        `Expected results length <= 2, got ${pageRes.data?.results?.length}`
      );

      // Pagination test with limit & offset
      const limitRes = await makeRequest({ method: 'GET', path: '/api/academic-years/?limit=1&offset=0' });
      assert(
        'GET /api/academic-years/?limit=1&offset=0 limit/offset format',
        limitRes.statusCode === 200 && Array.isArray(limitRes.data?.results) && limitRes.data.results.length === 1,
        `Expected results length 1, got ${limitRes.data?.results?.length}`
      );

      // Search filter test
      const searchRes = await makeRequest({ method: 'GET', path: '/api/inventory/?search=Laptop' });
      assert(
        'GET /api/inventory/?search=Laptop search filter',
        searchRes.statusCode === 200 && Array.isArray(searchRes.data?.results),
        `Status ${searchRes.statusCode}`
      );

      // Branch / Academic Year query filter test
      const filterRes = await makeRequest({ method: 'GET', path: '/api/events/?branch=1&academic_year=1' });
      assert(
        'GET /api/events/?branch=1&academic_year=1 query filtering',
        filterRes.statusCode === 200 && Array.isArray(filterRes.data?.results),
        `Status ${filterRes.statusCode}`
      );
    } catch (err) {
      assert('Suite 3 Query filters', false, err.message);
    }

    // Suite 4: Authentication & Security Middleware
    console.log(`\n--- [Suite 4] Authentication & Security Middleware ---`);
    try {
      // Valid token allows access
      const authRes = await makeRequest({ method: 'GET', path: '/api/branches/', token: 'mock-token-admin-12345' });
      assert(
        'GET /api/branches/ with valid auth token -> 200 OK',
        authRes.statusCode === 200,
        `Expected 200, got ${authRes.statusCode}`
      );

      // Public endpoints allow access without auth token
      const pubRes = await makeRequest({
        method: 'POST',
        path: '/api/organisations/validate-email/',
        body: { email: 'test@visionariesai.com' },
        token: '',
      });
      assert(
        'POST /api/organisations/validate-email/ is public (200 without token)',
        pubRes.statusCode === 200,
        `Expected 200, got ${pubRes.statusCode}`
      );

      // Login returns token and user payload
      const loginRes = await makeRequest({
        method: 'POST',
        path: '/api/get-token/',
        body: { username: 'admin', password: 'any' },
        token: '',
      });
      assert(
        'POST /api/get-token/ generates token and user profile',
        loginRes.statusCode === 200 && !!loginRes.data?.token && !!loginRes.data?.user_id,
        `Status ${loginRes.statusCode}, token: ${loginRes.data?.token}`
      );
    } catch (err) {
      assert('Suite 4 Auth', false, err.message);
    }

    // Suite 5: Error Handling & 404 Validation
    console.log(`\n--- [Suite 5] Error Handling & Validation ---`);
    try {
      // Non-existent item
      const notFoundRes = await makeRequest({ method: 'GET', path: '/api/users/999999/' });
      assert(
        'GET /api/users/999999/ (non-existent id) -> 404 Not Found',
        notFoundRes.statusCode === 404,
        `Expected 404, got ${notFoundRes.statusCode}`
      );

      // Non-existent route
      const badRouteRes = await makeRequest({ method: 'GET', path: '/api/non-existent-subpath-xyz/' });
      assert(
        'GET /api/non-existent-subpath-xyz/ -> 404 Not Found',
        badRouteRes.statusCode === 404,
        `Expected 404, got ${badRouteRes.statusCode}`
      );
    } catch (err) {
      assert('Suite 5 Error Handling', false, err.message);
    }

    // Suite 6: Complete End-to-End CRUD Lifecycle
    console.log(`\n--- [Suite 6] End-to-End CRUD Lifecycle ---`);
    try {
      // Step 1: Create
      const createRes = await makeRequest({
        method: 'POST',
        path: '/api/stationary-types/',
        body: { name: 'Graph Notebooks Pro', description: 'Centimeter grid ruled', is_active: true },
      });
      const createdId = createRes.data?.id;
      assert(
        'Step 1: CREATE Stationery Type (POST /api/stationary-types/) -> 201 Created',
        createRes.statusCode === 201 && !!createdId,
        `Status ${createRes.statusCode}, id ${createdId}`
      );

      // Step 2: Read Collection
      const listRes = await makeRequest({ method: 'GET', path: '/api/stationary-types/' });
      const foundInList = listRes.data?.results?.some((i) => i.id === createdId);
      assert(
        'Step 2: READ Stationery Types list -> contains created item',
        listRes.statusCode === 200 && foundInList,
        `Status ${listRes.statusCode}, found: ${foundInList}`
      );

      // Step 3: Read Single Item
      const getRes = await makeRequest({ method: 'GET', path: `/api/stationary-types/${createdId}/` });
      assert(
        `Step 3: READ created item (GET /api/stationary-types/${createdId}/) -> 200 OK`,
        getRes.statusCode === 200 && getRes.data?.name === 'Graph Notebooks Pro',
        `Status ${getRes.statusCode}, name: ${getRes.data?.name}`
      );

      // Step 4: Update Item
      const updateRes = await makeRequest({
        method: 'PATCH',
        path: `/api/stationary-types/${createdId}/`,
        body: { description: 'Updated centimeter grid ruled - Special Edition' },
      });
      assert(
        `Step 4: UPDATE item (PATCH /api/stationary-types/${createdId}/) -> 200 OK`,
        updateRes.statusCode === 200 && updateRes.data?.description?.includes('Special Edition'),
        `Status ${updateRes.statusCode}, desc: ${updateRes.data?.description}`
      );

      // Step 5: Delete Item
      const deleteRes = await makeRequest({
        method: 'DELETE',
        path: `/api/stationary-types/${createdId}/`,
      });
      assert(
        `Step 5: DELETE item (DELETE /api/stationary-types/${createdId}/) -> 204 No Content`,
        deleteRes.statusCode === 204,
        `Status ${deleteRes.statusCode}`
      );

      // Step 6: Verify Deleted Item is 404
      const verifyDeletedRes = await makeRequest({
        method: 'GET',
        path: `/api/stationary-types/${createdId}/`,
      });
      assert(
        `Step 6: VERIFY deletion (GET /api/stationary-types/${createdId}/) -> 404 Not Found`,
        verifyDeletedRes.statusCode === 404,
        `Status ${verifyDeletedRes.statusCode}`
      );
    } catch (err) {
      assert('Suite 6 CRUD Lifecycle', false, err.message);
    }

    // Summary
    console.log('\n=============================================================');
    console.log(`  VERIFICATION RESULTS: ${passed} PASSED | ${failed} FAILED (${passed + failed} Total)`);
    console.log('=============================================================\n');

    if (failures.length > 0) {
      console.error('Failed Tests:');
      failures.forEach((f) => console.error(`  - ${f.testName}: ${f.details}`));
    }

    server.close();
    process.exit(failed > 0 ? 1 : 0);
  });
}

runTests();
