"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const csvtojson_1 = __importDefault(require("csvtojson"));
const moment_1 = __importDefault(require("moment"));
const _ = __importStar(require("lodash"));
const filePath = path_1.default.join(__dirname, "zero5_simple.csv");
class CarsService {
    list(startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const sDate = (0, moment_1.default)(startDate, "MM/DD/YYYY").startOf("day");
            const eDate = (0, moment_1.default)(endDate, "MM/DD/YYYY").endOf("day");
            const json = yield (0, csvtojson_1.default)().fromFile(filePath);
            let filteredEntries = [];
            json.forEach((c) => {
                c = Object.assign(Object.assign({}, c), { timestamp: moment_1.default.unix(c.timestamp / 1000).utc() });
                if (c.timestamp > sDate && c.timestamp < eDate) {
                    filteredEntries.push(c);
                }
            });
            const groupedCars = _.groupBy(filteredEntries, 'license_plate_number');
            Object.keys(groupedCars).forEach((gc) => {
                console.log(gc);
            });
            return filteredEntries;
        });
    }
}
exports.default = new CarsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2Fycy9zZXJ2aWNlcy9jYXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLDBEQUFrQztBQUNsQyxvREFBNEI7QUFDNUIsMENBQTRCO0FBRzVCLE1BQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFMUQsTUFBTSxXQUFXO0lBT1QsSUFBSSxDQUFDLFNBQWMsRUFBRSxPQUFZOztZQUNyQyxNQUFNLEtBQUssR0FBRyxJQUFBLGdCQUFNLEVBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RCxNQUFNLEtBQUssR0FBRyxJQUFBLGdCQUFNLEVBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV6RCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEsbUJBQVMsR0FBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVsRCxJQUFJLGVBQWUsR0FBUSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFO2dCQUN0QixDQUFDLG1DQUNJLENBQUMsS0FDSixTQUFTLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FDakQsQ0FBQztnQkFDRixJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUFFO29CQUM5QyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN6QjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsc0JBQXNCLENBQUMsQ0FBQTtZQUV0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQU8sRUFBRSxFQUFFO2dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pCLENBQUMsQ0FBQyxDQUFBO1lBRUYsT0FBTyxlQUFlLENBQUM7UUFDekIsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=