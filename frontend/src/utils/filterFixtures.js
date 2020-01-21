export const filterFixtures = (data) => {
  let pastGames = [];
  let futureGames = [];

  const todaysTimestamp = parseInt(
    new Date()
      .getTime()
      .toString()
      .substring(0, 10)
  );

  data.api.fixtures.forEach(game => {
    game.event_timestamp > todaysTimestamp ? futureGames.push(game) : pastGames.push(game);
  });
  
  return {
    pastGames: pastGames.splice(pastGames.length - 4, pastGames.length),
    futureGames: futureGames.splice(0, 4)
  }
};