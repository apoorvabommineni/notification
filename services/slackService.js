const axios = require('axios');

exports.sendSlackMessage = async (channel, message) => {
  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text: `${channel}: ${message}`
  });
};