import { Router } from "express";
import  { obraController } from '../controllers/obraController'

class ObraRoutes {
    
    public router : Router = Router();

    constructor(){
        this.config();
    }

    config(): void{ 
        this.router.get('/', obraController.getAll); // metodo Obra
        this.router.get('/:id',obraController.getOne);
        this.router.post('/',obraController.create); // metodo create
        this.router.delete('/',obraController.delete);
        this.router.put('/:id',obraController.update);
        
    } 
}

const obraRoutes = new ObraRoutes();
export default obraRoutes.router;