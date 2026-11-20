const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/organisations/validate-email/', authController.validateEmail);
router.post('/get-token/', authController.getToken);
router.post('/auth/refresh/', authController.refreshToken);
router.post('/auth/logout/', authController.logout);

module.exports = router;
