import path from "path";
import csvtojson from "csvtojson";
import moment from "moment";
import * as _ from "lodash";
import { CRUD } from "../../common/interfaces/crud.interface";

const filePath = path.join(__dirname, "zero5_simple.csv");

class CarsService implements CRUD {
  create!: (resource: any) => Promise<any>;
  putById!: (id: string, resource: any) => Promise<string>;
  readById!: (id: string) => Promise<any>;
  deleteById!: (id: string) => Promise<string>;
  patchById!: (id: string, resource: any) => Promise<string>;

  async list(startDate: any, endDate: any) {
    const sDate = moment(startDate, "MM/DD/YYYY").startOf("day");
    const eDate = moment(endDate, "MM/DD/YYYY").endOf("day");

    const json = await csvtojson().fromFile(filePath);

    let filteredEntries: any = [];
    json.forEach((c: any) => {
      c = {
        ...c,
        timestamp: moment.unix(c.timestamp / 1000).utc(),
      };
      if (c.timestamp > sDate && c.timestamp < eDate) {
        filteredEntries.push(c);
      }
    });

    const groupedCars = _.groupBy(filteredEntries, 'license_plate_number')

    Object.keys(groupedCars).forEach((gc: any) => {
      console.log(gc)
    })

    return filteredEntries;
  }
}

export default new CarsService();
