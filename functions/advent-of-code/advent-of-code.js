const fetch = require("node-fetch");

exports.handler = async function(event, context, callback) {
  return new Promise(async (resolve, reject) => {
    const data = await (await fetch(
      "https://adventofcode.com/2021/leaderboard/private/view/1065422.json",
      {
        headers: {
          cookie: `session=${process.env.AOC_SESSION};`
        }
      }
    )).text();
    console.log({ data });
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
  });
};
