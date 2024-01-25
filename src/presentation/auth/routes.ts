import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDataSourceImpl, AuthRepositoryImpl } from "../../infrastructure";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();
        const datasource = new AuthDataSourceImpl();
        const authRepository = new AuthRepositoryImpl(datasource);
        const controller = new AuthController(authRepository);
        //Definir todas las rutas principales
        router.use('/login', controller.loginUser);
        router.use('/register', controller.registerUser);
        return router;
    }
}