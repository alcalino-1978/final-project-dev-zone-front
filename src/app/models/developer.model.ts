export interface CatModelAPI {
  id: string,
  name: string,
  weight: {
    imperial: string,
    metric: string
  },
  temperament: string,
  origin: string,
  country_codes: string,
  country_code: string,
  description: string,
  life_span: string,
  adaptability: number,
  affection_level: number,
  child_friendly: number,
  cat_friendly: number,
  dog_friendly: number,
  energy_level: number,
  grooming: number,
  health_issues: number,
  intelligence: number,
  shedding_level: number,
  social_needs: number,
  stranger_friendly: number,
  vocalisation: number,
  bidability?: number,
  experimental: number,
  hairless: boolean,
  wikipedia_url: string,
  hypoallergenic: boolean,
  reference_image_id: string,
  image: {
    id: string,
    width: number,
    height: number,
    url: string
  }
}

export interface CatModelUnsplashAPI {
  description: string,
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string,
    small_s3: string
  }
}

