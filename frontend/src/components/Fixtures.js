// Let's import React, our styles and React Async
import React from 'react';
import { useAsync } from 'react-async';
import { Row } from 'antd';

import { filterFixtures } from '../utils/filterFixtures';
import { FixtureRow } from './FixtureRow';

const loadTeam = async () =>
  await fetch("https://www.api-football.com/demo/api/v2/teams/team/1")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

// Our component
function Fixtures() {
  //const { data, error, isLoading } = useAsync({ promiseFn: loadTeam })
  //if (isLoading) return "Loading..."
  //if (error) return `Something went wrong: ${error.message}`

  const data = {
    "api": {
      "results": 175,
      "fixtures": [
        {
          "fixture_id": 18242,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-08-06T14:00:00+00:00",
          "event_timestamp": 1470492000,
          "firstHalfStart": 1470492000,
          "secondHalfStart": 1470495600,
          "round": "Regular Season - 1",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "iPro Stadium (Derby)",
          "referee": null,
          "homeTeam": {
            "team_id": 69,
            "team_name": "Derby",
            "logo": "https:\/\/media.api-football.com\/teams\/69.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18236,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-08-12T18:45:00+00:00",
          "event_timestamp": 1471027500,
          "firstHalfStart": 1471027500,
          "secondHalfStart": 1471031100,
          "round": "Regular Season - 2",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Brighton, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 65,
            "team_name": "Nottingham Forest",
            "logo": "https:\/\/media.api-football.com\/teams\/65.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18218,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-08-16T18:45:00+00:00",
          "event_timestamp": 1471373100,
          "firstHalfStart": 1471373100,
          "secondHalfStart": 1471376700,
          "round": "Regular Season - 3",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Brighton, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 73,
            "team_name": "Rotherham",
            "logo": "https:\/\/media.api-football.com\/teams\/73.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "2-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18210,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-08-20T14:00:00+00:00",
          "event_timestamp": 1471701600,
          "firstHalfStart": 1471701600,
          "secondHalfStart": 1471705200,
          "round": "Regular Season - 4",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Madejski Stadium (Reading, Berkshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 53,
            "team_name": "Reading",
            "logo": "https:\/\/media.api-football.com\/teams\/53.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "1-1",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18189,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-08-27T16:30:00+00:00",
          "event_timestamp": 1472315400,
          "firstHalfStart": 1472315400,
          "secondHalfStart": 1472319000,
          "round": "Regular Season - 5",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "St. James' Park (Newcastle upon Tyne)",
          "referee": null,
          "homeTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18179,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-09-10T14:00:00+00:00",
          "event_timestamp": 1473516000,
          "firstHalfStart": 1473516000,
          "secondHalfStart": 1473519600,
          "round": "Regular Season - 6",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 55,
            "team_name": "Brentford",
            "logo": "https:\/\/media.api-football.com\/teams\/55.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18169,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-09-13T18:45:00+00:00",
          "event_timestamp": 1473792300,
          "firstHalfStart": 1473792300,
          "secondHalfStart": 1473795900,
          "round": "Regular Season - 7",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 37,
            "team_name": "Huddersfield",
            "logo": "https:\/\/media.api-football.com\/teams\/37.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18158,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-09-17T14:00:00+00:00",
          "event_timestamp": 1474120800,
          "firstHalfStart": 1474120800,
          "secondHalfStart": 1474124400,
          "round": "Regular Season - 8",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Pirelli Stadium (Burton-upon-Trent, Staffordshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 748,
            "team_name": "Burton Albion",
            "logo": "https:\/\/media.api-football.com\/teams\/748.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18142,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-09-24T14:00:00+00:00",
          "event_timestamp": 1474725600,
          "firstHalfStart": 1474725600,
          "secondHalfStart": 1474729200,
          "round": "Regular Season - 9",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 747,
            "team_name": "Barnsley",
            "logo": "https:\/\/media.api-football.com\/teams\/747.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18138,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-09-27T18:45:00+00:00",
          "event_timestamp": 1475001900,
          "firstHalfStart": 1475001900,
          "secondHalfStart": 1475005500,
          "round": "Regular Season - 10",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Portman Road Stadium (Ipswich, Suffolk)",
          "referee": null,
          "homeTeam": {
            "team_id": 57,
            "team_name": "Ipswich",
            "logo": "https:\/\/media.api-football.com\/teams\/57.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18127,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-10-01T14:00:00+00:00",
          "event_timestamp": 1475330400,
          "firstHalfStart": 1475330400,
          "secondHalfStart": 1475334000,
          "round": "Regular Season - 11",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Hillsborough Stadium (Sheffield)",
          "referee": null,
          "homeTeam": {
            "team_id": 74,
            "team_name": "Sheffield Wednesday",
            "logo": "https:\/\/media.api-football.com\/teams\/74.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18109,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-10-15T14:00:00+00:00",
          "event_timestamp": 1476540000,
          "firstHalfStart": 1476540000,
          "secondHalfStart": 1476543600,
          "round": "Regular Season - 12",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 59,
            "team_name": "Preston",
            "logo": "https:\/\/media.api-football.com\/teams\/59.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18099,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-10-18T18:45:00+00:00",
          "event_timestamp": 1476816300,
          "firstHalfStart": 1476816300,
          "secondHalfStart": 1476819900,
          "round": "Regular Season - 13",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 39,
            "team_name": "Wolves",
            "logo": "https:\/\/media.api-football.com\/teams\/39.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18090,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-10-22T14:00:00+00:00",
          "event_timestamp": 1477144800,
          "firstHalfStart": 1477144800,
          "secondHalfStart": 1477148400,
          "round": "Regular Season - 14",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The DW Stadium (Wigan)",
          "referee": null,
          "homeTeam": {
            "team_id": 61,
            "team_name": "Wigan",
            "logo": "https:\/\/media.api-football.com\/teams\/61.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18072,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-10-29T14:00:00+00:00",
          "event_timestamp": 1477749600,
          "firstHalfStart": 1477749600,
          "secondHalfStart": 1477753200,
          "round": "Regular Season - 15",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 71,
            "team_name": "Norwich",
            "logo": "https:\/\/media.api-football.com\/teams\/71.png"
          },
          "goalsHomeTeam": 5,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "5-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18057,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-11-05T17:30:00+00:00",
          "event_timestamp": 1478367000,
          "firstHalfStart": 1478367000,
          "secondHalfStart": 1478370600,
          "round": "Regular Season - 16",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Ashton Gate Stadium (Bristol)",
          "referee": null,
          "homeTeam": {
            "team_id": 56,
            "team_name": "Bristol City",
            "logo": "https:\/\/media.api-football.com\/teams\/56.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-2",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18056,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-11-18T19:45:00+00:00",
          "event_timestamp": 1479498300,
          "firstHalfStart": 1479498300,
          "secondHalfStart": 1479501900,
          "round": "Regular Season - 17",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 66,
            "team_name": "Aston Villa",
            "logo": "https:\/\/media.api-football.com\/teams\/66.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18037,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-11-26T15:00:00+00:00",
          "event_timestamp": 1480172400,
          "firstHalfStart": 1480172400,
          "secondHalfStart": 1480176000,
          "round": "Regular Season - 18",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 36,
            "team_name": "Fulham",
            "logo": "https:\/\/media.api-football.com\/teams\/36.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18026,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-12-03T15:00:00+00:00",
          "event_timestamp": 1480777200,
          "firstHalfStart": 1480777200,
          "secondHalfStart": 1480780800,
          "round": "Regular Season - 19",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Cardiff City Stadium (Cardiff (Caerdydd))",
          "referee": null,
          "homeTeam": {
            "team_id": 43,
            "team_name": "Cardiff",
            "logo": "https:\/\/media.api-football.com\/teams\/43.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18020,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-12-09T19:45:00+00:00",
          "event_timestamp": 1481312700,
          "firstHalfStart": 1481312700,
          "secondHalfStart": 1481316300,
          "round": "Regular Season - 20",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 63,
            "team_name": "Leeds",
            "logo": "https:\/\/media.api-football.com\/teams\/63.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 18001,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-12-13T19:45:00+00:00",
          "event_timestamp": 1481658300,
          "firstHalfStart": 1481658300,
          "secondHalfStart": 1481661900,
          "round": "Regular Season - 21",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Ewood Park (Blackburn, Lancashire)",
          "referee": null,
          "homeTeam": {
            "team_id": 67,
            "team_name": "Blackburn",
            "logo": "https:\/\/media.api-football.com\/teams\/67.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "0-1",
            "fulltime": "2-3",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17986,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-12-17T17:30:00+00:00",
          "event_timestamp": 1481995800,
          "firstHalfStart": 1481995800,
          "secondHalfStart": 1481999400,
          "round": "Regular Season - 22",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "St. Andrew's Stadium (Birmingham)",
          "referee": null,
          "homeTeam": {
            "team_id": 54,
            "team_name": "Birmingham",
            "logo": "https:\/\/media.api-football.com\/teams\/54.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17974,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2016-12-27T12:30:00+00:00",
          "event_timestamp": 1482841800,
          "firstHalfStart": 1482841800,
          "secondHalfStart": 1482845400,
          "round": "Regular Season - 23",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 72,
            "team_name": "QPR",
            "logo": "https:\/\/media.api-football.com\/teams\/72.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17956,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-01-02T15:00:00+00:00",
          "event_timestamp": 1483369200,
          "firstHalfStart": 1483369200,
          "secondHalfStart": 1483372800,
          "round": "Regular Season - 25",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Craven Cottage (London)",
          "referee": null,
          "homeTeam": {
            "team_id": 36,
            "team_name": "Fulham",
            "logo": "https:\/\/media.api-football.com\/teams\/36.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 210163,
          "league_id": 760,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-01-07T15:00:00+00:00",
          "event_timestamp": 1483801200,
          "firstHalfStart": 1483801200,
          "secondHalfStart": 1483804800,
          "round": "3rd Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 1348,
            "team_name": "Milton Keynes Dons",
            "logo": "https:\/\/media.api-football.com\/teams\/1348.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17945,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-01-14T15:00:00+00:00",
          "event_timestamp": 1484406000,
          "firstHalfStart": 1484406000,
          "secondHalfStart": 1484409600,
          "round": "Regular Season - 26",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Deepdale Stadium (Preston)",
          "referee": null,
          "homeTeam": {
            "team_id": 59,
            "team_name": "Preston",
            "logo": "https:\/\/media.api-football.com\/teams\/59.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17938,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-01-20T19:45:00+00:00",
          "event_timestamp": 1484941500,
          "firstHalfStart": 1484941500,
          "secondHalfStart": 1484945100,
          "round": "Regular Season - 27",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 74,
            "team_name": "Sheffield Wednesday",
            "logo": "https:\/\/media.api-football.com\/teams\/74.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17926,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-01-24T19:45:00+00:00",
          "event_timestamp": 1485287100,
          "firstHalfStart": 1485287100,
          "secondHalfStart": 1485290700,
          "round": "Regular Season - 24",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 43,
            "team_name": "Cardiff",
            "logo": "https:\/\/media.api-football.com\/teams\/43.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 210136,
          "league_id": 760,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-01-28T15:00:00+00:00",
          "event_timestamp": 1485615600,
          "firstHalfStart": 1485615600,
          "secondHalfStart": 1485619200,
          "round": "4th Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Sincil Bank Stadium (Lincoln, Lincolnshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 1379,
            "team_name": "Lincoln",
            "logo": "https:\/\/media.api-football.com\/teams\/1379.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17908,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-02-02T19:45:00+00:00",
          "event_timestamp": 1486064700,
          "firstHalfStart": 1486064700,
          "secondHalfStart": 1486068300,
          "round": "Regular Season - 29",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The John Smith's Stadium (Huddersfield, West Yorkshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 37,
            "team_name": "Huddersfield",
            "logo": "https:\/\/media.api-football.com\/teams\/37.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "3-1",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17896,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-02-05T15:00:00+00:00",
          "event_timestamp": 1486306800,
          "firstHalfStart": 1486306800,
          "secondHalfStart": 1486310400,
          "round": "Regular Season - 30",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Griffin Park (Brentford, Middlesex)",
          "referee": null,
          "homeTeam": {
            "team_id": 55,
            "team_name": "Brentford",
            "logo": "https:\/\/media.api-football.com\/teams\/55.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "2-0",
            "fulltime": "3-3",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17885,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-02-11T15:00:00+00:00",
          "event_timestamp": 1486825200,
          "firstHalfStart": 1486825200,
          "secondHalfStart": 1486828800,
          "round": "Regular Season - 31",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 748,
            "team_name": "Burton Albion",
            "logo": "https:\/\/media.api-football.com\/teams\/748.png"
          },
          "goalsHomeTeam": 4,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "4-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17874,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-02-14T19:45:00+00:00",
          "event_timestamp": 1487101500,
          "firstHalfStart": 1487101500,
          "secondHalfStart": 1487105100,
          "round": "Regular Season - 32",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 57,
            "team_name": "Ipswich",
            "logo": "https:\/\/media.api-football.com\/teams\/57.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17865,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-02-18T15:00:00+00:00",
          "event_timestamp": 1487430000,
          "firstHalfStart": 1487430000,
          "secondHalfStart": 1487433600,
          "round": "Regular Season - 33",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Oakwell Stadium (Barnsley, South Yorkshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 747,
            "team_name": "Barnsley",
            "logo": "https:\/\/media.api-football.com\/teams\/747.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17848,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-02-25T17:30:00+00:00",
          "event_timestamp": 1488043800,
          "firstHalfStart": 1488043800,
          "secondHalfStart": 1488047400,
          "round": "Regular Season - 34",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 53,
            "team_name": "Reading",
            "logo": "https:\/\/media.api-football.com\/teams\/53.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17845,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-02-28T19:45:00+00:00",
          "event_timestamp": 1488311100,
          "firstHalfStart": 1488311100,
          "secondHalfStart": 1488314700,
          "round": "Regular Season - 28",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17838,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-03-04T15:00:00+00:00",
          "event_timestamp": 1488639600,
          "firstHalfStart": 1488639600,
          "secondHalfStart": 1488643200,
          "round": "Regular Season - 35",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The City Ground (Nottingham, Nottinghamshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 65,
            "team_name": "Nottingham Forest",
            "logo": "https:\/\/media.api-football.com\/teams\/65.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17830,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-03-07T19:45:00+00:00",
          "event_timestamp": 1488915900,
          "firstHalfStart": 1488915900,
          "secondHalfStart": 1488919500,
          "round": "Regular Season - 36",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "AESSEAL New York Stadium (Rotherham, South Yorkshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 73,
            "team_name": "Rotherham",
            "logo": "https:\/\/media.api-football.com\/teams\/73.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17819,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-03-10T19:45:00+00:00",
          "event_timestamp": 1489175100,
          "firstHalfStart": 1489175100,
          "secondHalfStart": 1489178700,
          "round": "Regular Season - 37",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 69,
            "team_name": "Derby",
            "logo": "https:\/\/media.api-football.com\/teams\/69.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "2-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17794,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-03-18T17:30:00+00:00",
          "event_timestamp": 1489858200,
          "firstHalfStart": 1489858200,
          "secondHalfStart": 1489861800,
          "round": "Regular Season - 38",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Elland Road (Leeds, West Yorkshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 63,
            "team_name": "Leeds",
            "logo": "https:\/\/media.api-football.com\/teams\/63.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17785,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-04-01T14:00:00+00:00",
          "event_timestamp": 1491055200,
          "firstHalfStart": 1491055200,
          "secondHalfStart": 1491058800,
          "round": "Regular Season - 39",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 67,
            "team_name": "Blackburn",
            "logo": "https:\/\/media.api-football.com\/teams\/67.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17776,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-04-04T18:45:00+00:00",
          "event_timestamp": 1491331500,
          "firstHalfStart": 1491331500,
          "secondHalfStart": 1491335100,
          "round": "Regular Season - 40",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 54,
            "team_name": "Birmingham",
            "logo": "https:\/\/media.api-football.com\/teams\/54.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17769,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-04-07T18:45:00+00:00",
          "event_timestamp": 1491590700,
          "firstHalfStart": 1491590700,
          "secondHalfStart": 1491594300,
          "round": "Regular Season - 41",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Loftus Road Stadium (London)",
          "referee": null,
          "homeTeam": {
            "team_id": 72,
            "team_name": "QPR",
            "logo": "https:\/\/media.api-football.com\/teams\/72.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17749,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-04-14T16:00:00+00:00",
          "event_timestamp": 1492185600,
          "firstHalfStart": 1492185600,
          "secondHalfStart": 1492189200,
          "round": "Regular Season - 42",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Molineux Stadium (Wolverhampton, West Midlands)",
          "referee": null,
          "homeTeam": {
            "team_id": 39,
            "team_name": "Wolves",
            "logo": "https:\/\/media.api-football.com\/teams\/39.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17738,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-04-17T14:00:00+00:00",
          "event_timestamp": 1492437600,
          "firstHalfStart": 1492437600,
          "secondHalfStart": 1492441200,
          "round": "Regular Season - 43",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 61,
            "team_name": "Wigan",
            "logo": "https:\/\/media.api-football.com\/teams\/61.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17733,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-04-21T18:45:00+00:00",
          "event_timestamp": 1492800300,
          "firstHalfStart": 1492800300,
          "secondHalfStart": 1492803900,
          "round": "Regular Season - 44",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Carrow Road (Norwich, Norfolk)",
          "referee": null,
          "homeTeam": {
            "team_id": 71,
            "team_name": "Norwich",
            "logo": "https:\/\/media.api-football.com\/teams\/71.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "2-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17709,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-04-29T16:30:00+00:00",
          "event_timestamp": 1493483400,
          "firstHalfStart": 1493483400,
          "secondHalfStart": 1493487000,
          "round": "Regular Season - 45",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 56,
            "team_name": "Bristol City",
            "logo": "https:\/\/media.api-football.com\/teams\/56.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 17697,
          "league_id": 57,
          "league": {
            "name": "Championship",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/57.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-05-07T11:00:00+00:00",
          "event_timestamp": 1494154800,
          "firstHalfStart": 1494154800,
          "secondHalfStart": 1494158400,
          "round": "Regular Season - 46",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Villa Park (Birmingham)",
          "referee": null,
          "homeTeam": {
            "team_id": 66,
            "team_name": "Aston Villa",
            "logo": "https:\/\/media.api-football.com\/teams\/66.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11904,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-08-12T16:30:00+00:00",
          "event_timestamp": 1502555400,
          "firstHalfStart": 1502555400,
          "secondHalfStart": 1502559000,
          "round": "Regular Season - 1",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 50,
            "team_name": "Manchester City",
            "logo": "https:\/\/media.api-football.com\/teams\/50.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11898,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-08-19T14:00:00+00:00",
          "event_timestamp": 1503151200,
          "firstHalfStart": 1503151200,
          "secondHalfStart": 1503154800,
          "round": "Regular Season - 2",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "King Power Stadium, Leicester",
          "referee": "Lee Probert, England",
          "homeTeam": {
            "team_id": 46,
            "team_name": "Leicester",
            "logo": "https:\/\/media.api-football.com\/teams\/46.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11890,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-08-26T14:00:00+00:00",
          "event_timestamp": 1503756000,
          "firstHalfStart": 1503756000,
          "secondHalfStart": 1503759600,
          "round": "Regular Season - 3",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Vicarage Road, Watford",
          "referee": "Graham Scott, England",
          "homeTeam": {
            "team_id": 38,
            "team_name": "Watford",
            "logo": "https:\/\/media.api-football.com\/teams\/38.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11877,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-09-09T14:00:00+00:00",
          "event_timestamp": 1504965600,
          "firstHalfStart": 1504965600,
          "secondHalfStart": 1504969200,
          "round": "Regular Season - 4",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 60,
            "team_name": "West Brom",
            "logo": "https:\/\/media.api-football.com\/teams\/60.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11871,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-09-15T19:00:00+00:00",
          "event_timestamp": 1505502000,
          "firstHalfStart": 1505502000,
          "secondHalfStart": 1505505600,
          "round": "Regular Season - 5",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Vitality Stadium, Bournemouth",
          "referee": "Craig Pawson, England",
          "homeTeam": {
            "team_id": 35,
            "team_name": "Bournemouth",
            "logo": "https:\/\/media.api-football.com\/teams\/35.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11853,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-09-24T15:00:00+00:00",
          "event_timestamp": 1506265200,
          "firstHalfStart": 1506265200,
          "secondHalfStart": 1506268800,
          "round": "Regular Season - 6",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Andre Marriner, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11844,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-10-01T11:00:00+00:00",
          "event_timestamp": 1506855600,
          "firstHalfStart": 1506855600,
          "secondHalfStart": 1506859200,
          "round": "Regular Season - 7",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Emirates Stadium, London",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 42,
            "team_name": "Arsenal",
            "logo": "https:\/\/media.api-football.com\/teams\/42.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11834,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-10-15T12:30:00+00:00",
          "event_timestamp": 1508070600,
          "firstHalfStart": 1508070600,
          "secondHalfStart": 1508074200,
          "round": "Regular Season - 8",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 45,
            "team_name": "Everton",
            "logo": "https:\/\/media.api-football.com\/teams\/45.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11831,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-10-20T19:00:00+00:00",
          "event_timestamp": 1508526000,
          "firstHalfStart": 1508526000,
          "secondHalfStart": 1508529600,
          "round": "Regular Season - 9",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "London Stadium, London",
          "referee": "Martin Atkinson, England",
          "homeTeam": {
            "team_id": 48,
            "team_name": "West Ham",
            "logo": "https:\/\/media.api-football.com\/teams\/48.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "0-2",
            "fulltime": "0-3",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11814,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-10-29T13:30:00+00:00",
          "event_timestamp": 1509283800,
          "firstHalfStart": 1509283800,
          "secondHalfStart": 1509287400,
          "round": "Regular Season - 10",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Neil Swarbrick, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 41,
            "team_name": "Southampton",
            "logo": "https:\/\/media.api-football.com\/teams\/41.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11810,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-11-04T15:00:00+00:00",
          "event_timestamp": 1509807600,
          "firstHalfStart": 1509807600,
          "secondHalfStart": 1509811200,
          "round": "Regular Season - 11",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Liberty Stadium, Swansea",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 76,
            "team_name": "Swansea",
            "logo": "https:\/\/media.api-football.com\/teams\/76.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11792,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-11-20T20:00:00+00:00",
          "event_timestamp": 1511208000,
          "firstHalfStart": 1511208000,
          "secondHalfStart": 1511211600,
          "round": "Regular Season - 12",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Lee Mason, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 75,
            "team_name": "Stoke City",
            "logo": "https:\/\/media.api-football.com\/teams\/75.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "1-2",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11787,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-11-25T15:00:00+00:00",
          "event_timestamp": 1511622000,
          "firstHalfStart": 1511622000,
          "secondHalfStart": 1511625600,
          "round": "Regular Season - 13",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Old Trafford, Manchester",
          "referee": "Neil Swarbrick, England",
          "homeTeam": {
            "team_id": 33,
            "team_name": "Manchester United",
            "logo": "https:\/\/media.api-football.com\/teams\/33.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11780,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-11-28T19:45:00+00:00",
          "event_timestamp": 1511898300,
          "firstHalfStart": 1511898300,
          "secondHalfStart": 1511901900,
          "round": "Regular Season - 14",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Andre Marriner, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 52,
            "team_name": "Crystal Palace",
            "logo": "https:\/\/media.api-football.com\/teams\/52.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11765,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-12-02T15:00:00+00:00",
          "event_timestamp": 1512226800,
          "firstHalfStart": 1512226800,
          "secondHalfStart": 1512230400,
          "round": "Regular Season - 15",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Graham Scott, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 40,
            "team_name": "Liverpool",
            "logo": "https:\/\/media.api-football.com\/teams\/40.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 5,
          "score": {
            "halftime": "0-2",
            "fulltime": "1-5",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11758,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-12-09T15:00:00+00:00",
          "event_timestamp": 1512831600,
          "firstHalfStart": 1512831600,
          "secondHalfStart": 1512835200,
          "round": "Regular Season - 16",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "John Smith's Stadium, Huddersfield",
          "referee": "Stuart Attwell, England",
          "homeTeam": {
            "team_id": 37,
            "team_name": "Huddersfield",
            "logo": "https:\/\/media.api-football.com\/teams\/37.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "2-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11744,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-12-13T20:00:00+00:00",
          "event_timestamp": 1513195200,
          "firstHalfStart": 1513195200,
          "secondHalfStart": 1513198800,
          "round": "Regular Season - 17",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Wembley Stadium, London",
          "referee": "Robert Madley, England",
          "homeTeam": {
            "team_id": 47,
            "team_name": "Tottenham",
            "logo": "https:\/\/media.api-football.com\/teams\/47.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11738,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-12-16T15:00:00+00:00",
          "event_timestamp": 1513436400,
          "firstHalfStart": 1513436400,
          "secondHalfStart": 1513440000,
          "round": "Regular Season - 18",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 44,
            "team_name": "Burnley",
            "logo": "https:\/\/media.api-football.com\/teams\/44.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11724,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-12-23T15:00:00+00:00",
          "event_timestamp": 1514041200,
          "firstHalfStart": 1514041200,
          "secondHalfStart": 1514044800,
          "round": "Regular Season - 19",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Paul Tierney, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 38,
            "team_name": "Watford",
            "logo": "https:\/\/media.api-football.com\/teams\/38.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11716,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-12-26T15:00:00+00:00",
          "event_timestamp": 1514300400,
          "firstHalfStart": 1514300400,
          "secondHalfStart": 1514304000,
          "round": "Regular Season - 20",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Stamford Bridge, London",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 49,
            "team_name": "Chelsea",
            "logo": "https:\/\/media.api-football.com\/teams\/49.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11710,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2017-12-30T15:00:00+00:00",
          "event_timestamp": 1514646000,
          "firstHalfStart": 1514646000,
          "secondHalfStart": 1514649600,
          "round": "Regular Season - 21",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "St James' Park, Newcastle upon Tyne",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11702,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-01-01T12:30:00+00:00",
          "event_timestamp": 1514809800,
          "firstHalfStart": 1514809800,
          "secondHalfStart": 1514813400,
          "round": "Regular Season - 22",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 35,
            "team_name": "Bournemouth",
            "logo": "https:\/\/media.api-football.com\/teams\/35.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "1-1",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 210042,
          "league_id": 759,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-01-08T19:45:00+00:00",
          "event_timestamp": 1515440700,
          "firstHalfStart": 1515440700,
          "secondHalfStart": 1515444300,
          "round": "3rd Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 52,
            "team_name": "Crystal Palace",
            "logo": "https:\/\/media.api-football.com\/teams\/52.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11691,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-01-13T15:00:00+00:00",
          "event_timestamp": 1515855600,
          "firstHalfStart": 1515855600,
          "secondHalfStart": 1515859200,
          "round": "Regular Season - 23",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The Hawthorns, West Bromwich",
          "referee": "Martin Atkinson, England",
          "homeTeam": {
            "team_id": 60,
            "team_name": "West Brom",
            "logo": "https:\/\/media.api-football.com\/teams\/60.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11681,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-01-20T12:30:00+00:00",
          "event_timestamp": 1516451400,
          "firstHalfStart": 1516451400,
          "secondHalfStart": 1516455000,
          "round": "Regular Season - 24",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Jonathan Moss, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 49,
            "team_name": "Chelsea",
            "logo": "https:\/\/media.api-football.com\/teams\/49.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 4,
          "score": {
            "halftime": "0-2",
            "fulltime": "0-4",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209995,
          "league_id": 759,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-01-27T15:00:00+00:00",
          "event_timestamp": 1517065200,
          "firstHalfStart": 1517065200,
          "secondHalfStart": 1517068800,
          "round": "4th Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Riverside Stadium (Middlesbrough)",
          "referee": null,
          "homeTeam": {
            "team_id": 70,
            "team_name": "Middlesbrough",
            "logo": "https:\/\/media.api-football.com\/teams\/70.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11668,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-01-31T19:45:00+00:00",
          "event_timestamp": 1517427900,
          "firstHalfStart": 1517427900,
          "secondHalfStart": 1517431500,
          "round": "Regular Season - 25",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "St. Mary's Stadium, Southampton",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 41,
            "team_name": "Southampton",
            "logo": "https:\/\/media.api-football.com\/teams\/41.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11657,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-02-03T15:00:00+00:00",
          "event_timestamp": 1517670000,
          "firstHalfStart": 1517670000,
          "secondHalfStart": 1517673600,
          "round": "Regular Season - 26",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Roger East, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 48,
            "team_name": "West Ham",
            "logo": "https:\/\/media.api-football.com\/teams\/48.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11648,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-02-10T15:00:00+00:00",
          "event_timestamp": 1518274800,
          "firstHalfStart": 1518274800,
          "secondHalfStart": 1518278400,
          "round": "Regular Season - 27",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "bet365 Stadium, Stoke",
          "referee": "Robert Madley, England",
          "homeTeam": {
            "team_id": 75,
            "team_name": "Stoke City",
            "logo": "https:\/\/media.api-football.com\/teams\/75.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209979,
          "league_id": 759,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-02-17T15:15:00+00:00",
          "event_timestamp": 1518880500,
          "firstHalfStart": 1518880500,
          "secondHalfStart": 1518884100,
          "round": "5th Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 1346,
            "team_name": "Coventry",
            "logo": "https:\/\/media.api-football.com\/teams\/1346.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "2-0",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11637,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-02-24T15:00:00+00:00",
          "event_timestamp": 1519484400,
          "firstHalfStart": 1519484400,
          "secondHalfStart": 1519488000,
          "round": "Regular Season - 28",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 76,
            "team_name": "Swansea",
            "logo": "https:\/\/media.api-football.com\/teams\/76.png"
          },
          "goalsHomeTeam": 4,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "4-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11624,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-03-04T13:30:00+00:00",
          "event_timestamp": 1520170200,
          "firstHalfStart": 1520170200,
          "secondHalfStart": 1520173800,
          "round": "Regular Season - 29",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Stuart Attwell, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 42,
            "team_name": "Arsenal",
            "logo": "https:\/\/media.api-football.com\/teams\/42.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "2-1",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11616,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-03-10T15:00:00+00:00",
          "event_timestamp": 1520694000,
          "firstHalfStart": 1520694000,
          "secondHalfStart": 1520697600,
          "round": "Regular Season - 30",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Goodison Park, Liverpool",
          "referee": "Roger East, England",
          "homeTeam": {
            "team_id": 45,
            "team_name": "Everton",
            "logo": "https:\/\/media.api-football.com\/teams\/45.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209967,
          "league_id": 759,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-03-17T19:45:00+00:00",
          "event_timestamp": 1521315900,
          "firstHalfStart": 1521315900,
          "secondHalfStart": 1521319500,
          "round": "Quarter-finals",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Old Trafford (Manchester)",
          "referee": null,
          "homeTeam": {
            "team_id": 33,
            "team_name": "Manchester United",
            "logo": "https:\/\/media.api-football.com\/teams\/33.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11601,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-03-31T14:00:00+00:00",
          "event_timestamp": 1522504800,
          "firstHalfStart": 1522504800,
          "secondHalfStart": 1522508400,
          "round": "Regular Season - 32",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 46,
            "team_name": "Leicester",
            "logo": "https:\/\/media.api-football.com\/teams\/46.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11592,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-04-07T14:00:00+00:00",
          "event_timestamp": 1523109600,
          "firstHalfStart": 1523109600,
          "secondHalfStart": 1523113200,
          "round": "Regular Season - 33",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 37,
            "team_name": "Huddersfield",
            "logo": "https:\/\/media.api-football.com\/teams\/37.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11584,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-04-14T14:00:00+00:00",
          "event_timestamp": 1523714400,
          "firstHalfStart": 1523714400,
          "secondHalfStart": 1523718000,
          "round": "Regular Season - 34",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Selhurst Park, London",
          "referee": "Andre Marriner, England",
          "homeTeam": {
            "team_id": 52,
            "team_name": "Crystal Palace",
            "logo": "https:\/\/media.api-football.com\/teams\/52.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "3-2",
            "fulltime": "3-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11577,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-04-17T18:45:00+00:00",
          "event_timestamp": 1523990700,
          "firstHalfStart": 1523990700,
          "secondHalfStart": 1523994300,
          "round": "Regular Season - 35",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 47,
            "team_name": "Tottenham",
            "logo": "https:\/\/media.api-football.com\/teams\/47.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11562,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-04-28T14:00:00+00:00",
          "event_timestamp": 1524924000,
          "firstHalfStart": 1524924000,
          "secondHalfStart": 1524927600,
          "round": "Regular Season - 36",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Turf Moor, Burnley",
          "referee": "Roger East, England",
          "homeTeam": {
            "team_id": 44,
            "team_name": "Burnley",
            "logo": "https:\/\/media.api-football.com\/teams\/44.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11557,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-05-04T19:00:00+00:00",
          "event_timestamp": 1525460400,
          "firstHalfStart": 1525460400,
          "secondHalfStart": 1525464000,
          "round": "Regular Season - 37",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Craig Pawson, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 33,
            "team_name": "Manchester United",
            "logo": "https:\/\/media.api-football.com\/teams\/33.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11543,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-05-09T19:00:00+00:00",
          "event_timestamp": 1525892400,
          "firstHalfStart": 1525892400,
          "secondHalfStart": 1525896000,
          "round": "Regular Season - 31",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Etihad Stadium, Manchester",
          "referee": "Paul Tierney, England",
          "homeTeam": {
            "team_id": 50,
            "team_name": "Manchester City",
            "logo": "https:\/\/media.api-football.com\/teams\/50.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "2-1",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 11535,
          "league_id": 37,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/37.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-05-13T14:00:00+00:00",
          "event_timestamp": 1526220000,
          "firstHalfStart": 1526220000,
          "secondHalfStart": 1526223600,
          "round": "Regular Season - 38",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Anfield, Liverpool",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 40,
            "team_name": "Liverpool",
            "logo": "https:\/\/media.api-football.com\/teams\/40.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 4,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "2-0",
            "fulltime": "4-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 70,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-08-11T14:00:00+00:00",
          "event_timestamp": 1533996000,
          "firstHalfStart": 1533996000,
          "secondHalfStart": 1533999600,
          "round": "Regular Season - 1",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Vicarage Road, Watford",
          "referee": "Jonathan Moss, England",
          "homeTeam": {
            "team_id": 38,
            "team_name": "Watford",
            "logo": "https:\/\/media.api-football.com\/teams\/38.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 83,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-08-19T15:00:00+00:00",
          "event_timestamp": 1534690800,
          "firstHalfStart": 1534690800,
          "secondHalfStart": 1534694400,
          "round": "Regular Season - 2",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 33,
            "team_name": "Manchester United",
            "logo": "https:\/\/media.api-football.com\/teams\/33.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "3-1",
            "fulltime": "3-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 91,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-08-25T16:30:00+00:00",
          "event_timestamp": 1535214600,
          "firstHalfStart": 1535214600,
          "secondHalfStart": 1535218200,
          "round": "Regular Season - 3",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Anfield, Liverpool",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 40,
            "team_name": "Liverpool",
            "logo": "https:\/\/media.api-football.com\/teams\/40.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 96,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-09-01T14:00:00+00:00",
          "event_timestamp": 1535810400,
          "firstHalfStart": 1535810400,
          "secondHalfStart": 1535814000,
          "round": "Regular Season - 4",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Lee Probert, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 36,
            "team_name": "Fulham",
            "logo": "https:\/\/media.api-football.com\/teams\/36.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 114,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-09-17T19:00:00+00:00",
          "event_timestamp": 1537210800,
          "firstHalfStart": 1537210800,
          "secondHalfStart": 1537214400,
          "round": "Regular Season - 5",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "St. Mary's Stadium, Southampton",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 41,
            "team_name": "Southampton",
            "logo": "https:\/\/media.api-football.com\/teams\/41.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 122,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-09-22T16:30:00+00:00",
          "event_timestamp": 1537633800,
          "firstHalfStart": 1537633800,
          "secondHalfStart": 1537637400,
          "round": "Regular Season - 6",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 47,
            "team_name": "Tottenham",
            "logo": "https:\/\/media.api-football.com\/teams\/47.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 129,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-09-29T14:00:00+00:00",
          "event_timestamp": 1538229600,
          "firstHalfStart": 1538229600,
          "secondHalfStart": 1538233200,
          "round": "Regular Season - 7",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Etihad Stadium, Manchester",
          "referee": "Lee Mason, England",
          "homeTeam": {
            "team_id": 50,
            "team_name": "Manchester City",
            "logo": "https:\/\/media.api-football.com\/teams\/50.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 135,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-10-05T19:00:00+00:00",
          "event_timestamp": 1538766000,
          "firstHalfStart": 1538766000,
          "secondHalfStart": 1538769600,
          "round": "Regular Season - 8",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 48,
            "team_name": "West Ham",
            "logo": "https:\/\/media.api-football.com\/teams\/48.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 152,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-10-20T14:00:00+00:00",
          "event_timestamp": 1540044000,
          "firstHalfStart": 1540044000,
          "secondHalfStart": 1540047600,
          "round": "Regular Season - 9",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "St James' Park, Newcastle upon Tyne",
          "referee": "Andre Marriner, England",
          "homeTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 155,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-10-27T14:00:00+00:00",
          "event_timestamp": 1540648800,
          "firstHalfStart": 1540648800,
          "secondHalfStart": 1540652400,
          "round": "Regular Season - 10",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 39,
            "team_name": "Wolves",
            "logo": "https:\/\/media.api-football.com\/teams\/39.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 169,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-11-03T15:00:00+00:00",
          "event_timestamp": 1541257200,
          "firstHalfStart": 1541257200,
          "secondHalfStart": 1541260800,
          "round": "Regular Season - 11",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Goodison Park, Liverpool",
          "referee": "David Coote, England",
          "homeTeam": {
            "team_id": 45,
            "team_name": "Everton",
            "logo": "https:\/\/media.api-football.com\/teams\/45.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 176,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-11-10T12:30:00+00:00",
          "event_timestamp": 1541853000,
          "firstHalfStart": 1541853000,
          "secondHalfStart": 1541856600,
          "round": "Regular Season - 12",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Cardiff City Stadium, Cardiff",
          "referee": "Martin Atkinson, England",
          "homeTeam": {
            "team_id": 43,
            "team_name": "Cardiff",
            "logo": "https:\/\/media.api-football.com\/teams\/43.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 186,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-11-24T15:00:00+00:00",
          "event_timestamp": 1543071600,
          "firstHalfStart": 1543071600,
          "secondHalfStart": 1543075200,
          "round": "Regular Season - 13",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 46,
            "team_name": "Leicester",
            "logo": "https:\/\/media.api-football.com\/teams\/46.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 199,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-12-01T15:00:00+00:00",
          "event_timestamp": 1543676400,
          "firstHalfStart": 1543676400,
          "secondHalfStart": 1543680000,
          "round": "Regular Season - 14",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "John Smith's Stadium, Huddersfield",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 37,
            "team_name": "Huddersfield",
            "logo": "https:\/\/media.api-football.com\/teams\/37.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "1-1",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 206,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-12-04T19:45:00+00:00",
          "event_timestamp": 1543952700,
          "firstHalfStart": 1543952700,
          "secondHalfStart": 1543956300,
          "round": "Regular Season - 15",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 52,
            "team_name": "Crystal Palace",
            "logo": "https:\/\/media.api-football.com\/teams\/52.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "3-0",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 217,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-12-08T15:00:00+00:00",
          "event_timestamp": 1544281200,
          "firstHalfStart": 1544281200,
          "secondHalfStart": 1544284800,
          "round": "Regular Season - 16",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Turf Moor, Burnley",
          "referee": "Martin Atkinson, England",
          "homeTeam": {
            "team_id": 44,
            "team_name": "Burnley",
            "logo": "https:\/\/media.api-football.com\/teams\/44.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 225,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-12-16T13:30:00+00:00",
          "event_timestamp": 1544967000,
          "firstHalfStart": 1544967000,
          "secondHalfStart": 1544970600,
          "round": "Regular Season - 17",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Stuart Attwell, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 49,
            "team_name": "Chelsea",
            "logo": "https:\/\/media.api-football.com\/teams\/49.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-2",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 236,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-12-22T15:00:00+00:00",
          "event_timestamp": 1545490800,
          "firstHalfStart": 1545490800,
          "secondHalfStart": 1545494400,
          "round": "Regular Season - 18",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Vitality Stadium, Bournemouth",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 35,
            "team_name": "Bournemouth",
            "logo": "https:\/\/media.api-football.com\/teams\/35.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 245,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-12-26T17:15:00+00:00",
          "event_timestamp": 1545844500,
          "firstHalfStart": 1545844500,
          "secondHalfStart": 1545848100,
          "round": "Regular Season - 19",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 42,
            "team_name": "Arsenal",
            "logo": "https:\/\/media.api-football.com\/teams\/42.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 255,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2018-12-29T15:00:00+00:00",
          "event_timestamp": 1546095600,
          "firstHalfStart": 1546095600,
          "secondHalfStart": 1546099200,
          "round": "Regular Season - 20",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Andy Madley, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 45,
            "team_name": "Everton",
            "logo": "https:\/\/media.api-football.com\/teams\/45.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 273,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-01-02T19:45:00+00:00",
          "event_timestamp": 1546458300,
          "firstHalfStart": 1546458300,
          "secondHalfStart": 1546461900,
          "round": "Regular Season - 21",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "London Stadium, London",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 48,
            "team_name": "West Ham",
            "logo": "https:\/\/media.api-football.com\/teams\/48.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209861,
          "league_id": 758,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-01-05T12:30:00+00:00",
          "event_timestamp": 1546691400,
          "firstHalfStart": 1546691400,
          "secondHalfStart": 1546695000,
          "round": "3rd Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Vitality Stadium, Bournemouth",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 35,
            "team_name": "Bournemouth",
            "logo": "https:\/\/media.api-football.com\/teams\/35.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "0-2",
            "fulltime": "1-3",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 275,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-01-12T15:00:00+00:00",
          "event_timestamp": 1547305200,
          "firstHalfStart": 1547305200,
          "secondHalfStart": 1547308800,
          "round": "Regular Season - 22",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 40,
            "team_name": "Liverpool",
            "logo": "https:\/\/media.api-football.com\/teams\/40.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 290,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-01-19T15:00:00+00:00",
          "event_timestamp": 1547910000,
          "firstHalfStart": 1547910000,
          "secondHalfStart": 1547913600,
          "round": "Regular Season - 23",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Old Trafford, Manchester",
          "referee": "Paul Tierney, England",
          "homeTeam": {
            "team_id": 33,
            "team_name": "Manchester United",
            "logo": "https:\/\/media.api-football.com\/teams\/33.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "2-0",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209841,
          "league_id": 758,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-01-26T15:00:00+00:00",
          "event_timestamp": 1548514800,
          "firstHalfStart": 1548514800,
          "secondHalfStart": 1548518400,
          "round": "4th Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Lee Mason, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 60,
            "team_name": "West Brom",
            "logo": "https:\/\/media.api-football.com\/teams\/60.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 297,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-01-29T19:45:00+00:00",
          "event_timestamp": 1548791100,
          "firstHalfStart": 1548791100,
          "secondHalfStart": 1548794700,
          "round": "Regular Season - 24",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Craven Cottage, London",
          "referee": "Lee Probert, England",
          "homeTeam": {
            "team_id": 36,
            "team_name": "Fulham",
            "logo": "https:\/\/media.api-football.com\/teams\/36.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 4,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-2",
            "fulltime": "4-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 305,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-02-02T15:00:00+00:00",
          "event_timestamp": 1549119600,
          "firstHalfStart": 1549119600,
          "secondHalfStart": 1549123200,
          "round": "Regular Season - 25",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Simon Hooper, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 38,
            "team_name": "Watford",
            "logo": "https:\/\/media.api-football.com\/teams\/38.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209835,
          "league_id": 758,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-02-06T20:05:00+00:00",
          "event_timestamp": 1549483500,
          "firstHalfStart": 1549483500,
          "secondHalfStart": 1549487100,
          "round": "4th Round Replays",
          "status": "Match Finished",
          "statusShort": "AET",
          "elapsed": 120,
          "venue": "The Hawthorns, West Bromwich",
          "referee": "Paul Tierney, England",
          "homeTeam": {
            "team_id": 60,
            "team_name": "West Brom",
            "logo": "https:\/\/media.api-football.com\/teams\/60.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-1",
            "extratime": "1-3",
            "penalty": null
          }
        },
        {
          "fixture_id": 315,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-02-09T17:30:00+00:00",
          "event_timestamp": 1549733400,
          "firstHalfStart": 1549733400,
          "secondHalfStart": 1549737000,
          "round": "Regular Season - 26",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Stuart Attwell, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 44,
            "team_name": "Burnley",
            "logo": "https:\/\/media.api-football.com\/teams\/44.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-3",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209824,
          "league_id": 758,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-02-16T12:30:00+00:00",
          "event_timestamp": 1550320200,
          "firstHalfStart": 1550320200,
          "secondHalfStart": 1550323800,
          "round": "5th Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "David Coote, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 69,
            "team_name": "Derby",
            "logo": "https:\/\/media.api-football.com\/teams\/69.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "2-0",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 338,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-02-26T19:45:00+00:00",
          "event_timestamp": 1551210300,
          "firstHalfStart": 1551210300,
          "secondHalfStart": 1551213900,
          "round": "Regular Season - 28",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "King Power Stadium, Leicester",
          "referee": "Lee Probert, England",
          "homeTeam": {
            "team_id": 46,
            "team_name": "Leicester",
            "logo": "https:\/\/media.api-football.com\/teams\/46.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 346,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-03-02T15:00:00+00:00",
          "event_timestamp": 1551538800,
          "firstHalfStart": 1551538800,
          "secondHalfStart": 1551542400,
          "round": "Regular Season - 29",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 37,
            "team_name": "Huddersfield",
            "logo": "https:\/\/media.api-football.com\/teams\/37.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 358,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-03-09T12:30:00+00:00",
          "event_timestamp": 1552134600,
          "firstHalfStart": 1552134600,
          "secondHalfStart": 1552138200,
          "round": "Regular Season - 30",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Selhurst Park, London",
          "referee": "Craig Pawson, England",
          "homeTeam": {
            "team_id": 52,
            "team_name": "Crystal Palace",
            "logo": "https:\/\/media.api-football.com\/teams\/52.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209819,
          "league_id": 758,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-03-17T14:00:00+00:00",
          "event_timestamp": 1552831200,
          "firstHalfStart": 1552831200,
          "secondHalfStart": 1552834800,
          "round": "Quarter-finals",
          "status": "Match Finished",
          "statusShort": "PEN",
          "elapsed": 120,
          "venue": "The Den, London",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 58,
            "team_name": "Millwall",
            "logo": "https:\/\/media.api-football.com\/teams\/58.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-2",
            "extratime": "2-2",
            "penalty": "4-5"
          }
        },
        {
          "fixture_id": 376,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-03-30T15:00:00+00:00",
          "event_timestamp": 1553958000,
          "firstHalfStart": 1553958000,
          "secondHalfStart": 1553961600,
          "round": "Regular Season - 32",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 41,
            "team_name": "Southampton",
            "logo": "https:\/\/media.api-football.com\/teams\/41.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 329,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-04-03T18:45:00+00:00",
          "event_timestamp": 1554317100,
          "firstHalfStart": 1554317100,
          "secondHalfStart": 1554320700,
          "round": "Regular Season - 27",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Stamford Bridge, London",
          "referee": "Graham Scott, England",
          "homeTeam": {
            "team_id": 49,
            "team_name": "Chelsea",
            "logo": "https:\/\/media.api-football.com\/teams\/49.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 209820,
          "league_id": 758,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-04-06T16:30:00+00:00",
          "event_timestamp": 1554568200,
          "firstHalfStart": 1554568200,
          "secondHalfStart": 1554571800,
          "round": "Semi-finals",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Wembley Stadium, London",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 50,
            "team_name": "Manchester City",
            "logo": "https:\/\/media.api-football.com\/teams\/50.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 395,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-04-13T14:00:00+00:00",
          "event_timestamp": 1555164000,
          "firstHalfStart": 1555164000,
          "secondHalfStart": 1555167600,
          "round": "Regular Season - 34",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 35,
            "team_name": "Bournemouth",
            "logo": "https:\/\/media.api-football.com\/teams\/35.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 5,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-5",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 366,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-04-16T18:45:00+00:00",
          "event_timestamp": 1555440300,
          "firstHalfStart": 1555440300,
          "secondHalfStart": 1555443900,
          "round": "Regular Season - 31",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Andre Marriner, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 43,
            "team_name": "Cardiff",
            "logo": "https:\/\/media.api-football.com\/teams\/43.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 414,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-04-20T14:00:00+00:00",
          "event_timestamp": 1555768800,
          "firstHalfStart": 1555768800,
          "secondHalfStart": 1555772400,
          "round": "Regular Season - 35",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Molineux Stadium, Wolverhampton",
          "referee": "Craig Pawson, England",
          "homeTeam": {
            "team_id": 39,
            "team_name": "Wolves",
            "logo": "https:\/\/media.api-football.com\/teams\/39.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 392,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-04-23T18:45:00+00:00",
          "event_timestamp": 1556045100,
          "firstHalfStart": 1556045100,
          "secondHalfStart": 1556048700,
          "round": "Regular Season - 33",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Tottenham Hotspur Stadium, London",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 47,
            "team_name": "Tottenham",
            "logo": "https:\/\/media.api-football.com\/teams\/47.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 415,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-04-27T16:30:00+00:00",
          "event_timestamp": 1556382600,
          "firstHalfStart": 1556382600,
          "secondHalfStart": 1556386200,
          "round": "Regular Season - 36",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 425,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-05-05T15:30:00+00:00",
          "event_timestamp": 1557070200,
          "firstHalfStart": 1557070200,
          "secondHalfStart": 1557073800,
          "round": "Regular Season - 37",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Emirates Stadium, London",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 42,
            "team_name": "Arsenal",
            "logo": "https:\/\/media.api-football.com\/teams\/42.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 435,
          "league_id": 2,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-05-12T14:00:00+00:00",
          "event_timestamp": 1557669600,
          "firstHalfStart": 1557669600,
          "secondHalfStart": 1557673200,
          "round": "Regular Season - 38",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 50,
            "team_name": "Manchester City",
            "logo": "https:\/\/media.api-football.com\/teams\/50.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 4,
          "score": {
            "halftime": "1-2",
            "fulltime": "1-4",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157021,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-08-10T14:00:00+00:00",
          "event_timestamp": 1565445600,
          "firstHalfStart": 1565445600,
          "secondHalfStart": 1565449200,
          "round": "Regular Season - 1",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Vicarage Road (Watford)",
          "referee": "Craig Pawson, England",
          "homeTeam": {
            "team_id": 38,
            "team_name": "Watford",
            "logo": "https:\/\/media.api-football.com\/teams\/38.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-3",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157027,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-08-17T14:00:00+00:00",
          "event_timestamp": 1566050400,
          "firstHalfStart": 1566050400,
          "secondHalfStart": 1566054000,
          "round": "Regular Season - 2",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Anthony Taylor, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 48,
            "team_name": "West Ham",
            "logo": "https:\/\/media.api-football.com\/teams\/48.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157037,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-08-24T14:00:00+00:00",
          "event_timestamp": 1566655200,
          "firstHalfStart": 1566655200,
          "secondHalfStart": 1566658800,
          "round": "Regular Season - 3",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 41,
            "team_name": "Southampton",
            "logo": "https:\/\/media.api-football.com\/teams\/41.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 242567,
          "league_id": 957,
          "league": {
            "name": "League Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-08-27T18:45:00+00:00",
          "event_timestamp": 1566931500,
          "firstHalfStart": 1566931500,
          "secondHalfStart": 1566935100,
          "round": "2nd Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Memorial Stadium (Bristol, Gloucestershire)",
          "referee": null,
          "homeTeam": {
            "team_id": 1334,
            "team_name": "Bristol Rovers",
            "logo": "https:\/\/media.api-football.com\/teams\/1334.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157051,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-08-31T14:00:00+00:00",
          "event_timestamp": 1567260000,
          "firstHalfStart": 1567260000,
          "secondHalfStart": 1567263600,
          "round": "Regular Season - 4",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Etihad Stadium (Manchester)",
          "referee": "Jonathan Moss, England",
          "homeTeam": {
            "team_id": 50,
            "team_name": "Manchester City",
            "logo": "https:\/\/media.api-football.com\/teams\/50.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 4,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "2-0",
            "fulltime": "4-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157057,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-09-14T14:00:00+00:00",
          "event_timestamp": 1568469600,
          "firstHalfStart": 1568469600,
          "secondHalfStart": 1568473200,
          "round": "Regular Season - 5",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Michael Oliver, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 44,
            "team_name": "Burnley",
            "logo": "https:\/\/media.api-football.com\/teams\/44.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157072,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-09-21T16:30:00+00:00",
          "event_timestamp": 1569083400,
          "firstHalfStart": 1569083400,
          "secondHalfStart": 1569087000,
          "round": "Regular Season - 6",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "St. James' Park (Newcastle upon Tyne)",
          "referee": "Martin Atkinson, England",
          "homeTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 242556,
          "league_id": 957,
          "league": {
            "name": "League Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-09-25T18:45:00+00:00",
          "event_timestamp": 1569437100,
          "firstHalfStart": 1569437100,
          "secondHalfStart": 1569440700,
          "round": "3rd Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 66,
            "team_name": "Aston Villa",
            "logo": "https:\/\/media.api-football.com\/teams\/66.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 3,
          "score": {
            "halftime": "0-2",
            "fulltime": "1-3",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157077,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-09-28T14:00:00+00:00",
          "event_timestamp": 1569679200,
          "firstHalfStart": 1569679200,
          "secondHalfStart": 1569682800,
          "round": "Regular Season - 7",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Stamford Bridge (London)",
          "referee": "Chris Kavanagh, England",
          "homeTeam": {
            "team_id": 49,
            "team_name": "Chelsea",
            "logo": "https:\/\/media.api-football.com\/teams\/49.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157086,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-10-05T11:30:00+00:00",
          "event_timestamp": 1570275000,
          "firstHalfStart": 1570275000,
          "secondHalfStart": 1570278600,
          "round": "Regular Season - 8",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Jonathan Moss, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 47,
            "team_name": "Tottenham",
            "logo": "https:\/\/media.api-football.com\/teams\/47.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "2-0",
            "fulltime": "3-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157096,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-10-19T14:00:00+00:00",
          "event_timestamp": 1571493600,
          "firstHalfStart": 1571493600,
          "secondHalfStart": 1571497200,
          "round": "Regular Season - 9",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Villa Park (Birmingham)",
          "referee": "David Coote, England",
          "homeTeam": {
            "team_id": 66,
            "team_name": "Aston Villa",
            "logo": "https:\/\/media.api-football.com\/teams\/66.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "1-1",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157106,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-10-26T14:00:00+00:00",
          "event_timestamp": 1572098400,
          "firstHalfStart": 1572098400,
          "secondHalfStart": 1572102000,
          "round": "Regular Season - 10",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Andy Madley, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 45,
            "team_name": "Everton",
            "logo": "https:\/\/media.api-football.com\/teams\/45.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "1-1",
            "fulltime": "3-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157118,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-11-02T15:00:00+00:00",
          "event_timestamp": 1572706800,
          "firstHalfStart": 1572706800,
          "secondHalfStart": 1572710400,
          "round": "Regular Season - 11",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Kevin Friend, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 71,
            "team_name": "Norwich",
            "logo": "https:\/\/media.api-football.com\/teams\/71.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "0-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157129,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-11-10T14:00:00+00:00",
          "event_timestamp": 1573394400,
          "firstHalfStart": 1573394400,
          "secondHalfStart": 1573398000,
          "round": "Regular Season - 12",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Old Trafford (Manchester)",
          "referee": "Jonathan Moss, England",
          "homeTeam": {
            "team_id": 33,
            "team_name": "Manchester United",
            "logo": "https:\/\/media.api-football.com\/teams\/33.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 3,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "2-0",
            "fulltime": "3-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157138,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-11-23T15:00:00+00:00",
          "event_timestamp": 1574521200,
          "firstHalfStart": 1574521200,
          "secondHalfStart": 1574524800,
          "round": "Regular Season - 13",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Mike Dean, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 46,
            "team_name": "Leicester",
            "logo": "https:\/\/media.api-football.com\/teams\/46.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157148,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-11-30T15:00:00+00:00",
          "event_timestamp": 1575126000,
          "firstHalfStart": 1575126000,
          "secondHalfStart": 1575129600,
          "round": "Regular Season - 14",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Anfield (Liverpool)",
          "referee": "Martin Atkinson, England",
          "homeTeam": {
            "team_id": 40,
            "team_name": "Liverpool",
            "logo": "https:\/\/media.api-football.com\/teams\/40.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "2-0",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157155,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-12-05T20:15:00+00:00",
          "event_timestamp": 1575576900,
          "firstHalfStart": 1575576900,
          "secondHalfStart": 1575580500,
          "round": "Regular Season - 15",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Emirates Stadium (London)",
          "referee": "Graham Scott, England",
          "homeTeam": {
            "team_id": 42,
            "team_name": "Arsenal",
            "logo": "https:\/\/media.api-football.com\/teams\/42.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157167,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-12-08T16:30:00+00:00",
          "event_timestamp": 1575822600,
          "firstHalfStart": 1575822600,
          "secondHalfStart": 1575826200,
          "round": "Regular Season - 16",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Jonathan Moss, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 39,
            "team_name": "Wolves",
            "logo": "https:\/\/media.api-football.com\/teams\/39.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 2,
          "score": {
            "halftime": "2-2",
            "fulltime": "2-2",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157178,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-12-16T19:45:00+00:00",
          "event_timestamp": 1576525500,
          "firstHalfStart": 1576525500,
          "secondHalfStart": 1576529100,
          "round": "Regular Season - 17",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Selhurst Park (London)",
          "referee": "Craig Pawson, England",
          "homeTeam": {
            "team_id": 52,
            "team_name": "Crystal Palace",
            "logo": "https:\/\/media.api-football.com\/teams\/52.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157187,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-12-21T15:00:00+00:00",
          "event_timestamp": 1576940400,
          "firstHalfStart": 1576940400,
          "secondHalfStart": 1576944000,
          "round": "Regular Season - 18",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Robert Jones, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 62,
            "team_name": "Sheffield Utd",
            "logo": "https:\/\/media.api-football.com\/teams\/62.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157203,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-12-26T12:30:00+00:00",
          "event_timestamp": 1577363400,
          "firstHalfStart": 1577363400,
          "secondHalfStart": 1577367000,
          "round": "Regular Season - 19",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Tottenham Hotspur Stadium (London)",
          "referee": "Graham Scott, England",
          "homeTeam": {
            "team_id": 47,
            "team_name": "Tottenham",
            "logo": "https:\/\/media.api-football.com\/teams\/47.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "2-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157206,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2019-12-28T12:30:00+00:00",
          "event_timestamp": 1577536200,
          "firstHalfStart": 1577536200,
          "secondHalfStart": 1577539800,
          "round": "Regular Season - 20",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": "Paul Tierney, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 35,
            "team_name": "Bournemouth",
            "logo": "https:\/\/media.api-football.com\/teams\/35.png"
          },
          "goalsHomeTeam": 2,
          "goalsAwayTeam": 0,
          "score": {
            "halftime": "1-0",
            "fulltime": "2-0",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157216,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-01-01T12:30:00+00:00",
          "event_timestamp": 1577881800,
          "firstHalfStart": 1577881800,
          "secondHalfStart": 1577885400,
          "round": "Regular Season - 21",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "The American Express Community Stadium",
          "referee": "Stuart Attwell, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 49,
            "team_name": "Chelsea",
            "logo": "https:\/\/media.api-football.com\/teams\/49.png"
          },
          "goalsHomeTeam": 1,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-1",
            "fulltime": "1-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 291900,
          "league_id": 1063,
          "league": {
            "name": "FA Cup",
            "country": "England",
            "logo": null,
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-01-04T15:01:00+00:00",
          "event_timestamp": 1578150060,
          "firstHalfStart": 1578150060,
          "secondHalfStart": 1578153660,
          "round": "3rd Round",
          "status": "Match Finished",
          "statusShort": "FT",
          "elapsed": 90,
          "venue": "Amex Stadium, Falmer",
          "referee": "Andre Marriner, England",
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 74,
            "team_name": "Sheffield Wednesday",
            "logo": "https:\/\/media.api-football.com\/teams\/74.png"
          },
          "goalsHomeTeam": 0,
          "goalsAwayTeam": 1,
          "score": {
            "halftime": "0-0",
            "fulltime": "0-1",
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157229,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-01-11T15:00:00+00:00",
          "event_timestamp": 1578754800,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 22",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "Goodison Park (Liverpool)",
          "referee": null,
          "homeTeam": {
            "team_id": 45,
            "team_name": "Everton",
            "logo": "https:\/\/media.api-football.com\/teams\/45.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157236,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-01-18T15:00:00+00:00",
          "event_timestamp": 1579359600,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 23",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 66,
            "team_name": "Aston Villa",
            "logo": "https:\/\/media.api-football.com\/teams\/66.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157245,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-01-21T19:30:00+00:00",
          "event_timestamp": 1579635000,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 24",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "Vitality Stadium (Bournemouth, Dorset)",
          "referee": null,
          "homeTeam": {
            "team_id": 35,
            "team_name": "Bournemouth",
            "logo": "https:\/\/media.api-football.com\/teams\/35.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157264,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-02-01T15:00:00+00:00",
          "event_timestamp": 1580569200,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 25",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "London Stadium (London)",
          "referee": null,
          "homeTeam": {
            "team_id": 48,
            "team_name": "West Ham",
            "logo": "https:\/\/media.api-football.com\/teams\/48.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157267,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-02-08T17:30:00+00:00",
          "event_timestamp": 1581183000,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 26",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 38,
            "team_name": "Watford",
            "logo": "https:\/\/media.api-football.com\/teams\/38.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157282,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-02-22T15:00:00+00:00",
          "event_timestamp": 1582383600,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 27",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "Bramall Lane (Sheffield)",
          "referee": null,
          "homeTeam": {
            "team_id": 62,
            "team_name": "Sheffield Utd",
            "logo": "https:\/\/media.api-football.com\/teams\/62.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157287,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-02-29T12:30:00+00:00",
          "event_timestamp": 1582979400,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 28",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 52,
            "team_name": "Crystal Palace",
            "logo": "https:\/\/media.api-football.com\/teams\/52.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157304,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-03-07T15:00:00+00:00",
          "event_timestamp": 1583593200,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 29",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "Molineux Stadium (Wolverhampton, West Midlands)",
          "referee": null,
          "homeTeam": {
            "team_id": 39,
            "team_name": "Wolves",
            "logo": "https:\/\/media.api-football.com\/teams\/39.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157307,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-03-14T15:00:00+00:00",
          "event_timestamp": 1584198000,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 30",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 42,
            "team_name": "Arsenal",
            "logo": "https:\/\/media.api-football.com\/teams\/42.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157317,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-03-21T15:00:00+00:00",
          "event_timestamp": 1584802800,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 31",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "King Power Stadium (Leicester, Leicestershire)",
          "referee": null,
          "homeTeam": {
            "team_id": 46,
            "team_name": "Leicester",
            "logo": "https:\/\/media.api-football.com\/teams\/46.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157328,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-04-04T14:00:00+00:00",
          "event_timestamp": 1586008800,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 32",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 33,
            "team_name": "Manchester United",
            "logo": "https:\/\/media.api-football.com\/teams\/33.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157341,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-04-11T14:00:00+00:00",
          "event_timestamp": 1586613600,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 33",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "Carrow Road (Norwich, Norfolk)",
          "referee": null,
          "homeTeam": {
            "team_id": 71,
            "team_name": "Norwich",
            "logo": "https:\/\/media.api-football.com\/teams\/71.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157348,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-04-18T14:00:00+00:00",
          "event_timestamp": 1587218400,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 34",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 40,
            "team_name": "Liverpool",
            "logo": "https:\/\/media.api-football.com\/teams\/40.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157357,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-04-25T14:00:00+00:00",
          "event_timestamp": 1587823200,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 35",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 50,
            "team_name": "Manchester City",
            "logo": "https:\/\/media.api-football.com\/teams\/50.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157373,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-05-02T14:00:00+00:00",
          "event_timestamp": 1588428000,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 36",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "St. Mary's Stadium (Southampton, Hampshire)",
          "referee": null,
          "homeTeam": {
            "team_id": 41,
            "team_name": "Southampton",
            "logo": "https:\/\/media.api-football.com\/teams\/41.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157377,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-05-09T14:00:00+00:00",
          "event_timestamp": 1589032800,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 37",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "The American Express Community Stadium (Falmer, East Sussex)",
          "referee": null,
          "homeTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "awayTeam": {
            "team_id": 34,
            "team_name": "Newcastle",
            "logo": "https:\/\/media.api-football.com\/teams\/34.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        },
        {
          "fixture_id": 157386,
          "league_id": 524,
          "league": {
            "name": "Premier League",
            "country": "England",
            "logo": "https:\/\/media.api-football.com\/leagues\/2.png",
            "flag": "https:\/\/media.api-football.com\/flags\/gb.svg"
          },
          "event_date": "2020-05-17T14:00:00+00:00",
          "event_timestamp": 1589724000,
          "firstHalfStart": null,
          "secondHalfStart": null,
          "round": "Regular Season - 38",
          "status": "Not Started",
          "statusShort": "NS",
          "elapsed": 0,
          "venue": "Turf Moor (Burnley)",
          "referee": null,
          "homeTeam": {
            "team_id": 44,
            "team_name": "Burnley",
            "logo": "https:\/\/media.api-football.com\/teams\/44.png"
          },
          "awayTeam": {
            "team_id": 51,
            "team_name": "Brighton",
            "logo": "https:\/\/media.api-football.com\/teams\/51.png"
          },
          "goalsHomeTeam": null,
          "goalsAwayTeam": null,
          "score": {
            "halftime": null,
            "fulltime": null,
            "extratime": null,
            "penalty": null
          }
        }
      ]
    }
  };
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

export default Fixtures;