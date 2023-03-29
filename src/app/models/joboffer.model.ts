export interface JobOfferCompanyModel {
  id: string,
  name: string,
  logo: string,
  numberEmployees: number
}

export interface JobOfferApplicantsModel {
  id: string,
  fullName: string,
  photo: string
}

export interface JobOfferModelAPI {
  id: string,
  title: string,
  description: string,
  company: [JobOfferCompanyModel],
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
  applicants: [JobOfferApplicantsModel],
  keywords: [string],
  createdAt: string,
  updatedAt: string
}

export interface JobOfferModel{
  id: string,
  title: string,
  description: string,
  company: [JobOfferCompanyModel],
  offerStatus: boolean,
  typeJob: string,
  keywords: [string],
}
