"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    /**METODO GET*/
    index(req, res) {
        //db.query('describe obra');
        res.json({ text: 'Lista de Obras' });
    }
    /**METODO DE CREACION */
    create(req, res) {
        res.json({ text: 'Creando' });
    }
    /**METODO DE BORRADO */
    delete(req, res) {
        res.json({ text: 'Borrando' });
    }
    /**METODO DE MODIFICACION */
    update(req, res) {
        res.json({ text: 'Update ' + req.params.id });
    }
}
exports.indexController = new IndexController();
