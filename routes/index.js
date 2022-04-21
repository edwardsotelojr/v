const {Router} = require('express')
const router = Router()
const {signup, deleteUser} = require('../controllers/user.js')
router.post('/signup', signup)
router.delete('/deleteUser', deleteUser)
module.exports = router