const router = require('express').Router()
const { store, index } = require('../controllers/category.controller')
const { verifyUser } = require('../middleware/verify')
router.post('/', verifyUser, store)
router.get('/', verifyUser, index)

module.exports = router