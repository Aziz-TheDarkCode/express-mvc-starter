const express = require('express');
const userRoutes = require('./user')

const router = express.Router();

router.get('/',(req,res) => {
    res.render('index')
})
router.use('/user',userRoutes)

module.exports = router