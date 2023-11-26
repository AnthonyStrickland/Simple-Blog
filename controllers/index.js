const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

router.use('/home', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;