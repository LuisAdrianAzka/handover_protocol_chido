/** Not copyright I guess
 *
 * This is used for send a Quick reply Payload
 */

'use strict';

//import API helper
const api = require('./api');

// Send a quick reply message
function sendQuickReply(psid, text, title, postback_payload) {

  console.log('SENDING QUICK REPLY');

  let payload = {};

  payload.recipient = {
    id: psid
  }

 console.log(">>>Here is the RecipientID: "+payload.recipient.id);
 console.log(">>>Here is the text: "+text);
 console.log(">>>Here is the title of quick reply: "+title);
 console.log(">>>And postback payload: "+postback_payload);

  payload.message = {
    text: text,
    quick_replies: [{
        content_type: 'text',
        title: title,
        payload: postback_payload
    }]
  }

  api.call('/messages', payload, () => {});
}

module.exports = sendQuickReply;
