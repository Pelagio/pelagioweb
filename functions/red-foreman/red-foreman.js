const quotes = require("./quotes");

exports.handler = function(event, context, callback) {
  const randomIndex = Math.floor(Math.random() * quotes.length - 1);
  console.log({ randomIndex, quote: quotes[randomIndex] });

  callback(null, {
    statusCode: 200,
    body: quotes[randomIndex]
  });
};
