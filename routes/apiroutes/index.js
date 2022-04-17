const router = require('express').Router();
const apiroutes = require('../apiroutes/apiroutes');

router.use(apiroutes);

module.exports = router;