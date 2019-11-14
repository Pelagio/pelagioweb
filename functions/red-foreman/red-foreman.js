const quotes = require("./quotes");

exports.handler = function(event, context, callback) {
  const { oneLiner } = event.queryStringParameters;
  const quotesToUse =
    oneLiner === "true" ? quotes.filter(quotes => quotes.length === 1) : quotes;
  const randomIndex = Math.floor(Math.random() * quotesToUse.length - 1);
  console.log({ quotesToUse, randomIndex });
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(quotesToUse[randomIndex]),
    headers: { "Content-Type": "application/json" }
  });
};
