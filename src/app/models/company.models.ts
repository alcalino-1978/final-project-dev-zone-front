export interface CompanyModelAPI {
    _id: string,
    email: string,
    password: string,
    name: string,
    description:string,
    logo: string,
    cif: string,
    listOfferts: [string],
    numberEmployees: string,
    updatedAt: string
  }

  export interface CompanyModelData {
    user: CompanyModelAPI;
  }
