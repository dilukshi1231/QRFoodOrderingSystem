import express from 'express';
import {cartController} from '../controllers/cartControllers.js';
import verifyToken from '../middleware/verifyToken.js';
const cartRoutes = express.Router();

cartRoutes.get('/',verifyToken, cartController.getCartByEmail);
cartRoutes.post('/', cartController.addToCart);
cartRoutes.delete('/:id', cartController.deleteCart)
cartRoutes.put('/:id', cartController.updateCart)
cartRoutes.get('/:id', cartController.getSingleCart)

export default cartRoutes;