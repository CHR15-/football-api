// Let's import React, our styles and React Async
import React from 'react';
import { useAsync } from 'react-async';
import { Row } from 'antd';

import { filterFixtures } from '../utils/filterFixtures';
import { FixtureRow } from './FixtureRow';

const loadTeam = async () =>
  await fetch("https://www.api-football.com/football/teams/brighton/players")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// Our component
function Players() {
  //const { data, error, isLoading } = useAsync({ promiseFn: loadTeam })
  //if (isLoading) return "Loading..."
  //if (error) return `Something went wrong: ${error.message}`

  const data = {
    "api": {
      "results": 118,
      "players": [
        {
          "player_id": 18966,
          "player_name": "Bruno Saltor Grau",
          "firstname": "Bruno",
          "lastname": "Saltor Grau",
          "number": null,
          "position": "Defender",
          "age": 39,
          "birth_date": "01\/10\/1980",
          "birth_place": "El Masnou",
          "birth_country": "Spain",
          "nationality": "Spain",
          "height": "181 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18981,
          "player_name": "J. Locadia",
          "firstname": "Jürgen",
          "lastname": "Locadia",
          "number": null,
          "position": "Attacker",
          "age": 26,
          "birth_date": "07\/11\/1993",
          "birth_place": "Emmen",
          "birth_country": "Netherlands",
          "nationality": "Netherlands",
          "height": "185 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": "6.550000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 2,
            "on": 1
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 10,
            "key": 0,
            "accuracy": 42
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 1
          },
          "fouls": {
            "drawn": 2,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 2,
            "minutes_played": 86,
            "lineups": 1
          },
          "substitutes": {
            "in": 1,
            "out": 1,
            "bench": 2
          }
        },
        {
          "player_id": 18981,
          "player_name": "J. Locadia",
          "firstname": "Jürgen",
          "lastname": "Locadia",
          "number": null,
          "position": "Attacker",
          "age": 26,
          "birth_date": "07\/11\/1993",
          "birth_place": "Emmen",
          "birth_country": "Netherlands",
          "nationality": "Netherlands",
          "height": "185 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 93168,
          "player_name": "Soufyan Ahannach",
          "firstname": "Soufyan",
          "lastname": "Ahannach",
          "number": null,
          "position": "Midfielder",
          "age": 25,
          "birth_date": "09\/09\/1995",
          "birth_place": "Amsterdam",
          "birth_country": "Netherlands",
          "nationality": "Netherlands",
          "height": "173 cm",
          "weight": "72 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 18978,
          "player_name": "Florin Andone",
          "firstname": "Florin",
          "lastname": "Andone",
          "number": null,
          "position": "Attacker",
          "age": 27,
          "birth_date": "11\/04\/1993",
          "birth_place": "Botoșani",
          "birth_country": "Romania",
          "nationality": "Romania",
          "height": "180 cm",
          "weight": "78 kg",
          "injured": null,
          "rating": "6.300000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 1
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 7,
            "key": 1,
            "accuracy": 66
          },
          "tackles": {
            "total": 1,
            "blocks": 1,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 6,
            "success": 1
          },
          "fouls": {
            "drawn": 3,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 1
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 3,
            "minutes_played": 72,
            "lineups": 1
          },
          "substitutes": {
            "in": 2,
            "out": 0,
            "bench": 2
          }
        },
        {
          "player_id": 18978,
          "player_name": "Florin Andone",
          "firstname": "Florin",
          "lastname": "Andone",
          "number": null,
          "position": "Attacker",
          "age": 27,
          "birth_date": "11\/04\/1993",
          "birth_place": "Botoșani",
          "birth_country": "Romania",
          "nationality": "Romania",
          "height": "180 cm",
          "weight": "78 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18978,
          "player_name": "Florin Andone",
          "firstname": "Florin",
          "lastname": "Andone",
          "number": null,
          "position": "Attacker",
          "age": 27,
          "birth_date": "11\/04\/1993",
          "birth_place": "Botoșani",
          "birth_country": "Romania",
          "nationality": "Romania",
          "height": "180 cm",
          "weight": "78 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 2741,
          "player_name": "M. Ryan",
          "firstname": "Mathew",
          "lastname": "Ryan",
          "number": null,
          "position": "Goalkeeper",
          "age": 28,
          "birth_date": "08\/04\/1992",
          "birth_place": "Plumpton",
          "birth_country": "Australia",
          "nationality": "Australia",
          "height": "184 cm",
          "weight": "82 kg",
          "injured": null,
          "rating": "7.172727",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 30,
            "assists": 0
          },
          "passes": {
            "total": 578,
            "key": 0,
            "accuracy": 81
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 2,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 22,
            "minutes_played": 1980,
            "lineups": 22
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 2741,
          "player_name": "M. Ryan",
          "firstname": "Mathew",
          "lastname": "Ryan",
          "number": null,
          "position": "Goalkeeper",
          "age": 28,
          "birth_date": "08\/04\/1992",
          "birth_place": "Plumpton",
          "birth_country": "Australia",
          "nationality": "Australia",
          "height": "184 cm",
          "weight": "82 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 2741,
          "player_name": "M. Ryan",
          "firstname": "Mathew",
          "lastname": "Ryan",
          "number": null,
          "position": "Goalkeeper",
          "age": 28,
          "birth_date": "08\/04\/1992",
          "birth_place": "Plumpton",
          "birth_country": "Australia",
          "nationality": "Australia",
          "height": "184 cm",
          "weight": "82 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18960,
          "player_name": "J. Steele",
          "firstname": "Jason",
          "lastname": "Steele",
          "number": null,
          "position": "Goalkeeper",
          "age": 30,
          "birth_date": "18\/08\/1990",
          "birth_place": "Newton Aycliffe",
          "birth_country": "England",
          "nationality": "England",
          "height": "188 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18960,
          "player_name": "J. Steele",
          "firstname": "Jason",
          "lastname": "Steele",
          "number": null,
          "position": "Goalkeeper",
          "age": 30,
          "birth_date": "18\/08\/1990",
          "birth_place": "Newton Aycliffe",
          "birth_country": "England",
          "nationality": "England",
          "height": "188 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 2
          }
        },
        {
          "player_id": 18960,
          "player_name": "J. Steele",
          "firstname": "Jason",
          "lastname": "Steele",
          "number": null,
          "position": "Goalkeeper",
          "age": 30,
          "birth_date": "18\/08\/1990",
          "birth_place": "Newton Aycliffe",
          "birth_country": "England",
          "nationality": "England",
          "height": "188 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 18958,
          "player_name": "D. Button",
          "firstname": "David",
          "lastname": "Button",
          "number": null,
          "position": "Goalkeeper",
          "age": 31,
          "birth_date": "27\/02\/1989",
          "birth_place": "Stevenage",
          "birth_country": "England",
          "nationality": "England",
          "height": "191 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 22
          }
        },
        {
          "player_id": 18958,
          "player_name": "D. Button",
          "firstname": "David",
          "lastname": "Button",
          "number": null,
          "position": "Goalkeeper",
          "age": 31,
          "birth_date": "27\/02\/1989",
          "birth_place": "Stevenage",
          "birth_country": "England",
          "nationality": "England",
          "height": "191 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": "6.800000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 4,
            "assists": 0
          },
          "passes": {
            "total": 51,
            "key": 0,
            "accuracy": 85
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 1,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 2,
            "minutes_played": 180,
            "lineups": 2
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18958,
          "player_name": "D. Button",
          "firstname": "David",
          "lastname": "Button",
          "number": null,
          "position": "Goalkeeper",
          "age": 31,
          "birth_date": "27\/02\/1989",
          "birth_place": "Stevenage",
          "birth_country": "England",
          "nationality": "England",
          "height": "191 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 3398,
          "player_name": "G. Bong",
          "firstname": "Gaëtan",
          "lastname": "Bong Songo",
          "number": null,
          "position": "Defender",
          "age": 32,
          "birth_date": "25\/04\/1988",
          "birth_place": "Sakbayeme",
          "birth_country": "Cameroon",
          "nationality": "Cameroon",
          "height": "187 cm",
          "weight": "74 kg",
          "injured": null,
          "rating": "6.300000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 21,
            "key": 2,
            "accuracy": 63
          },
          "tackles": {
            "total": 0,
            "blocks": 1,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 2,
            "success": 1
          },
          "fouls": {
            "drawn": 1,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 4,
            "minutes_played": 55,
            "lineups": 0
          },
          "substitutes": {
            "in": 4,
            "out": 0,
            "bench": 4
          }
        },
        {
          "player_id": 3398,
          "player_name": "G. Bong",
          "firstname": "Gaëtan",
          "lastname": "Bong Songo",
          "number": null,
          "position": "Defender",
          "age": 32,
          "birth_date": "25\/04\/1988",
          "birth_place": "Sakbayeme",
          "birth_country": "Cameroon",
          "nationality": "Cameroon",
          "height": "187 cm",
          "weight": "74 kg",
          "injured": null,
          "rating": "6.500000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 65,
            "key": 1,
            "accuracy": 80
          },
          "tackles": {
            "total": 2,
            "blocks": 2,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 2,
            "success": 1
          },
          "fouls": {
            "drawn": 1,
            "committed": 1
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 2,
            "minutes_played": 180,
            "lineups": 2
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 3398,
          "player_name": "G. Bong",
          "firstname": "Gaëtan",
          "lastname": "Bong Songo",
          "number": null,
          "position": "Defender",
          "age": 32,
          "birth_date": "25\/04\/1988",
          "birth_place": "Sakbayeme",
          "birth_country": "Cameroon",
          "nationality": "Cameroon",
          "height": "187 cm",
          "weight": "74 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 71,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          }
        },
        {
          "player_id": 18962,
          "player_name": "S. Duffy",
          "firstname": "Shane",
          "lastname": "Duffy",
          "number": null,
          "position": "Defender",
          "age": 28,
          "birth_date": "01\/01\/1992",
          "birth_place": "Derry",
          "birth_country": "Northern Ireland",
          "nationality": "Republic of Ireland",
          "height": "193 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": "6.825000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 5,
            "on": 1
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 382,
            "key": 1,
            "accuracy": 75
          },
          "tackles": {
            "total": 11,
            "blocks": 5,
            "interceptions": 17
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 3,
            "success": 3
          },
          "fouls": {
            "drawn": 7,
            "committed": 11
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 13,
            "minutes_played": 891,
            "lineups": 9
          },
          "substitutes": {
            "in": 4,
            "out": 0,
            "bench": 10
          }
        },
        {
          "player_id": 18962,
          "player_name": "S. Duffy",
          "firstname": "Shane",
          "lastname": "Duffy",
          "number": null,
          "position": "Defender",
          "age": 28,
          "birth_date": "01\/01\/1992",
          "birth_place": "Derry",
          "birth_country": "Northern Ireland",
          "nationality": "Republic of Ireland",
          "height": "193 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": "7.300000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 1,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 27,
            "key": 1,
            "accuracy": 77
          },
          "tackles": {
            "total": 2,
            "blocks": 1,
            "interceptions": 3
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 72,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          }
        },
        {
          "player_id": 18962,
          "player_name": "S. Duffy",
          "firstname": "Shane",
          "lastname": "Duffy",
          "number": null,
          "position": "Defender",
          "age": 28,
          "birth_date": "01\/01\/1992",
          "birth_place": "Derry",
          "birth_country": "Northern Ireland",
          "nationality": "Republic of Ireland",
          "height": "193 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18963,
          "player_name": "L. Dunk",
          "firstname": "Lewis",
          "lastname": "Dunk",
          "number": null,
          "position": "Defender",
          "age": 29,
          "birth_date": "21\/11\/1991",
          "birth_place": "Brighton",
          "birth_country": "England",
          "nationality": "England",
          "height": "192 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": "7.120000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 20,
          "shots": {
            "total": 17,
            "on": 6
          },
          "goals": {
            "total": 2,
            "conceded": 0,
            "assists": 3
          },
          "passes": {
            "total": 1175,
            "key": 8,
            "accuracy": 85
          },
          "tackles": {
            "total": 19,
            "blocks": 15,
            "interceptions": 38
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 5,
            "success": 4
          },
          "fouls": {
            "drawn": 12,
            "committed": 13
          },
          "cards": {
            "yellow": 7,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 20,
            "minutes_played": 1800,
            "lineups": 20
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18963,
          "player_name": "L. Dunk",
          "firstname": "Lewis",
          "lastname": "Dunk",
          "number": null,
          "position": "Defender",
          "age": 29,
          "birth_date": "21\/11\/1991",
          "birth_place": "Brighton",
          "birth_country": "England",
          "nationality": "England",
          "height": "192 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18963,
          "player_name": "L. Dunk",
          "firstname": "Lewis",
          "lastname": "Dunk",
          "number": null,
          "position": "Defender",
          "age": 29,
          "birth_date": "21\/11\/1991",
          "birth_place": "Brighton",
          "birth_country": "England",
          "nationality": "England",
          "height": "192 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 2767,
          "player_name": "L. Balogun",
          "firstname": "Leon-Aderemi",
          "lastname": "Balogun",
          "number": null,
          "position": "Defender",
          "age": 32,
          "birth_date": "28\/06\/1988",
          "birth_place": "Berlin",
          "birth_country": "Germany",
          "nationality": "Nigeria",
          "height": "190 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 4
          }
        },
        {
          "player_id": 2767,
          "player_name": "L. Balogun",
          "firstname": "Leon-Aderemi",
          "lastname": "Balogun",
          "number": null,
          "position": "Defender",
          "age": 32,
          "birth_date": "28\/06\/1988",
          "birth_place": "Berlin",
          "birth_country": "Germany",
          "nationality": "Nigeria",
          "height": "190 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": "7.500000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 3,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 51,
            "key": 0,
            "accuracy": 91
          },
          "tackles": {
            "total": 2,
            "blocks": 0,
            "interceptions": 4
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 1,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 2767,
          "player_name": "L. Balogun",
          "firstname": "Leon-Aderemi",
          "lastname": "Balogun",
          "number": null,
          "position": "Defender",
          "age": 32,
          "birth_date": "28\/06\/1988",
          "birth_place": "Berlin",
          "birth_country": "Germany",
          "nationality": "Nigeria",
          "height": "190 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 46,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          }
        },
        {
          "player_id": 19265,
          "player_name": "A. Webster",
          "firstname": "Adam",
          "lastname": "Webster",
          "number": null,
          "position": "Defender",
          "age": 25,
          "birth_date": "04\/01\/1995",
          "birth_place": "West Wittering",
          "birth_country": "England",
          "nationality": "England",
          "height": "191 cm",
          "weight": "75 kg",
          "injured": null,
          "rating": "6.994117",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 13,
            "on": 6
          },
          "goals": {
            "total": 3,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 926,
            "key": 7,
            "accuracy": 84
          },
          "tackles": {
            "total": 20,
            "blocks": 13,
            "interceptions": 26
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 10,
            "success": 8
          },
          "fouls": {
            "drawn": 11,
            "committed": 7
          },
          "cards": {
            "yellow": 2,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 2,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 17,
            "minutes_played": 1476,
            "lineups": 17
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 4
          }
        },
        {
          "player_id": 19265,
          "player_name": "A. Webster",
          "firstname": "Adam",
          "lastname": "Webster",
          "number": null,
          "position": "Defender",
          "age": 25,
          "birth_date": "04\/01\/1995",
          "birth_place": "West Wittering",
          "birth_country": "England",
          "nationality": "England",
          "height": "191 cm",
          "weight": "75 kg",
          "injured": null,
          "rating": "7.200000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 1
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 69,
            "key": 0,
            "accuracy": 89
          },
          "tackles": {
            "total": 2,
            "blocks": 0,
            "interceptions": 3
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19265,
          "player_name": "A. Webster",
          "firstname": "Adam",
          "lastname": "Webster",
          "number": null,
          "position": "Defender",
          "age": 25,
          "birth_date": "04\/01\/1995",
          "birth_place": "West Wittering",
          "birth_country": "England",
          "nationality": "England",
          "height": "191 cm",
          "weight": "75 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 30743,
          "player_name": "E. Schelotto",
          "firstname": "Matias Ezequiel",
          "lastname": "Schelotto",
          "number": null,
          "position": "Defender",
          "age": 31,
          "birth_date": "23\/05\/1989",
          "birth_place": "Buenos Aires",
          "birth_country": "Argentina",
          "nationality": "Italy",
          "height": "187 cm",
          "weight": "77 kg",
          "injured": null,
          "rating": "6.475000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 36,
            "key": 0,
            "accuracy": 79
          },
          "tackles": {
            "total": 1,
            "blocks": 0,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 2,
            "success": 2
          },
          "fouls": {
            "drawn": 2,
            "committed": 3
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 4,
            "minutes_played": 125,
            "lineups": 1
          },
          "substitutes": {
            "in": 3,
            "out": 1,
            "bench": 8
          }
        },
        {
          "player_id": 30743,
          "player_name": "E. Schelotto",
          "firstname": "Matias Ezequiel",
          "lastname": "Schelotto",
          "number": null,
          "position": "Defender",
          "age": 31,
          "birth_date": "23\/05\/1989",
          "birth_place": "Buenos Aires",
          "birth_country": "Argentina",
          "nationality": "Italy",
          "height": "187 cm",
          "weight": "77 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 30743,
          "player_name": "E. Schelotto",
          "firstname": "Matias Ezequiel",
          "lastname": "Schelotto",
          "number": null,
          "position": "Defender",
          "age": 31,
          "birth_date": "23\/05\/1989",
          "birth_place": "Buenos Aires",
          "birth_country": "Argentina",
          "nationality": "Italy",
          "height": "187 cm",
          "weight": "77 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18965,
          "player_name": "Martín Montoya",
          "firstname": "Martín",
          "lastname": "Montoya Torralbo",
          "number": null,
          "position": "Defender",
          "age": 29,
          "birth_date": "14\/04\/1991",
          "birth_place": "Barcelona",
          "birth_country": "Spain",
          "nationality": "Spain",
          "height": "175 cm",
          "weight": "73 kg",
          "injured": null,
          "rating": "6.789473",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 8,
            "on": 3
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 598,
            "key": 14,
            "accuracy": 74
          },
          "tackles": {
            "total": 39,
            "blocks": 1,
            "interceptions": 20
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 26,
            "success": 10
          },
          "fouls": {
            "drawn": 14,
            "committed": 17
          },
          "cards": {
            "yellow": 3,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 19,
            "minutes_played": 1449,
            "lineups": 18
          },
          "substitutes": {
            "in": 1,
            "out": 7,
            "bench": 3
          }
        },
        {
          "player_id": 18965,
          "player_name": "Martín Montoya",
          "firstname": "Martín",
          "lastname": "Montoya Torralbo",
          "number": null,
          "position": "Defender",
          "age": 29,
          "birth_date": "14\/04\/1991",
          "birth_place": "Barcelona",
          "birth_country": "Spain",
          "nationality": "Spain",
          "height": "175 cm",
          "weight": "73 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18965,
          "player_name": "Martín Montoya",
          "firstname": "Martín",
          "lastname": "Montoya Torralbo",
          "number": null,
          "position": "Defender",
          "age": 29,
          "birth_date": "14\/04\/1991",
          "birth_place": "Barcelona",
          "birth_country": "Spain",
          "nationality": "Spain",
          "height": "175 cm",
          "weight": "73 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 43071,
          "player_name": "T. Băluţă",
          "firstname": "Tudor Cristian",
          "lastname": "Băluţă",
          "number": null,
          "position": "Defender",
          "age": 21,
          "birth_date": "27\/03\/1999",
          "birth_place": "Craiova",
          "birth_country": "Romania",
          "nationality": "Romania",
          "height": "191 cm",
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 3
          }
        },
        {
          "player_id": 43071,
          "player_name": "T. Băluţă",
          "firstname": "Tudor Cristian",
          "lastname": "Băluţă",
          "number": null,
          "position": "Defender",
          "age": 21,
          "birth_date": "27\/03\/1999",
          "birth_place": "Craiova",
          "birth_country": "Romania",
          "nationality": "Romania",
          "height": "191 cm",
          "weight": null,
          "injured": null,
          "rating": "6.500000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 29,
            "key": 0,
            "accuracy": 70
          },
          "tackles": {
            "total": 2,
            "blocks": 0,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 1
          },
          "fouls": {
            "drawn": 0,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 43071,
          "player_name": "T. Băluţă",
          "firstname": "Tudor Cristian",
          "lastname": "Băluţă",
          "number": null,
          "position": "Defender",
          "age": 21,
          "birth_date": "27\/03\/1999",
          "birth_place": "Craiova",
          "birth_country": "Romania",
          "nationality": "Romania",
          "height": "191 cm",
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18964,
          "player_name": "Bernardo Fernandes da Silva Junior",
          "firstname": "Bernardo",
          "lastname": "Fernandes da Silva Junior",
          "number": null,
          "position": "Defender",
          "age": 25,
          "birth_date": "14\/05\/1995",
          "birth_place": "São Paulo",
          "birth_country": "Brazil",
          "nationality": "Brazil",
          "height": "186 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": "7.150000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 1
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 96,
            "key": 2,
            "accuracy": 65
          },
          "tackles": {
            "total": 11,
            "blocks": 0,
            "interceptions": 3
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 4,
            "success": 3
          },
          "fouls": {
            "drawn": 0,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 6,
            "minutes_played": 301,
            "lineups": 3
          },
          "substitutes": {
            "in": 3,
            "out": 2,
            "bench": 9
          }
        },
        {
          "player_id": 18964,
          "player_name": "Bernardo Fernandes da Silva Junior",
          "firstname": "Bernardo",
          "lastname": "Fernandes da Silva Junior",
          "number": null,
          "position": "Defender",
          "age": 25,
          "birth_date": "14\/05\/1995",
          "birth_place": "São Paulo",
          "birth_country": "Brazil",
          "nationality": "Brazil",
          "height": "186 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": "6.800000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 2,
            "on": 2
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 35,
            "key": 4,
            "accuracy": 67
          },
          "tackles": {
            "total": 2,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 3
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18964,
          "player_name": "Bernardo Fernandes da Silva Junior",
          "firstname": "Bernardo",
          "lastname": "Fernandes da Silva Junior",
          "number": null,
          "position": "Defender",
          "age": 25,
          "birth_date": "14\/05\/1995",
          "birth_place": "São Paulo",
          "birth_country": "Brazil",
          "nationality": "Brazil",
          "height": "186 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 19,
            "lineups": 0
          },
          "substitutes": {
            "in": 1,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 18961,
          "player_name": "D. Burn",
          "firstname": "Dan",
          "lastname": "Burn",
          "number": null,
          "position": "Defender",
          "age": 28,
          "birth_date": "09\/05\/1992",
          "birth_place": "Blyth",
          "birth_country": "England",
          "nationality": "England",
          "height": "198 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": "6.776190",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 10,
            "on": 0
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 804,
            "key": 15,
            "accuracy": 75
          },
          "tackles": {
            "total": 41,
            "blocks": 13,
            "interceptions": 31
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 32,
            "success": 16
          },
          "fouls": {
            "drawn": 9,
            "committed": 21
          },
          "cards": {
            "yellow": 3,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 21,
            "minutes_played": 1822,
            "lineups": 21
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          }
        },
        {
          "player_id": 18961,
          "player_name": "D. Burn",
          "firstname": "Dan",
          "lastname": "Burn",
          "number": null,
          "position": "Defender",
          "age": 28,
          "birth_date": "09\/05\/1992",
          "birth_place": "Blyth",
          "birth_country": "England",
          "nationality": "England",
          "height": "198 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18961,
          "player_name": "D. Burn",
          "firstname": "Dan",
          "lastname": "Burn",
          "number": null,
          "position": "Defender",
          "age": 28,
          "birth_date": "09\/05\/1992",
          "birth_place": "Blyth",
          "birth_country": "England",
          "nationality": "England",
          "height": "198 cm",
          "weight": "87 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 82948,
          "player_name": "J. Davies",
          "firstname": "Jordan",
          "lastname": "Davies",
          "number": null,
          "position": "Defender",
          "age": 22,
          "birth_date": "18\/08\/1998",
          "birth_place": "Wrexham",
          "birth_country": "Wales",
          "nationality": "Wales",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 82948,
          "player_name": "J. Davies",
          "firstname": "Jordan",
          "lastname": "Davies",
          "number": null,
          "position": "Defender",
          "age": 22,
          "birth_date": "18\/08\/1998",
          "birth_place": "Wrexham",
          "birth_country": "Wales",
          "nationality": "Wales",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 2
          }
        },
        {
          "player_id": 137300,
          "player_name": "H. Roberts",
          "firstname": "Hayden",
          "lastname": "Roberts",
          "number": null,
          "position": "Defender",
          "age": 18,
          "birth_date": "10\/05\/2002",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 137300,
          "player_name": "H. Roberts",
          "firstname": "Hayden",
          "lastname": "Roberts",
          "number": null,
          "position": "Defender",
          "age": 18,
          "birth_date": "10\/05\/2002",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "7.200000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 1
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 15,
            "key": 0,
            "accuracy": 78
          },
          "tackles": {
            "total": 2,
            "blocks": 2,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 1
          },
          "fouls": {
            "drawn": 0,
            "committed": 1
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 137300,
          "player_name": "H. Roberts",
          "firstname": "Hayden",
          "lastname": "Roberts",
          "number": null,
          "position": "Defender",
          "age": 18,
          "birth_date": "10\/05\/2002",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 151752,
          "player_name": "W. O&apos;Hora",
          "firstname": "Warren",
          "lastname": "O'Hora",
          "number": null,
          "position": "Defender",
          "age": 21,
          "birth_date": "19\/04\/1999",
          "birth_place": "Cabra",
          "birth_country": "Republic of Ireland",
          "nationality": "Republic of Ireland",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 151752,
          "player_name": "W. O&apos;Hora",
          "firstname": "Warren",
          "lastname": "O'Hora",
          "number": null,
          "position": "Defender",
          "age": 21,
          "birth_date": "19\/04\/1999",
          "birth_place": "Cabra",
          "birth_country": "Republic of Ireland",
          "nationality": "Republic of Ireland",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 18977,
          "player_name": "D. Stephens",
          "firstname": "Dale",
          "lastname": "Stephens",
          "number": null,
          "position": "Midfielder",
          "age": 31,
          "birth_date": "12\/06\/1989",
          "birth_place": "Bolton",
          "birth_country": "England",
          "nationality": "England",
          "height": "169 cm",
          "weight": "71 kg",
          "injured": null,
          "rating": "6.880000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 2,
          "shots": {
            "total": 13,
            "on": 2
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 1061,
            "key": 12,
            "accuracy": 85
          },
          "tackles": {
            "total": 41,
            "blocks": 5,
            "interceptions": 39
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 5,
            "success": 4
          },
          "fouls": {
            "drawn": 6,
            "committed": 29
          },
          "cards": {
            "yellow": 5,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 20,
            "minutes_played": 1673,
            "lineups": 19
          },
          "substitutes": {
            "in": 1,
            "out": 4,
            "bench": 2
          }
        },
        {
          "player_id": 18977,
          "player_name": "D. Stephens",
          "firstname": "Dale",
          "lastname": "Stephens",
          "number": null,
          "position": "Midfielder",
          "age": 31,
          "birth_date": "12\/06\/1989",
          "birth_place": "Bolton",
          "birth_country": "England",
          "nationality": "England",
          "height": "169 cm",
          "weight": "71 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18977,
          "player_name": "D. Stephens",
          "firstname": "Dale",
          "lastname": "Stephens",
          "number": null,
          "position": "Midfielder",
          "age": 31,
          "birth_date": "12\/06\/1989",
          "birth_place": "Bolton",
          "birth_country": "England",
          "nationality": "England",
          "height": "169 cm",
          "weight": "71 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18968,
          "player_name": "Y. Bissouma",
          "firstname": "Yves",
          "lastname": "Bissouma",
          "number": null,
          "position": "Midfielder",
          "age": 24,
          "birth_date": "30\/08\/1996",
          "birth_place": null,
          "birth_country": "Mali",
          "nationality": "Mali",
          "height": "182 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": "6.700000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 6,
            "on": 4
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 183,
            "key": 2,
            "accuracy": 82
          },
          "tackles": {
            "total": 11,
            "blocks": 1,
            "interceptions": 5
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 17,
            "success": 11
          },
          "fouls": {
            "drawn": 5,
            "committed": 11
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 10,
            "minutes_played": 407,
            "lineups": 5
          },
          "substitutes": {
            "in": 5,
            "out": 5,
            "bench": 11
          }
        },
        {
          "player_id": 18968,
          "player_name": "Y. Bissouma",
          "firstname": "Yves",
          "lastname": "Bissouma",
          "number": null,
          "position": "Midfielder",
          "age": 24,
          "birth_date": "30\/08\/1996",
          "birth_place": null,
          "birth_country": "Mali",
          "nationality": "Mali",
          "height": "182 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18968,
          "player_name": "Y. Bissouma",
          "firstname": "Yves",
          "lastname": "Bissouma",
          "number": null,
          "position": "Midfielder",
          "age": 24,
          "birth_date": "30\/08\/1996",
          "birth_place": null,
          "birth_country": "Mali",
          "nationality": "Mali",
          "height": "182 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 63,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          }
        },
        {
          "player_id": 18970,
          "player_name": "P. Groß",
          "firstname": "Pascal",
          "lastname": "Groß",
          "number": null,
          "position": "Midfielder",
          "age": 29,
          "birth_date": "15\/06\/1991",
          "birth_place": "Mannheim",
          "birth_country": "Germany",
          "nationality": "Germany",
          "height": "181 cm",
          "weight": "78 kg",
          "injured": null,
          "rating": "7.157894",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 23,
            "on": 8
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 4
          },
          "passes": {
            "total": 509,
            "key": 46,
            "accuracy": 77
          },
          "tackles": {
            "total": 20,
            "blocks": 1,
            "interceptions": 5
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 12,
            "success": 5
          },
          "fouls": {
            "drawn": 11,
            "committed": 15
          },
          "cards": {
            "yellow": 2,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 19,
            "minutes_played": 1274,
            "lineups": 15
          },
          "substitutes": {
            "in": 4,
            "out": 8,
            "bench": 7
          }
        },
        {
          "player_id": 18970,
          "player_name": "P. Groß",
          "firstname": "Pascal",
          "lastname": "Groß",
          "number": null,
          "position": "Midfielder",
          "age": 29,
          "birth_date": "15\/06\/1991",
          "birth_place": "Mannheim",
          "birth_country": "Germany",
          "nationality": "Germany",
          "height": "181 cm",
          "weight": "78 kg",
          "injured": null,
          "rating": "7.300000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 2,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 69,
            "key": 4,
            "accuracy": 87
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 1,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18970,
          "player_name": "P. Groß",
          "firstname": "Pascal",
          "lastname": "Groß",
          "number": null,
          "position": "Midfielder",
          "age": 29,
          "birth_date": "15\/06\/1991",
          "birth_place": "Mannheim",
          "birth_country": "Germany",
          "nationality": "Germany",
          "height": "181 cm",
          "weight": "78 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19050,
          "player_name": "A. Mooy",
          "firstname": "Aaron",
          "lastname": "Mooy",
          "number": null,
          "position": "Midfielder",
          "age": 30,
          "birth_date": "15\/09\/1990",
          "birth_place": "Sydney",
          "birth_country": "Australia",
          "nationality": "Australia",
          "height": "174 cm",
          "weight": "68 kg",
          "injured": null,
          "rating": "7.000000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 16,
            "on": 3
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 438,
            "key": 20,
            "accuracy": 78
          },
          "tackles": {
            "total": 21,
            "blocks": 5,
            "interceptions": 7
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 34,
            "success": 25
          },
          "fouls": {
            "drawn": 4,
            "committed": 5
          },
          "cards": {
            "yellow": 1,
            "yellowred": 1,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 15,
            "minutes_played": 1057,
            "lineups": 13
          },
          "substitutes": {
            "in": 2,
            "out": 4,
            "bench": 7
          }
        },
        {
          "player_id": 19050,
          "player_name": "A. Mooy",
          "firstname": "Aaron",
          "lastname": "Mooy",
          "number": null,
          "position": "Midfielder",
          "age": 30,
          "birth_date": "15\/09\/1990",
          "birth_place": "Sydney",
          "birth_country": "Australia",
          "nationality": "Australia",
          "height": "174 cm",
          "weight": "68 kg",
          "injured": null,
          "rating": "7.500000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 2,
            "on": 1
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 60,
            "key": 2,
            "accuracy": 95
          },
          "tackles": {
            "total": 3,
            "blocks": 0,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 0
          },
          "fouls": {
            "drawn": 1,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19050,
          "player_name": "A. Mooy",
          "firstname": "Aaron",
          "lastname": "Mooy",
          "number": null,
          "position": "Midfielder",
          "age": 30,
          "birth_date": "15\/09\/1990",
          "birth_place": "Sydney",
          "birth_country": "Australia",
          "nationality": "Australia",
          "height": "174 cm",
          "weight": "68 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18973,
          "player_name": "Solomon March",
          "firstname": "Solomon",
          "lastname": "March",
          "number": null,
          "position": "Midfielder",
          "age": 26,
          "birth_date": "20\/07\/1994",
          "birth_place": "Eastbourne",
          "birth_country": "England",
          "nationality": "England",
          "height": "180 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": "6.862500",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 7,
            "on": 3
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 218,
            "key": 8,
            "accuracy": 79
          },
          "tackles": {
            "total": 6,
            "blocks": 3,
            "interceptions": 9
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 15,
            "success": 8
          },
          "fouls": {
            "drawn": 5,
            "committed": 3
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 8,
            "minutes_played": 599,
            "lineups": 6
          },
          "substitutes": {
            "in": 2,
            "out": 4,
            "bench": 6
          }
        },
        {
          "player_id": 18973,
          "player_name": "Solomon March",
          "firstname": "Solomon",
          "lastname": "March",
          "number": null,
          "position": "Midfielder",
          "age": 26,
          "birth_date": "20\/07\/1994",
          "birth_place": "Eastbourne",
          "birth_country": "England",
          "nationality": "England",
          "height": "180 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18973,
          "player_name": "Solomon March",
          "firstname": "Solomon",
          "lastname": "March",
          "number": null,
          "position": "Midfielder",
          "age": 26,
          "birth_date": "20\/07\/1994",
          "birth_place": "Eastbourne",
          "birth_country": "England",
          "nationality": "England",
          "height": "180 cm",
          "weight": "88 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18975,
          "player_name": "D. Pröpper",
          "firstname": "Davy",
          "lastname": "Pröpper",
          "number": null,
          "position": "Midfielder",
          "age": 29,
          "birth_date": "02\/09\/1991",
          "birth_place": "Arnhem",
          "birth_country": "Netherlands",
          "nationality": "Netherlands",
          "height": "185 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": "6.721052",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 23,
            "on": 7
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 905,
            "key": 15,
            "accuracy": 83
          },
          "tackles": {
            "total": 31,
            "blocks": 2,
            "interceptions": 17
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 49,
            "success": 35
          },
          "fouls": {
            "drawn": 12,
            "committed": 26
          },
          "cards": {
            "yellow": 3,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 18,
            "minutes_played": 1620,
            "lineups": 18
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 18975,
          "player_name": "D. Pröpper",
          "firstname": "Davy",
          "lastname": "Pröpper",
          "number": null,
          "position": "Midfielder",
          "age": 29,
          "birth_date": "02\/09\/1991",
          "birth_place": "Arnhem",
          "birth_country": "Netherlands",
          "nationality": "Netherlands",
          "height": "185 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18975,
          "player_name": "D. Pröpper",
          "firstname": "Davy",
          "lastname": "Pröpper",
          "number": null,
          "position": "Midfielder",
          "age": 29,
          "birth_date": "02\/09\/1991",
          "birth_place": "Arnhem",
          "birth_country": "Netherlands",
          "nationality": "Netherlands",
          "height": "185 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 137301,
          "player_name": "A. Cochrane",
          "firstname": "Alexander",
          "lastname": "Cochrane",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "21\/04\/2000",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 137301,
          "player_name": "A. Cochrane",
          "firstname": "Alexander",
          "lastname": "Cochrane",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "21\/04\/2000",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 137301,
          "player_name": "A. Cochrane",
          "firstname": "Alexander",
          "lastname": "Cochrane",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "21\/04\/2000",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "5.800000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 13,
            "key": 1,
            "accuracy": 81
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 2,
            "success": 0
          },
          "fouls": {
            "drawn": 1,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 138791,
          "player_name": "A. Davies",
          "firstname": "Archie Daniel",
          "lastname": "Davies",
          "number": null,
          "position": "Midfielder",
          "age": 22,
          "birth_date": "07\/10\/1998",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 138791,
          "player_name": "A. Davies",
          "firstname": "Archie Daniel",
          "lastname": "Davies",
          "number": null,
          "position": "Midfielder",
          "age": 22,
          "birth_date": "07\/10\/1998",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "6.700000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 24,
            "key": 1,
            "accuracy": 80
          },
          "tackles": {
            "total": 2,
            "blocks": 1,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 3,
            "success": 2
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 100079,
          "player_name": "P. Gwargis",
          "firstname": "Peter",
          "lastname": "Gwargis",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "04\/09\/2000",
          "birth_place": null,
          "birth_country": "Sweden",
          "nationality": "Sweden",
          "height": "180 cm",
          "weight": "69 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 100079,
          "player_name": "P. Gwargis",
          "firstname": "Peter",
          "lastname": "Gwargis",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "04\/09\/2000",
          "birth_place": null,
          "birth_country": "Sweden",
          "nationality": "Sweden",
          "height": "180 cm",
          "weight": "69 kg",
          "injured": null,
          "rating": "7.300000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 18,
            "key": 3,
            "accuracy": 78
          },
          "tackles": {
            "total": 4,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 2,
            "success": 2
          },
          "fouls": {
            "drawn": 1,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 151753,
          "player_name": "T. Jenks",
          "firstname": "Teddy",
          "lastname": "Jenks",
          "number": null,
          "position": "Midfielder",
          "age": 18,
          "birth_date": "12\/03\/2002",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 151753,
          "player_name": "T. Jenks",
          "firstname": "Teddy",
          "lastname": "Jenks",
          "number": null,
          "position": "Midfielder",
          "age": 18,
          "birth_date": "12\/03\/2002",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "6.300000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 15,
            "key": 1,
            "accuracy": 83
          },
          "tackles": {
            "total": 0,
            "blocks": 1,
            "interceptions": 2
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 2,
            "committed": 1
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 82,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          }
        },
        {
          "player_id": 138790,
          "player_name": "R. Longman",
          "firstname": "Ryan",
          "lastname": "Longman",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "06\/11\/2000",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 138790,
          "player_name": "R. Longman",
          "firstname": "Ryan",
          "lastname": "Longman",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "06\/11\/2000",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "6.700000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 1
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 4,
            "key": 0,
            "accuracy": 80
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 1,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 32,
            "lineups": 0
          },
          "substitutes": {
            "in": 1,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 639,
          "player_name": "T. Richards",
          "firstname": "Taylor",
          "lastname": "Richards",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "04\/12\/2000",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 639,
          "player_name": "T. Richards",
          "firstname": "Taylor",
          "lastname": "Richards",
          "number": null,
          "position": "Midfielder",
          "age": 20,
          "birth_date": "04\/12\/2000",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "7.000000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 15,
            "key": 2,
            "accuracy": 78
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 2,
            "success": 2
          },
          "fouls": {
            "drawn": 2,
            "committed": 1
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 138881,
          "player_name": "J. Spong",
          "firstname": "Jack",
          "lastname": "Spong",
          "number": null,
          "position": "Midfielder",
          "age": 18,
          "birth_date": "04\/02\/2002",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 138881,
          "player_name": "J. Spong",
          "firstname": "Jack",
          "lastname": "Spong",
          "number": null,
          "position": "Midfielder",
          "age": 18,
          "birth_date": "04\/02\/2002",
          "birth_place": null,
          "birth_country": "England",
          "nationality": "England",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "6.200000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 3,
            "key": 0,
            "accuracy": 100
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 8,
            "lineups": 0
          },
          "substitutes": {
            "in": 1,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 19364,
          "player_name": "N. Maupay",
          "firstname": "Neal",
          "lastname": "Maupay",
          "number": null,
          "position": "Attacker",
          "age": 24,
          "birth_date": "14\/08\/1996",
          "birth_place": "Versailles",
          "birth_country": "France",
          "nationality": "France",
          "height": "173 cm",
          "weight": "69 kg",
          "injured": null,
          "rating": "6.768181",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 59,
            "on": 22
          },
          "goals": {
            "total": 7,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 317,
            "key": 12,
            "accuracy": 82
          },
          "tackles": {
            "total": 10,
            "blocks": 0,
            "interceptions": 3
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 38,
            "success": 14
          },
          "fouls": {
            "drawn": 25,
            "committed": 23
          },
          "cards": {
            "yellow": 2,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 1,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 22,
            "minutes_played": 1631,
            "lineups": 18
          },
          "substitutes": {
            "in": 4,
            "out": 6,
            "bench": 4
          }
        },
        {
          "player_id": 19364,
          "player_name": "N. Maupay",
          "firstname": "Neal",
          "lastname": "Maupay",
          "number": null,
          "position": "Attacker",
          "age": 24,
          "birth_date": "14\/08\/1996",
          "birth_place": "Versailles",
          "birth_country": "France",
          "nationality": "France",
          "height": "173 cm",
          "weight": "69 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19364,
          "player_name": "N. Maupay",
          "firstname": "Neal",
          "lastname": "Maupay",
          "number": null,
          "position": "Attacker",
          "age": 24,
          "birth_date": "14\/08\/1996",
          "birth_place": "Versailles",
          "birth_country": "France",
          "nationality": "France",
          "height": "173 cm",
          "weight": "69 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 1946,
          "player_name": "L. Trossard",
          "firstname": "Leandro",
          "lastname": "Trossard",
          "number": null,
          "position": "Attacker",
          "age": 26,
          "birth_date": "04\/12\/1994",
          "birth_place": "Waterschei",
          "birth_country": "Belgium",
          "nationality": "Belgium",
          "height": "172 cm",
          "weight": "61 kg",
          "injured": null,
          "rating": "6.881250",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 18,
            "on": 6
          },
          "goals": {
            "total": 2,
            "conceded": 0,
            "assists": 3
          },
          "passes": {
            "total": 275,
            "key": 28,
            "accuracy": 72
          },
          "tackles": {
            "total": 10,
            "blocks": 0,
            "interceptions": 4
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 25,
            "success": 14
          },
          "fouls": {
            "drawn": 2,
            "committed": 4
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 16,
            "minutes_played": 966,
            "lineups": 11
          },
          "substitutes": {
            "in": 5,
            "out": 6,
            "bench": 7
          }
        },
        {
          "player_id": 1946,
          "player_name": "L. Trossard",
          "firstname": "Leandro",
          "lastname": "Trossard",
          "number": null,
          "position": "Attacker",
          "age": 26,
          "birth_date": "04\/12\/1994",
          "birth_place": "Waterschei",
          "birth_country": "Belgium",
          "nationality": "Belgium",
          "height": "172 cm",
          "weight": "61 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 1946,
          "player_name": "L. Trossard",
          "firstname": "Leandro",
          "lastname": "Trossard",
          "number": null,
          "position": "Attacker",
          "age": 26,
          "birth_date": "04\/12\/1994",
          "birth_place": "Waterschei",
          "birth_country": "Belgium",
          "nationality": "Belgium",
          "height": "172 cm",
          "weight": "61 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 2700,
          "player_name": "A. Jahanbakhsh",
          "firstname": "Alireza",
          "lastname": "Jahanbakhsh",
          "number": null,
          "position": "Attacker",
          "age": 27,
          "birth_date": "11\/08\/1993",
          "birth_place": "Jirandeh",
          "birth_country": "Iran",
          "nationality": "Iran",
          "height": "180 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": "7.100000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 8,
            "on": 2
          },
          "goals": {
            "total": 2,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 47,
            "key": 3,
            "accuracy": 77
          },
          "tackles": {
            "total": 4,
            "blocks": 0,
            "interceptions": 3
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 7,
            "success": 4
          },
          "fouls": {
            "drawn": 4,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 4,
            "minutes_played": 190,
            "lineups": 2
          },
          "substitutes": {
            "in": 2,
            "out": 2,
            "bench": 7
          }
        },
        {
          "player_id": 2700,
          "player_name": "A. Jahanbakhsh",
          "firstname": "Alireza",
          "lastname": "Jahanbakhsh",
          "number": null,
          "position": "Attacker",
          "age": 27,
          "birth_date": "11\/08\/1993",
          "birth_place": "Jirandeh",
          "birth_country": "Iran",
          "nationality": "Iran",
          "height": "180 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": "7.500000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 7,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 27,
            "key": 1,
            "accuracy": 64
          },
          "tackles": {
            "total": 3,
            "blocks": 0,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 1
          },
          "fouls": {
            "drawn": 0,
            "committed": 2
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 2700,
          "player_name": "A. Jahanbakhsh",
          "firstname": "Alireza",
          "lastname": "Jahanbakhsh",
          "number": null,
          "position": "Attacker",
          "age": 27,
          "birth_date": "11\/08\/1993",
          "birth_place": "Jirandeh",
          "birth_country": "Iran",
          "nationality": "Iran",
          "height": "180 cm",
          "weight": "76 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 27,
            "lineups": 0
          },
          "substitutes": {
            "in": 1,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 18982,
          "player_name": "G. Murray",
          "firstname": "Glenn",
          "lastname": "Murray",
          "number": null,
          "position": "Attacker",
          "age": 37,
          "birth_date": "25\/09\/1983",
          "birth_place": "Maryport",
          "birth_country": "England",
          "nationality": "England",
          "height": "183 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": "6.475000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 9,
            "on": 3
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 64,
            "key": 2,
            "accuracy": 72
          },
          "tackles": {
            "total": 2,
            "blocks": 1,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 5,
            "success": 0
          },
          "fouls": {
            "drawn": 9,
            "committed": 11
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 14,
            "minutes_played": 414,
            "lineups": 3
          },
          "substitutes": {
            "in": 11,
            "out": 3,
            "bench": 18
          }
        },
        {
          "player_id": 18982,
          "player_name": "G. Murray",
          "firstname": "Glenn",
          "lastname": "Murray",
          "number": null,
          "position": "Attacker",
          "age": 37,
          "birth_date": "25\/09\/1983",
          "birth_place": "Maryport",
          "birth_country": "England",
          "nationality": "England",
          "height": "183 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": "7.200000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 1,
          "shots": {
            "total": 4,
            "on": 2
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 27,
            "key": 3,
            "accuracy": 81
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 1
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 2,
            "success": 0
          },
          "fouls": {
            "drawn": 1,
            "committed": 1
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18982,
          "player_name": "G. Murray",
          "firstname": "Glenn",
          "lastname": "Murray",
          "number": null,
          "position": "Attacker",
          "age": 37,
          "birth_date": "25\/09\/1983",
          "birth_place": "Maryport",
          "birth_country": "England",
          "nationality": "England",
          "height": "183 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18980,
          "player_name": "J. Izquierdo",
          "firstname": "José Heriberto",
          "lastname": "Izquierdo Mena",
          "number": null,
          "position": "Attacker",
          "age": 28,
          "birth_date": "07\/07\/1992",
          "birth_place": "Pereira",
          "birth_country": "Colombia",
          "nationality": "Colombia",
          "height": "171 cm",
          "weight": "73 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18980,
          "player_name": "J. Izquierdo",
          "firstname": "José Heriberto",
          "lastname": "Izquierdo Mena",
          "number": null,
          "position": "Attacker",
          "age": 28,
          "birth_date": "07\/07\/1992",
          "birth_place": "Pereira",
          "birth_country": "Colombia",
          "nationality": "Colombia",
          "height": "171 cm",
          "weight": "73 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18980,
          "player_name": "J. Izquierdo",
          "firstname": "José Heriberto",
          "lastname": "Izquierdo Mena",
          "number": null,
          "position": "Attacker",
          "age": 28,
          "birth_date": "07\/07\/1992",
          "birth_place": "Pereira",
          "birth_country": "Colombia",
          "nationality": "Colombia",
          "height": "171 cm",
          "weight": "73 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19772,
          "player_name": "Aaron Anthony Connolly",
          "firstname": "Aaron Anthony",
          "lastname": "Connolly",
          "number": null,
          "position": "Attacker",
          "age": 20,
          "birth_date": "28\/01\/2000",
          "birth_place": "Galway",
          "birth_country": "Republic of Ireland",
          "nationality": "Republic of Ireland",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "6.714285",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 24,
            "on": 10
          },
          "goals": {
            "total": 2,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 70,
            "key": 3,
            "accuracy": 80
          },
          "tackles": {
            "total": 2,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 15,
            "success": 5
          },
          "fouls": {
            "drawn": 26,
            "committed": 10
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 1,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 14,
            "minutes_played": 721,
            "lineups": 8
          },
          "substitutes": {
            "in": 6,
            "out": 8,
            "bench": 6
          }
        },
        {
          "player_id": 19772,
          "player_name": "Aaron Anthony Connolly",
          "firstname": "Aaron Anthony",
          "lastname": "Connolly",
          "number": null,
          "position": "Attacker",
          "age": 20,
          "birth_date": "28\/01\/2000",
          "birth_place": "Galway",
          "birth_country": "Republic of Ireland",
          "nationality": "Republic of Ireland",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "7.450000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 9,
            "on": 5
          },
          "goals": {
            "total": 1,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 17,
            "key": 3,
            "accuracy": 78
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 3,
            "success": 1
          },
          "fouls": {
            "drawn": 3,
            "committed": 1
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 2,
            "minutes_played": 148,
            "lineups": 2
          },
          "substitutes": {
            "in": 0,
            "out": 1,
            "bench": 0
          }
        },
        {
          "player_id": 19772,
          "player_name": "Aaron Anthony Connolly",
          "firstname": "Aaron Anthony",
          "lastname": "Connolly",
          "number": null,
          "position": "Attacker",
          "age": 20,
          "birth_date": "28\/01\/2000",
          "birth_place": "Galway",
          "birth_country": "Republic of Ireland",
          "nationality": "Republic of Ireland",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 44,
            "lineups": 0
          },
          "substitutes": {
            "in": 1,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 17715,
          "player_name": "Steven Alzate",
          "firstname": "Steven",
          "lastname": "Alzate",
          "number": null,
          "position": "Attacker",
          "age": 22,
          "birth_date": "08\/09\/1998",
          "birth_place": "London",
          "birth_country": "England",
          "nationality": "Colombia",
          "height": "180 cm",
          "weight": null,
          "injured": null,
          "rating": "6.780000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 13,
            "on": 3
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 382,
            "key": 12,
            "accuracy": 82
          },
          "tackles": {
            "total": 24,
            "blocks": 3,
            "interceptions": 9
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 39,
            "success": 28
          },
          "fouls": {
            "drawn": 16,
            "committed": 12
          },
          "cards": {
            "yellow": 1,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 15,
            "minutes_played": 966,
            "lineups": 10
          },
          "substitutes": {
            "in": 5,
            "out": 2,
            "bench": 7
          }
        },
        {
          "player_id": 17715,
          "player_name": "Steven Alzate",
          "firstname": "Steven",
          "lastname": "Alzate",
          "number": null,
          "position": "Attacker",
          "age": 22,
          "birth_date": "08\/09\/1998",
          "birth_place": "London",
          "birth_country": "England",
          "nationality": "Colombia",
          "height": "180 cm",
          "weight": null,
          "injured": null,
          "rating": "7.200000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 1
          },
          "passes": {
            "total": 47,
            "key": 2,
            "accuracy": 94
          },
          "tackles": {
            "total": 1,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 1
          },
          "fouls": {
            "drawn": 2,
            "committed": 1
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 17715,
          "player_name": "Steven Alzate",
          "firstname": "Steven",
          "lastname": "Alzate",
          "number": null,
          "position": "Attacker",
          "age": 22,
          "birth_date": "08\/09\/1998",
          "birth_place": "London",
          "birth_country": "England",
          "nationality": "Colombia",
          "height": "180 cm",
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 90,
            "lineups": 1
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 138792,
          "player_name": "Bojan Radulovic Samoukovic",
          "firstname": "Bojan",
          "lastname": "Radulovic Samoukovic",
          "number": null,
          "position": "Attacker",
          "age": 21,
          "birth_date": "29\/12\/1999",
          "birth_place": "Lleida",
          "birth_country": "Spain",
          "nationality": "Serbia",
          "height": "191 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 138792,
          "player_name": "Bojan Radulovic Samoukovic",
          "firstname": "Bojan",
          "lastname": "Radulovic Samoukovic",
          "number": null,
          "position": "Attacker",
          "age": 21,
          "birth_date": "29\/12\/1999",
          "birth_place": "Lleida",
          "birth_country": "Spain",
          "nationality": "Serbia",
          "height": "191 cm",
          "weight": "79 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 138877,
          "player_name": "R. Yapi",
          "firstname": "Romaric",
          "lastname": "Yapi",
          "number": null,
          "position": "Attacker",
          "age": 20,
          "birth_date": "13\/07\/2000",
          "birth_place": null,
          "birth_country": "France",
          "nationality": "France",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 138877,
          "player_name": "R. Yapi",
          "firstname": "Romaric",
          "lastname": "Yapi",
          "number": null,
          "position": "Attacker",
          "age": 20,
          "birth_date": "13\/07\/2000",
          "birth_place": null,
          "birth_country": "France",
          "nationality": "France",
          "height": null,
          "weight": null,
          "injured": null,
          "rating": "7.000000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 2,
            "on": 1
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 2,
            "key": 0,
            "accuracy": 100
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 1,
            "success": 1
          },
          "fouls": {
            "drawn": 2,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 1,
            "minutes_played": 18,
            "lineups": 0
          },
          "substitutes": {
            "in": 1,
            "out": 0,
            "bench": 1
          }
        },
        {
          "player_id": 18971,
          "player_name": "B. Kayal",
          "firstname": "Beram",
          "lastname": "Kayal",
          "number": null,
          "position": "Midfielder",
          "age": 32,
          "birth_date": "02\/05\/1988",
          "birth_place": "Jadeidi",
          "birth_country": "Israel",
          "nationality": "Israel",
          "height": "178 cm",
          "weight": "74 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18971,
          "player_name": "B. Kayal",
          "firstname": "Beram",
          "lastname": "Kayal",
          "number": null,
          "position": "Midfielder",
          "age": 32,
          "birth_date": "02\/05\/1988",
          "birth_place": "Jadeidi",
          "birth_country": "Israel",
          "nationality": "Israel",
          "height": "178 cm",
          "weight": "74 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19593,
          "player_name": "T. Hemed",
          "firstname": "Tomer",
          "lastname": "Hemed",
          "number": null,
          "position": "Attacker",
          "age": 33,
          "birth_date": "02\/05\/1987",
          "birth_place": "Haifa",
          "birth_country": "Israel",
          "nationality": "Israel",
          "height": "186 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19593,
          "player_name": "T. Hemed",
          "firstname": "Tomer",
          "lastname": "Hemed",
          "number": null,
          "position": "Attacker",
          "age": 33,
          "birth_date": "02\/05\/1987",
          "birth_place": "Haifa",
          "birth_country": "Israel",
          "nationality": "Israel",
          "height": "186 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 19593,
          "player_name": "T. Hemed",
          "firstname": "Tomer",
          "lastname": "Hemed",
          "number": null,
          "position": "Attacker",
          "age": 33,
          "birth_date": "02\/05\/1987",
          "birth_place": "Haifa",
          "birth_country": "Israel",
          "nationality": "Israel",
          "height": "186 cm",
          "weight": "80 kg",
          "injured": null,
          "rating": "6.300000",
          "team_id": 51,
          "team_name": "Brighton",
          "league": "FA Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 1,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18976,
          "player_name": "Max Harrison Sanders",
          "firstname": "Max Harrison",
          "lastname": "Sanders",
          "number": null,
          "position": "Midfielder",
          "age": 21,
          "birth_date": "04\/01\/1999",
          "birth_place": "Crawley",
          "birth_country": "England",
          "nationality": "England",
          "height": "176 cm",
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "Premier League",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 0
          }
        },
        {
          "player_id": 18976,
          "player_name": "Max Harrison Sanders",
          "firstname": "Max Harrison",
          "lastname": "Sanders",
          "number": null,
          "position": "Midfielder",
          "age": 21,
          "birth_date": "04\/01\/1999",
          "birth_place": "Crawley",
          "birth_country": "England",
          "nationality": "England",
          "height": "176 cm",
          "weight": null,
          "injured": null,
          "rating": null,
          "team_id": 51,
          "team_name": "Brighton",
          "league": "League Cup",
          "season": "2019-2020",
          "captain": 0,
          "shots": {
            "total": 0,
            "on": 0
          },
          "goals": {
            "total": 0,
            "conceded": 0,
            "assists": 0
          },
          "passes": {
            "total": 0,
            "key": 0,
            "accuracy": 0
          },
          "tackles": {
            "total": 0,
            "blocks": 0,
            "interceptions": 0
          },
          "duels": {
            "total": 0,
            "won": 0
          },
          "dribbles": {
            "attempts": 0,
            "success": 0
          },
          "fouls": {
            "drawn": 0,
            "committed": 0
          },
          "cards": {
            "yellow": 0,
            "yellowred": 0,
            "red": 0
          },
          "penalty": {
            "won": 0,
            "commited": 0,
            "success": 0,
            "missed": 0,
            "saved": 0
          },
          "games": {
            "appearences": 0,
            "minutes_played": 0,
            "lineups": 0
          },
          "substitutes": {
            "in": 0,
            "out": 0,
            "bench": 1
          }
        }
      ]
    }
  }
  const { pastGames, futureGames } = filterFixtures(data);
  
  // The rendered component
  return (
    <div>
      <Row gutter={16} style={{marginBottom: '20px'}}>
        <p>Last 4 games</p>
        {pastGames.map(game => (
          <FixtureRow game={game} />
        ))}
      </Row>

      <Row gutter={16} style={{marginBottom: '40px'}}>
        <p>Next 4 games</p>
        {futureGames.map(game => (
          <FixtureRow game={game} />
        ))}
      </Row>
    </div>
  );
}

export default Players;