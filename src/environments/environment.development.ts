export const environment = {
  production: false,
  urlBase: 'http://localhost:3000/v1/',
  urlImage: 'https://cdn2.thecatapi.com/images/',
  // urlUsers: 'http://localhost:3000/users/',
  urlUsers: 'https://final-project-node-ten.vercel.app/users/',

  urlCompany: 'http://localhost:3000/v1/companies/',
  urlDevelopers: 'http://localhost:3000/v1/developers/',
  urlJobOffers: 'http://localhost:3000/v1/joboffers/',
  
  UNSPLASH_API_KEY: process.env['NG_APP_UNSPLASH_API_KEY'],
  urlUnsplash: `https://api.unsplash.com/photos/random/?query=developer&orientation=landscape&client_id=${process.env['NG_APP_UNSPLASH_API_KEY']}`,
  DEEP_PL_API_KEY: '41628d45-0951-8d10-0921-34e67e2f5d60:fx',
  CATS_API_KEY: process.env['NG_APP_CATS_API_KEY'],
  USER_API_KEY: process.env['NG_APP_USER_API_KEY'],
};
