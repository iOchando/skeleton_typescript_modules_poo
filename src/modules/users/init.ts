import { Express, Router } from "express";
import { UserController } from "./controllers/user.controller";
import { RoutesUser } from "./routes.user";

export class UsersModule {
  public routes: RoutesUser;

  constructor(router: Router) {
    this.routes = new RoutesUser(router, new UserController());
  }
}
