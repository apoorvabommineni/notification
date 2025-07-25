const express = require('express');
const router = express.Router();

const emailService = require('../services/emailService');
const smsService = require('../services/smsService');
const slackService = require('../services/slackService');
const logger = require('../utils/logger');

const channelHandlers = {
  email: emailService.sendEmail,
  sms: smsService.sendSMS,
  slack: slackService.sendSlackMessage,
};

router.post('/noticationPost', async (req, res) => {
  const { message, recipients } = req.body;
  const results = [];

  for (const recipient of recipients) {
    const handler = channelHandlers[recipient.type];
    if (handler) {
      try {
        await handler(recipient.to, message);
        results.push({ ...recipient, status: 'sent' });
        logger.info({ to: recipient.to, type: recipient.type, status: 'sent' });
      } catch (error) {
        results.push({ ...recipient, status: 'failed', error: error.message });
        logger.error({ to: recipient.to, type: recipient.type, status: 'failed', error: error.message });
      }
    } else {
      results.push({ ...recipient, status: 'failed', error: 'Invalid channel' });
      logger.error({ to: recipient.to, type: recipient.type, status: 'failed', error: 'Invalid channel' });
    }
  }

  res.status(207).json({ results });
});

module.exports = router;