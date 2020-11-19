const {Router} = require('express')
const MovimentController = require('../../../modules/finance/controllers/MovimentController')
const authenticated = require('../middlewares/authenticated')

const financeRoutes = Router()

financeRoutes.post('/moviment',authenticated,MovimentController.create)
financeRoutes.delete('/moviment/:id',authenticated,MovimentController.delete)
financeRoutes.get('/moviment',authenticated,MovimentController.index)
financeRoutes.get('/moviment/:id',authenticated,MovimentController.show)
financeRoutes.put('/moviment/:id',authenticated,MovimentController.update)

module.exports = financeRoutes;
