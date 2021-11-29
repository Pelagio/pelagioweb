const PLAYER_COLORS = JSON.parse(process.env.AOC_PLAYER_COLORS);

function parseAOCData(inputData) {
  const year = parseInt(inputData.event);
  const players = Object.values(inputData.members);

  const loopDate = new Date(inputData.event + "-12-01");

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const days = [];
  let currentDay = -1;
  do {
    const dayData = { day: loopDate.getDate(), color: "" };
    currentDay = loopDate.getDate();
    loopDate.setDate(loopDate.getDate() + 1);

    if (loopDate.getTime() < tomorrow.getTime()) {
      let bestPlayer = { name: "noone", score: -1 };
      for (let player of players) {
        const { completion_day_level = {} } = player;
        const playerDayData = completion_day_level[dayData.day];
        if (
          playerDayData &&
          playerDayData["2"] &&
          playerDayData["2"].get_star_ts > bestPlayer.score
        ) {
          bestPlayer = {
            name: player.name,
            score: playerDayData["2"].get_star_ts
          };
        }
      }

      dayData.color = PLAYER_COLORS[bestPlayer.name] || "";
    }

    days.push(dayData);
  } while (loopDate.getDate() > 1);

  return { days, year, currentDay };
}

module.exports = {
  parseAOCData
};
