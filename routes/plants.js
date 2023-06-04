const router = require('express').Router()
const plantsCtrl = require('../controllers/plants.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, plantsCtrl.create)
router.get('/', checkAuth, plantsCtrl.index)
router.put('/:id', checkAuth, plantsCtrl.update)
router.delete('/:id', checkAuth, plantsCtrl.deletePlant)

module.exports = router
