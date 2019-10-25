import {Request, Response} from 'express';
import db from '../database';

class IndexController{

    /**METODO GET*/
    public index(req: Request,res:Response){
      //db.query('describe obra');
       
      res.json({text: 'Lista de Obras'});
    }
    /**METODO DE CREACION */
    public create(req: Request, res:Response){
        console.log(req.body);
        res.json({ text: 'Creando'});
   }
   public async getAll(req:Request , res:Response){
    console.log("Listar Todo");
    /*const userQuery = function() {
        return new Promise(function (resolve, reject) {
          //CONSULTA
          db.query("SELECT denominacion,cantViviendas  FROM obra WHERE baja=0 AND idEstado = 8 AND idOrganismo = 1", function (err, results, fields) {
            if (err) return reject(err);//VERIFICAR ERROR
            //RETORNAR RESULTADOS
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(results) {
        //console.log('I got results back:', results);
        res.json(results);
      });*/
   }

   /**METODO DE BUSQUEDA DE UNA SOLA OBRA */
   public async getOne(req:Request , res:Response){
    console.log("Solo uno");
    const userQuery = function() {
        return new Promise(function (resolve, reject) {
          //CONSULTA
          db.query("SELECT denominacion FROM obra WHERE baja=0 AND ", function (err, results, fields) {
            if (err) return reject(err);//VERIFICAR ERROR
            //RETORNAR RESULTADOS
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(results) {
        //console.log('I got results back:', results);
        res.json(results);
      });
   }

   /**METODO DE BORRADO */
   public delete(req: Request, res:Response){
    res.json({ text: 'Borrando'});
    } 

    /**METODO DE MODIFICACION */
    public update(req: Request, res:Response){
        res.json({ text: 'Update ' + req.params.id });
    } 
}


export const indexController = new IndexController();