const pino = require('pino');
const fs = require('fs');
const logStream = fs.createWriteStream('./logs/notifications.log', { flags: 'a' });

const logger = pino(
  {
    transport: {
      targets: [
        {
          level: 'info',
          target: 'pino/file',
          options: { destination: './logs/notifications.log' },
        },
      ],
    },
  },
  logStream
);

module.exports = logger;