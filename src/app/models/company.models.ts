export interface CompanyModelAPI {
    _id: string,
    email: string,
    password: string,
    name: string,
    description:string,
    logo: string,
    cif: string,
    listOffers: [{
      _id: string,
      title: string,
      createdAt: string
    }],
    numberEmployees: string,
    updatedAt: string
    createdAt: string
  }

  export interface CompanyModelData {
    user: CompanyModelAPI;
  }
