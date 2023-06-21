import "dotenv/config";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./config/swagger";
import { UsersModule } from "./modules/users/init";

class App {
  public app: express.Express;
  public router: express.Router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.config();
    this.initModules();
  }

  private config() {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use("/api/v1", this.router);
    this.app.use("/uploads", express.static(path.resolve("./uploads/")));
    this.app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSetup));
  }

  private initModules() {
    new UsersModule(this.router);
  }
}

export default new App().app;
