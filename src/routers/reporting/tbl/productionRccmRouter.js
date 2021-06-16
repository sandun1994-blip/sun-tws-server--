const express = require('express')
const router = new express.Router()
const { json } = require('express')
const {getProductionRccm,insertProductionRccm,updateProductionRccm,getOneProductionRccm,deleteMom,getSucess,getAllSucess}=require('../../../controller/reporting/tbl/productionRccmController')

router.post('/production/rccm',insertProductionRccm)
router.get('/production/rccm',getProductionRccm)

router.put('/production/rccm/:id/update',updateProductionRccm)
router.get('/production/rccm/:id',getOneProductionRccm)


// router.delete('/mom/:id/delete',deleteMom)
// router.post('/mom/sucess',getSucess)
// router.get('/mom/sucess/:dateOne/:dateTwo',getAllSucess)
module.exports = router