const express = require("express");
const router = express.Router();
const appController = require('../controllers/appController')
const { authJwt } = require("../middleware/authJwt");
router.route('/').get(appController.index)
router.route('/sinonim').get(appController.sinonim)
// router.put('/:id',async(req,res,next)=>{
//     const id = req.params.id
//     res.json(id)
// })
module.exports = router;