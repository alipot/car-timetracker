import { Application, Request, Response, NextFunction } from "express";

import CarsController from "./controllers/cars.controller";
import { CommonRoutesConfig } from "../common/common.routes.config";

export class CarsRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, "CarsRoutes");
  }

  configureRoutes() {
    this.app.route("/cars").get(CarsController.listCars);

    return this.app;
  }
}
