import { Router } from "express";
import  { indexController } from '../controllers/indexController'

class IndexRoutes {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{ 
        this.router.get('/', indexController.index); // metodo index
        this.router.post('/',indexController.create); // metodo create
        this.router.delete('/',indexController.delete);
        this.router.put('/:id',indexController.update);
    } 
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;