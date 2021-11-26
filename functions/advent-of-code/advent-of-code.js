exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ disIsData: "Frank är sämst" }),
    headers: { "Content-Type": "application/json" }
  });
};
