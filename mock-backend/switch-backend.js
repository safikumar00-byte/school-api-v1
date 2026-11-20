/**
 * Backend Switcher & Configuration Helper
 * Allows seamless switching between Live Backend and Mock Backend
 */

const os = require('os');

function getLocalIpAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }
  return addresses;
}

const localIps = getLocalIpAddresses();
const primaryIp = localIps[0] || 'localhost';

console.log('==================================================================');
console.log('🔄  VisionariesAI SMS - Backend Environment Switcher');
console.log('==================================================================\n');

console.log('Current Available Configurations:\n');

console.log('1️⃣  MOCK BACKEND MODE:');
console.log('    • Start Server:           node mock-backend/server.js');
console.log('    • Web / iOS Simulator:    http://localhost:8000');
console.log('    • Android Emulator:       http://10.0.2.2:8000');
console.log(`    • Physical Device (Expo): http://${primaryIp}:8000`);
console.log('    • Default Login:          admin@visionariesai.com / any password');
console.log('    • Token:                  mock-token-admin-12345\n');

console.log('2️⃣  LIVE ORIGINAL BACKEND MODE:');
console.log('    • Production Base URL:    https://vai.dev.sms.visionariesai.com');
console.log('    • Auth Validation URL:    https://default.dev.sms.visionariesai.com\n');

console.log('------------------------------------------------------------------');
console.log('HOW TO SWITCH:');
console.log('------------------------------------------------------------------');
console.log('A. In the Running App:');
console.log('   • To switch to MOCK: Log out, or on login enter organization email:');
console.log('     "admin@visionariesai.com" or "demo@demo.com"');
console.log('     The mock server returns your local URL automatically.');
console.log('   • To switch to LIVE: Log in with your registered production email.');
console.log('\nB. Developer Storage / AsyncStorage:');
console.log('   • Set key "base_url" to http://localhost:8000 (Mock)');
console.log('   • Set key "base_url" to https://vai.dev.sms.visionariesai.com (Live)');
console.log('==================================================================\n');
