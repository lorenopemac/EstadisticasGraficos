"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.indexController.getAll); // metodo index
        this.router.post('/', indexController_1.indexController.create); // metodo create
        this.router.delete('/', indexController_1.indexController.delete);
        this.router.put('/:id', indexController_1.indexController.update);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
