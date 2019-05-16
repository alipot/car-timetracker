import express from "express";
import carsService from "../services/cars.service";

class CarsController {
  async listCars(req: express.Request, res: express.Response) {
    const { startDate, endDate } = req.query;
    const users = await carsService.list(startDate, endDate);
    res.status(200).send(users);
  }
}

export default new CarsController();
