const { RtmClient } = require('@slack/client');

const token = process.env.SLACK_BOT_TOKEN;
const options = { logLevel: 'error' };
const rtm = new RtmClient(token, options);

rtm.start();
