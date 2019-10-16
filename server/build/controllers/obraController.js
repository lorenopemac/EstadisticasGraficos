"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ObraController {
    /**METODO GET*/
    Obra(req, res) {
        //db.query('describe obra');
        res.json({ text: 'Lista de Obras' });
    }
    /**METODO DE CREACION */
    create(req, res) {
        console.log(req.body);
        res.json({ text: 'Creando' });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userQuery = function () {
                return new Promise(function (resolve, reject) {
                    //CONSULTA
                    database_1.default.query("SELECT denominacion FROM obra WHERE baja=0 AND idEstado = 8 AND idOrganismo = 1", function (err, results, fields) {
                        if (err)
                            return reject(err); //VERIFICAR ERROR
                        //RETORNAR RESULTADOS
                        return resolve(results);
                    });
                });
            };
            userQuery().then(function (results) {
                //console.log('I got results back:', results);
                res.json(results);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userQuery = function () {
                return new Promise(function (resolve, reject) {
                    //CONSULTA
                    database_1.default.query("SELECT denominacion FROM obra WHERE baja=0 AND idEstado = 8 AND idOrganismo = 1", function (err, results, fields) {
                        if (err)
                            return reject(err); //VERIFICAR ERROR
                        //RETORNAR RESULTADOS
                        return resolve(results);
                    });
                });
            };
            userQuery().then(function (results) {
                //console.log('I got results back:', results);
                res.json(results);
            });
        });
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
exports.obraController = new ObraController();
