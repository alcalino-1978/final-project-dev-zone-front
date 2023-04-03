export interface JobOfferCompanyModel {
  _id: string,
  name: string,
  logo: string,
  numberEmployees: number
}

export interface JobOfferApplicantsModel {
  _id: string,
  fullName: string,
  photo: string
}

export interface JobOfferModelAPI {
  _id: string,
  title: string,
  description: string,
  company: JobOfferCompanyModel[],
  salaryRange: {
    min: number,
    max: number
  },
  hiring: {
    shift: string,
    contract: string
  },
  offerStatus: boolean,
  typeJob: string,
  vacancies: number,
  applicants: JobOfferApplicantsModel[],
  keywords: string[],
  createdAt: Date,
  updatedAt: Date
}

export interface JobOfferModel{
  _id: string,
  title: string,
  description: string,
  company: JobOfferCompanyModel[],
  offerStatus: boolean,
  typeJob: string,
  keywords: string[],
  createdAt: Date
}

export interface JobOfferModelPost{
  _id?: string,
  title: string,
  description: string,
  company: string[],
  salaryRange: {
    min: number,
    max: number
  },
  hiring: {
    shift: string,
    contract: string
  },
  offerStatus: boolean,
  typeJob: string,
  vacancies: number,
  keywords: string[]
}

export interface JobOfferModelPut{
  title: string,
  description: string,
  company: string[],
  salaryRange: {
    min: number,
    max: number
  },
  hiring: {
    shift: string,
    contract: string
  },
  offerStatus: boolean,
  typeJob: string,
  vacancies: number,
  keywords: string[]
}
