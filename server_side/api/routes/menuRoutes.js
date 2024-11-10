import express from "express";
import {menuController} from '../controllers/menuControllers.js';

const menuRoutes = express.Router();

// get all menu items
menuRoutes.get('/', menuController.getAllMenuItems )

// post a menu item
menuRoutes.post('/', menuController.postMenuItem);

// delete a menu item
menuRoutes.delete('/:id', menuController.deleteMenuItem);

// get single menu item
menuRoutes.get('/:id', menuController.singleMenuItem);

// update single menu item
menuRoutes.patch('/:id', menuController.updateMenuItem)

export default menuRoutes;