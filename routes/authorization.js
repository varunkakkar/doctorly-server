const router = require('express').Router();
const {index} = require('../controllers/authorization')
const {log} = require('../middlewares/log')

router.get('/',log,index)

module.exports = router