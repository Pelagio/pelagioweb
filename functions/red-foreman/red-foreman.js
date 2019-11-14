const quotes = require("./quotes");

exports.handler = function(event, context, callback) {
  const { oneLiner } = event.queryStringParameters;
  const justOneLiners = oneLiner === "true";
  const quotesToUse = justOneLiners
    ? quotes.filter(q => q.length === 1)
    : quotes;
  const randomIndex = Math.floor(Math.random() * quotesToUse.length - 1);
  const data = justOneLiners
    ? quotesToUse[randomIndex][0].quote
    : quotesToUse[randomIndex];
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });
};
