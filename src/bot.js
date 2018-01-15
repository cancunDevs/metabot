const { RtmClient, RTM_EVENTS } = require('@slack/client');
require('dotenv').config();

const token = process.env.SLACK_BOT_TOKEN;
const options = { logLevel: 'error' };
const rtm = new RtmClient(token, options);

rtm.on(RTM_EVENTS.MESSAGE, message => {
  console.log('Message Object: ', message);
});

module.exports = { listen: () => rtm.start() };
