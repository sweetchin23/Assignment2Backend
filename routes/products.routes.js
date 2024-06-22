
import express from 'express';
import {
    create,
    findAll,
    findOne,
    update,
    remove,
    removeAll,
    findByName
} from '../controllers/products.controller.js';

const router = express.Router();

router.post('/products', create);
router.get('/products', findAll);
router.get('/products/:id', findOne);
router.put('/products/:id', update);
router.delete('/products/:id', remove);
router.delete('/products', removeAll);
router.get('api/products', findByName);

export default router;
