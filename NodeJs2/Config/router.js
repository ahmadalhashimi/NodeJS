const express = require('express')
const app = express()
const controller = require("../controllers/controller")
const router = express.Router()

router.get('/', controller.homepage)
router.get ('/about', controller.about)
router.get ('/contact', controller.contact)

module.exports = router