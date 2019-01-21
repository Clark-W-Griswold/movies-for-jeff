// helpers
import { ErrorHandler } from 'helpers/error-handler';

export default async (request, options) => {
  if (!request) return;

  const headerOptions = options?.headers || {};

  const body = request?.body;
  const { method = 'GET', url } = request;

  if (!url) throw new Error('url is undefined in fetch-client');

  const headers = {
    'content-type': 'application/json',
    ...headerOptions,
    withCredentials: true,
  };

  return fetch(url, {
    body,
    cache: 'no-cache',
    headers: headers,
    method: method,
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
  })
    .then(response => {
      if (!response.ok) {
        throw {
          error: {
            status: response.status,
            message: response.statusText,
          },
        };
      }
      return response.json();
    })
    .then(json => {
      return json;
    })
    .catch(error => {
      ErrorHandler(error);
      if (error) return error;
    });
};
