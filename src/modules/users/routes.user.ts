import { Express, Router } from "express";
import { UserController } from "./controllers/user.controller";
import { SharedMiddleware } from "../../shared/middlewares/shared.middleware";
import MulterConfig from "../../config/multer";
export class RoutesUser {
  private controller: UserController;
  private middleware: SharedMiddleware;
  private multerConfig: MulterConfig;

  constructor(router: Router, controller: UserController) {
    this.controller = controller;
    this.middleware = new SharedMiddleware();
    this.multerConfig = new MulterConfig();
    this.configureRoutes(router);
  }

  private configureRoutes(router: Router) {
    /**
     * Post track
     * @swagger
     * /get-users:
     *    get:
     *      tags:
     *        - User
     *      summary: Lista los username de los usuarios registrados.
     *      description: Responde solo el defixId de los usuarios.
     *      responses:
     *        '200':
     *          description: Responde un Array con la lista de usuarios.
     *        '400':
     *          description: Bad Request.
     *        '500':
     *          description: Bad Request.
     */
    router.get("/get-users", this.controller.getUsers);
  }
}
