/**
 * It's used for get the API calls
 * initialize Graph Facebook calls :3
 */
'use strict';
const env = require('../env'),
      request = require('request');

function call (path, payload, callback) {
  const access_token = process.env.PAGE_ACCESS_TOKEN || env.PAGE_ACCESS_TOKEN;
  const graph_url = 'https://graph.facebook.com/me';

  if (!path) {
    console.error('No endpoint specified on Messenger send!');
    return;
  } else if (!access_token || !graph_url) {
    console.error('No Page access token or graph API url configured!');
    return;
  }

  request({
    uri: graph_url + path,
    qs: {'access_token': access_token},
    method: 'POST',
    json: payload,
  }, (error, response, body) => {
    console.log(body)
    if (!error && response.statusCode === 200) {
      console.log('Message sent succesfully');
      console.log('Its a path: 'graph_url + path);
    } else {
      console.error('Error: ' + error);
    }
    callback(body);
  });
};

module.exports = {
  call
};
