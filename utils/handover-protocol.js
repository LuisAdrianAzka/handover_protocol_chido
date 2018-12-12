/**
 *I use Facebook API
 *
 */
'use strict';

//import API helper
const api = require('./api');

function passThreadControl (userPsid, targetAppId) {
  console.log('PASSING THREAD CONTROL')
  let payload = {
    recipient: {
      id: userPsid
    },
    target_app_id: targetAppId
  };
//Para matar al bot XD
  api.call('/pass_thread_control', payload, () => {});
}

function takeThreadControl (userPsid) {
  console.log('TAKING THREAD CONTROL')
  let payload = {
    recipient: {
      id: userPsid
    }
  };
//Para revivir al bot
  api.call('/take_thread_control', payload, () => {});
}

module.exports = {
  passThreadControl,
  takeThreadControl
};
