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
        res.json({ text: 'Creando'});
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