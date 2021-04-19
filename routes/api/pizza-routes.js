const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');
router.route('/').get(getAllPizza).post(createPizza)

router.route('/:id').get(getPizzaById).put(updatePizza).delete(deletePizza)
// // is this same as this
// router.get('/', getCallbackFunction);
// router.post('/' postCallbackFunction);

module.exports=router