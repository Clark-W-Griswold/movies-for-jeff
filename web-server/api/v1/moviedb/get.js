// libs
const fetch = require('node-fetch');

// config
const { NODE_ENV } = process.env;
const CONFIG = (NODE_ENV === 'production') ? require('../../../../configs/development.json') : require('../../../../configs/development.json');

const API_KEY = CONFIG.themoviedb.apiKey;

module.exports = async (ctx, next) => {
  const { page, query } = ctx.query;
  const url = `https://api.themoviedb.org/3/search/movie?page=${page}&include_adult=false&language=en-US&api_key=${API_KEY}&query=${query}`;

  const response = await fetch(url);
  const json = await response.json();

  if (response.status !== 200) {
    ctx.status = response.status;
    ctx.throw(response.status, 'An error has occurred.');
  } else {
    ctx.body = json;
  }
}
