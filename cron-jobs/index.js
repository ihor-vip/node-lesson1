const cron = require('node-cron');

const removeOldTokens = require('./remove-old-tokens.cron');

module.exports = () => {
  cron.schedule('0 * * * *', removeOldTokens);
};
