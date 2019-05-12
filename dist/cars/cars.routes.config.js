"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsRoutes = void 0;
const cars_controller_1 = __importDefault(require("./controllers/cars.controller"));
const common_routes_config_1 = require("../common/common.routes.config");
class CarsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "CarsRoutes");
    }
    configureRoutes() {
        this.app.route("/cars").get(cars_controller_1.default.listCars);
        return this.app;
    }
}
exports.CarsRoutes = CarsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY2Fycy9jYXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsb0ZBQTJEO0FBQzNELHlFQUFvRTtBQUVwRSxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDaEQsWUFBWSxHQUFnQjtRQUMxQixLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLHlCQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQVZELGdDQVVDIn0=