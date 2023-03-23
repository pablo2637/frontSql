const express = require('express');
const router = express.Router();

const { getEntries } = require('../controllers/frontController')

router.get('/', getEntries)

module.exports = router;