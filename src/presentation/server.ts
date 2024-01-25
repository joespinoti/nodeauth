
import express, { Router } from 'express';

interface Options {
    port?: number;
    routes: Router;
}

export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const {port = 3100, routes} = options;
        this.port = port;
        this.routes = routes;
    }
    async start() {
        //Middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        //Usar las rutas definidas
        this.app.use(this.routes);
        this.app.listen(this.port, () => {
            console.log(`Server runnning on port ${this.port}`)
        });
    }
}