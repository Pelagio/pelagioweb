const quotes = require("./quotes");

exports.handler = function(event, context, callback) {
  const { oneLiner, requireDumbass } = event.queryStringParameters;
  const justOneLiners = oneLiner === "true";
  const shouldRequireDumbass = requireDumbass === "true";
  let quotesToUse = quotes;

  if (justOneLiners) {
    quotesToUse = quotesToUse.filter(q => q.length === 1);
  }
  if (shouldRequireDumbass) {
    quotesToUse = quotesToUse.filter(c =>
      c.some(q => q.quote.includes("dumbass"))
    );
  }
  const randomIndex = Math.max(
    Math.floor(Math.random() * quotesToUse.length) - 1,
    0
  );
  const data = justOneLiners
    ? quotesToUse[randomIndex][0].quote
    : quotesToUse[randomIndex];
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });
};
