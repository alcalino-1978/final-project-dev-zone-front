export const environment = {
  production: true,
  url: 'https://api.thecatapi.com/v1/',
  urlImage: 'https://cdn2.thecatapi.com/images/',
  urlUsers: 'https://final-project-node-ten.vercel.app/users/',
  UNSPLASH_API_KEY: process.env['NG_APP_UNSPLASH_API_KEY'],
  urlUnsplash: `https://api.unsplash.com/photos/random/?query=cat&orientation=landscape&client_id=${process.env['NG_APP_UNSPLASH_API_KEY']}`,
  DEEP_PL_API_KEY: '41628d45-0951-8d10-0921-34e67e2f5d60:fx',
  CATS_API_KEY: process.env['NG_APP_CATS_API_KEY'],
  USER_API_KEY: process.env['NG_APP_USER_API_KEY'],
};
