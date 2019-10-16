"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obraController_1 = require("../controllers/obraController");
class ObraRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', obraController_1.obraController.getAll); // metodo Obra
        this.router.get('/:id', obraController_1.obraController.getOne);
        this.router.post('/', obraController_1.obraController.create); // metodo create
        this.router.delete('/', obraController_1.obraController.delete);
        this.router.put('/:id', obraController_1.obraController.update);
    }
}
const obraRoutes = new ObraRoutes();
exports.default = obraRoutes.router;
