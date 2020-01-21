export const formatLeagueTableData = (teams) => {
  if (!teams) {
    teams = [
        {
          "rank": 1,
          "team_id": 40,
          "teamName": "Liverpool",
          "logo": "https:\/\/media.api-football.com\/teams\/40.png",
          "group": "Premier League",
          "forme": "WWWWW",
          "status": "same",
          "description": "Promotion - Champions League (Group Stage)",
          "all": {
            "matchsPlayed": 20,
            "win": 19,
            "draw": 1,
            "lose": 0,
            "goalsFor": 49,
            "goalsAgainst": 14
          },
          "home": {
            "matchsPlayed": 11,
            "win": 11,
            "draw": 0,
            "lose": 0,
            "goalsFor": 29,
            "goalsAgainst": 9
          },
          "away": {
            "matchsPlayed": 9,
            "win": 8,
            "draw": 1,
            "lose": 0,
            "goalsFor": 20,
            "goalsAgainst": 5
          },
          "goalsDiff": 35,
          "points": 58,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 2,
          "team_id": 46,
          "teamName": "Leicester",
          "logo": "https:\/\/media.api-football.com\/teams\/46.png",
          "group": "Premier League",
          "forme": "WWLLD",
          "status": "same",
          "description": "Promotion - Champions League (Group Stage)",
          "all": {
            "matchsPlayed": 21,
            "win": 14,
            "draw": 3,
            "lose": 4,
            "goalsFor": 46,
            "goalsAgainst": 19
          },
          "home": {
            "matchsPlayed": 10,
            "win": 7,
            "draw": 2,
            "lose": 1,
            "goalsFor": 19,
            "goalsAgainst": 9
          },
          "away": {
            "matchsPlayed": 11,
            "win": 7,
            "draw": 1,
            "lose": 3,
            "goalsFor": 27,
            "goalsAgainst": 10
          },
          "goalsDiff": 27,
          "points": 45,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 3,
          "team_id": 50,
          "teamName": "Manchester City",
          "logo": "https:\/\/media.api-football.com\/teams\/50.png",
          "group": "Premier League",
          "forme": "WWLWW",
          "status": "same",
          "description": "Promotion - Champions League (Group Stage)",
          "all": {
            "matchsPlayed": 21,
            "win": 14,
            "draw": 2,
            "lose": 5,
            "goalsFor": 56,
            "goalsAgainst": 24
          },
          "home": {
            "matchsPlayed": 11,
            "win": 8,
            "draw": 1,
            "lose": 2,
            "goalsFor": 29,
            "goalsAgainst": 10
          },
          "away": {
            "matchsPlayed": 10,
            "win": 6,
            "draw": 1,
            "lose": 3,
            "goalsFor": 27,
            "goalsAgainst": 14
          },
          "goalsDiff": 32,
          "points": 44,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 4,
          "team_id": 49,
          "teamName": "Chelsea",
          "logo": "https:\/\/media.api-football.com\/teams\/49.png",
          "group": "Premier League",
          "forme": "DWLWL",
          "status": "same",
          "description": "Promotion - Champions League (Group Stage)",
          "all": {
            "matchsPlayed": 21,
            "win": 11,
            "draw": 3,
            "lose": 7,
            "goalsFor": 36,
            "goalsAgainst": 29
          },
          "home": {
            "matchsPlayed": 10,
            "win": 4,
            "draw": 2,
            "lose": 4,
            "goalsFor": 11,
            "goalsAgainst": 10
          },
          "away": {
            "matchsPlayed": 11,
            "win": 7,
            "draw": 1,
            "lose": 3,
            "goalsFor": 25,
            "goalsAgainst": 19
          },
          "goalsDiff": 7,
          "points": 36,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 5,
          "team_id": 33,
          "teamName": "Manchester United",
          "logo": "https:\/\/media.api-football.com\/teams\/33.png",
          "group": "Premier League",
          "forme": "LWWLD",
          "status": "same",
          "description": "Promotion - Europa League (Group Stage)",
          "all": {
            "matchsPlayed": 21,
            "win": 8,
            "draw": 7,
            "lose": 6,
            "goalsFor": 32,
            "goalsAgainst": 25
          },
          "home": {
            "matchsPlayed": 10,
            "win": 5,
            "draw": 4,
            "lose": 1,
            "goalsFor": 20,
            "goalsAgainst": 10
          },
          "away": {
            "matchsPlayed": 11,
            "win": 3,
            "draw": 3,
            "lose": 5,
            "goalsFor": 12,
            "goalsAgainst": 15
          },
          "goalsDiff": 7,
          "points": 31,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 6,
          "team_id": 47,
          "teamName": "Tottenham",
          "logo": "https:\/\/media.api-football.com\/teams\/47.png",
          "group": "Premier League",
          "forme": "LDWLW",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 8,
            "draw": 6,
            "lose": 7,
            "goalsFor": 36,
            "goalsAgainst": 30
          },
          "home": {
            "matchsPlayed": 10,
            "win": 6,
            "draw": 2,
            "lose": 2,
            "goalsFor": 21,
            "goalsAgainst": 10
          },
          "away": {
            "matchsPlayed": 11,
            "win": 2,
            "draw": 4,
            "lose": 5,
            "goalsFor": 15,
            "goalsAgainst": 20
          },
          "goalsDiff": 6,
          "points": 30,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 7,
          "team_id": 39,
          "teamName": "Wolves",
          "logo": "https:\/\/media.api-football.com\/teams\/39.png",
          "group": "Premier League",
          "forme": "LLWWL",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 7,
            "draw": 9,
            "lose": 5,
            "goalsFor": 30,
            "goalsAgainst": 27
          },
          "home": {
            "matchsPlayed": 10,
            "win": 4,
            "draw": 4,
            "lose": 2,
            "goalsFor": 16,
            "goalsAgainst": 14
          },
          "away": {
            "matchsPlayed": 11,
            "win": 3,
            "draw": 5,
            "lose": 3,
            "goalsFor": 14,
            "goalsAgainst": 13
          },
          "goalsDiff": 3,
          "points": 30,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 8,
          "team_id": 62,
          "teamName": "Sheffield Utd",
          "logo": "https:\/\/media.api-football.com\/teams\/62.png",
          "group": "Premier League",
          "forme": "LLDWW",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 7,
            "draw": 8,
            "lose": 6,
            "goalsFor": 23,
            "goalsAgainst": 21
          },
          "home": {
            "matchsPlayed": 10,
            "win": 4,
            "draw": 2,
            "lose": 4,
            "goalsFor": 12,
            "goalsAgainst": 10
          },
          "away": {
            "matchsPlayed": 11,
            "win": 3,
            "draw": 6,
            "lose": 2,
            "goalsFor": 11,
            "goalsAgainst": 11
          },
          "goalsDiff": 2,
          "points": 29,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 9,
          "team_id": 52,
          "teamName": "Crystal Palace",
          "logo": "https:\/\/media.api-football.com\/teams\/52.png",
          "group": "Premier League",
          "forme": "DDWLD",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 7,
            "draw": 7,
            "lose": 7,
            "goalsFor": 19,
            "goalsAgainst": 23
          },
          "home": {
            "matchsPlayed": 10,
            "win": 4,
            "draw": 3,
            "lose": 3,
            "goalsFor": 9,
            "goalsAgainst": 9
          },
          "away": {
            "matchsPlayed": 11,
            "win": 3,
            "draw": 4,
            "lose": 4,
            "goalsFor": 10,
            "goalsAgainst": 14
          },
          "goalsDiff": -4,
          "points": 28,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 10,
          "team_id": 42,
          "teamName": "Arsenal",
          "logo": "https:\/\/media.api-football.com\/teams\/42.png",
          "group": "Premier League",
          "forme": "WLDDL",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 6,
            "draw": 9,
            "lose": 6,
            "goalsFor": 28,
            "goalsAgainst": 30
          },
          "home": {
            "matchsPlayed": 11,
            "win": 4,
            "draw": 4,
            "lose": 3,
            "goalsFor": 17,
            "goalsAgainst": 17
          },
          "away": {
            "matchsPlayed": 10,
            "win": 2,
            "draw": 5,
            "lose": 3,
            "goalsFor": 11,
            "goalsAgainst": 13
          },
          "goalsDiff": -2,
          "points": 27,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 11,
          "team_id": 45,
          "teamName": "Everton",
          "logo": "https:\/\/media.api-football.com\/teams\/45.png",
          "group": "Premier League",
          "forme": "LWWDD",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 7,
            "draw": 4,
            "lose": 10,
            "goalsFor": 24,
            "goalsAgainst": 32
          },
          "home": {
            "matchsPlayed": 10,
            "win": 5,
            "draw": 2,
            "lose": 3,
            "goalsFor": 12,
            "goalsAgainst": 11
          },
          "away": {
            "matchsPlayed": 11,
            "win": 2,
            "draw": 2,
            "lose": 7,
            "goalsFor": 12,
            "goalsAgainst": 21
          },
          "goalsDiff": -8,
          "points": 25,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 12,
          "team_id": 41,
          "teamName": "Southampton",
          "logo": "https:\/\/media.api-football.com\/teams\/41.png",
          "group": "Premier League",
          "forme": "WDWWL",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 7,
            "draw": 4,
            "lose": 10,
            "goalsFor": 25,
            "goalsAgainst": 38
          },
          "home": {
            "matchsPlayed": 11,
            "win": 3,
            "draw": 2,
            "lose": 6,
            "goalsFor": 11,
            "goalsAgainst": 25
          },
          "away": {
            "matchsPlayed": 10,
            "win": 4,
            "draw": 2,
            "lose": 4,
            "goalsFor": 14,
            "goalsAgainst": 13
          },
          "goalsDiff": -13,
          "points": 25,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 13,
          "team_id": 34,
          "teamName": "Newcastle",
          "logo": "https:\/\/media.api-football.com\/teams\/34.png",
          "group": "Premier League",
          "forme": "LLLWL",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 7,
            "draw": 4,
            "lose": 10,
            "goalsFor": 20,
            "goalsAgainst": 33
          },
          "home": {
            "matchsPlayed": 11,
            "win": 4,
            "draw": 4,
            "lose": 3,
            "goalsFor": 11,
            "goalsAgainst": 12
          },
          "away": {
            "matchsPlayed": 10,
            "win": 3,
            "draw": 0,
            "lose": 7,
            "goalsFor": 9,
            "goalsAgainst": 21
          },
          "goalsDiff": -13,
          "points": 25,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 14,
          "team_id": 51,
          "teamName": "Brighton",
          "logo": "https:\/\/media.api-football.com\/teams\/51.png",
          "group": "Premier League",
          "forme": "DWLLD",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 6,
            "draw": 6,
            "lose": 9,
            "goalsFor": 25,
            "goalsAgainst": 29
          },
          "home": {
            "matchsPlayed": 11,
            "win": 4,
            "draw": 4,
            "lose": 3,
            "goalsFor": 15,
            "goalsAgainst": 12
          },
          "away": {
            "matchsPlayed": 10,
            "win": 2,
            "draw": 2,
            "lose": 6,
            "goalsFor": 10,
            "goalsAgainst": 17
          },
          "goalsDiff": -4,
          "points": 24,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 15,
          "team_id": 44,
          "teamName": "Burnley",
          "logo": "https:\/\/media.api-football.com\/teams\/44.png",
          "group": "Premier League",
          "forme": "LLLWW",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 7,
            "draw": 3,
            "lose": 11,
            "goalsFor": 24,
            "goalsAgainst": 34
          },
          "home": {
            "matchsPlayed": 11,
            "win": 5,
            "draw": 0,
            "lose": 6,
            "goalsFor": 14,
            "goalsAgainst": 17
          },
          "away": {
            "matchsPlayed": 10,
            "win": 2,
            "draw": 3,
            "lose": 5,
            "goalsFor": 10,
            "goalsAgainst": 17
          },
          "goalsDiff": -10,
          "points": 24,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 16,
          "team_id": 48,
          "teamName": "West Ham",
          "logo": "https:\/\/media.api-football.com\/teams\/48.png",
          "group": "Premier League",
          "forme": "WLLWL",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 20,
            "win": 6,
            "draw": 4,
            "lose": 10,
            "goalsFor": 25,
            "goalsAgainst": 32
          },
          "home": {
            "matchsPlayed": 10,
            "win": 3,
            "draw": 1,
            "lose": 6,
            "goalsFor": 16,
            "goalsAgainst": 19
          },
          "away": {
            "matchsPlayed": 10,
            "win": 3,
            "draw": 3,
            "lose": 4,
            "goalsFor": 9,
            "goalsAgainst": 13
          },
          "goalsDiff": -7,
          "points": 22,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 17,
          "team_id": 66,
          "teamName": "Aston Villa",
          "logo": "https:\/\/media.api-football.com\/teams\/66.png",
          "group": "Premier League",
          "forme": "WLWLL",
          "status": "same",
          "description": null,
          "all": {
            "matchsPlayed": 21,
            "win": 6,
            "draw": 3,
            "lose": 12,
            "goalsFor": 27,
            "goalsAgainst": 37
          },
          "home": {
            "matchsPlayed": 10,
            "win": 4,
            "draw": 2,
            "lose": 4,
            "goalsFor": 13,
            "goalsAgainst": 14
          },
          "away": {
            "matchsPlayed": 11,
            "win": 2,
            "draw": 1,
            "lose": 8,
            "goalsFor": 14,
            "goalsAgainst": 23
          },
          "goalsDiff": -10,
          "points": 21,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 18,
          "team_id": 35,
          "teamName": "Bournemouth",
          "logo": "https:\/\/media.api-football.com\/teams\/35.png",
          "group": "Premier League",
          "forme": "LLDLW",
          "status": "same",
          "description": "Relegation - Championship",
          "all": {
            "matchsPlayed": 21,
            "win": 5,
            "draw": 5,
            "lose": 11,
            "goalsFor": 20,
            "goalsAgainst": 32
          },
          "home": {
            "matchsPlayed": 10,
            "win": 2,
            "draw": 4,
            "lose": 4,
            "goalsFor": 10,
            "goalsAgainst": 14
          },
          "away": {
            "matchsPlayed": 11,
            "win": 3,
            "draw": 1,
            "lose": 7,
            "goalsFor": 10,
            "goalsAgainst": 18
          },
          "goalsDiff": -12,
          "points": 20,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 19,
          "team_id": 38,
          "teamName": "Watford",
          "logo": "https:\/\/media.api-football.com\/teams\/38.png",
          "group": "Premier League",
          "forme": "WWDWL",
          "status": "same",
          "description": "Relegation - Championship",
          "all": {
            "matchsPlayed": 21,
            "win": 4,
            "draw": 7,
            "lose": 10,
            "goalsFor": 17,
            "goalsAgainst": 34
          },
          "home": {
            "matchsPlayed": 11,
            "win": 3,
            "draw": 4,
            "lose": 4,
            "goalsFor": 11,
            "goalsAgainst": 14
          },
          "away": {
            "matchsPlayed": 10,
            "win": 1,
            "draw": 3,
            "lose": 6,
            "goalsFor": 6,
            "goalsAgainst": 20
          },
          "goalsDiff": -17,
          "points": 19,
          "lastUpdate": "2020-01-02"
        },
        {
          "rank": 20,
          "team_id": 71,
          "teamName": "Norwich",
          "logo": "https:\/\/media.api-football.com\/teams\/71.png",
          "group": "Premier League",
          "forme": "DDLLD",
          "status": "same",
          "description": "Relegation - Championship",
          "all": {
            "matchsPlayed": 21,
            "win": 3,
            "draw": 5,
            "lose": 13,
            "goalsFor": 22,
            "goalsAgainst": 41
          },
          "home": {
            "matchsPlayed": 11,
            "win": 2,
            "draw": 3,
            "lose": 6,
            "goalsFor": 17,
            "goalsAgainst": 25
          },
          "away": {
            "matchsPlayed": 10,
            "win": 1,
            "draw": 2,
            "lose": 7,
            "goalsFor": 5,
            "goalsAgainst": 16
          },
          "goalsDiff": -19,
          "points": 14,
          "lastUpdate": "2020-01-02"
        }
      ]
  }

  return teams.map(team => {
    return {
      position: team.rank,
      name: team.teamName,
      played: team.all.matchsPlayed,
      won: team.all.win,
      drawn: team.all.draw,
      lost: team.all.lose,
      gf: team.all.goalsFor,
      ga: team.all.goalsAgainst,
      gd: team.goalsDiff,
      points: team.points,
      form: team.forme
    }
  });
}