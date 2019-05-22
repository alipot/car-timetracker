export interface CRUD {
  list: (startDate: any, endDate: any) => Promise<any>;
  create: (resource: any) => Promise<any>;
  putById: (id: string, resource: any) => Promise<string>;
  readById: (id: string) => Promise<any>;
  deleteById: (id: string) => Promise<string>;
  patchById: (id: string, resource: any) => Promise<string>;
}
