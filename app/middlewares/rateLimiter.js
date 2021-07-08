const rateLimit = require('express-rate-limit')

const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 10 * 1000, 
  max: 10,
  message: 'You have exceeded 10 requests in 10 seconds...please try after sometime!', 
  headers: true,
});

module.exports = rateLimiterUsingThirdParty