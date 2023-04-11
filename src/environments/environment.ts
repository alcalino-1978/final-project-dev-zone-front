const urlBase = 'https://singular-profiterole-5fb244.netlify.app/v1';


export const environment = {
  production: false,
  urlBase: `${urlBase}`,
  urlImage: 'https://cdn2.thecatapi.com/images/',
  // urlUsers: 'http://localhost:3000/users/',
  urlUsers: 'https://singular-profiterole-5fb244.netlify.app/users/',

  urlCompany: `${urlBase}/companies/`,
  urlDevelopers: `${urlBase}/developers/`,
  urlJobOffers: `${urlBase}/joboffers/`,

  UNSPLASH_API_KEY: process.env['NG_APP_UNSPLASH_API_KEY'],
  urlUnsplash: `https://api.unsplash.com/photos/random/?query=developer&orientation=landscape&client_id=${process.env['NG_APP_UNSPLASH_API_KEY']}`,
  DEEP_PL_API_KEY: '41628d45-0951-8d10-0921-34e67e2f5d60:fx',
  CATS_API_KEY: process.env['NG_APP_CATS_API_KEY'],
  USER_API_KEY: process.env['NG_APP_USER_API_KEY'],
};
