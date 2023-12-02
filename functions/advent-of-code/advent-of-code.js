const fetch = require("node-fetch");
const { parseAOCData } = require("./parse");

let cachedResponse = null;
let cachedAt = null;

exports.handler = async function(event, context, callback) {
  return new Promise(async (resolve, reject) => {
    let data = null;
    if (cachedResponse && cachedAt && Date.now() - cachedAt < 1000 * 60 * 60) {
      console.log("RETURNING CACHED DATA");
      data = { ...cachedResponse };
    } else {
      console.log("CALLING API");
      const newData = await (await fetch(
        "https://adventofcode.com/2023/leaderboard/private/view/1065422.json",
        {
          headers: {
            cookie: `session=${process.env.AOC_SESSION};`
          }
        }
      )).json();
      data = parseAOCData({ ...newData });
      cachedAt = new Date();
      cachedResponse = data;
    }
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });
  });
};
