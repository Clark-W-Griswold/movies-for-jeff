// libs
import querystring from 'query-string';

export default (serviceName, params) => {
  switch (serviceName) {
    case 'get_movies_list':
      return {
        url: `api/v1/movies?${querystring.stringify(params)}`,
        method: 'GET',
      };
    default:
      throw new Error('SERVICE NAME NOT FOUND');
  }
};
