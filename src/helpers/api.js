import fetch from 'isomorphic-fetch';

const headers = {
  GET: {
    'Content-Type': 'application/vnd.api+json',
  },
  POST: {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json',
  },
};

const { API_URL } = process.env;

function constructUrl(path) {
  return `${!path.includes('http') ? API_URL : ''}${path}`;
}

function checkStatus(response) {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    return response;
  }
  const error = new Error(statusText);
  error.status = response.status;

  throw error;
}

export default function request(uri, method = 'GET', data = {}) {
  const { body } = data;
  const options = {
    headers: headers[method],
    method,
  };

  if (method === 'POST' || method === 'PUT') {
    options.body = JSON.stringify({
      data: {
        attributes: body,
      },
    });
  }

  const url = constructUrl(uri);
  return fetch(url, options)
    .then(checkStatus)
    .catch((e) => { throw new Error(e); });
}
