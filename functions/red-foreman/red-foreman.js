const quotes = require("./quotes");

exports.handler = function(event, context, callback) {
  const randomIndex = Math.floor(Math.random() * quotes.length - 1);
  console.log({
    randomIndex,
    quote: quotes[randomIndex],
    length: quotes.length,
    event,
    context
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(quotes[randomIndex]),
    headers: { "Content-Type": "application/json" }
  });
};
