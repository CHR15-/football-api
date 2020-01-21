const express = require('express');
const request = require('request');
const router = express.Router();

const BHA_ID = 51;
const BPL_ID = 524;

const headers = {
  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
  'x-rapidapi-key': process.env.RAPID_FOOTBALL_API_KEY
};

/* GET team info */
router.get('/teams/brighton', function(req, res, next) {
  const options =  {
    url: 'https://api-football-v1.p.rapidapi.com/v2/teams/team/' + BHA_ID,
    headers: headers
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.status(200).send(body);
  });
});

/* GET team info */
router.get('/teams/brighton/players', function(req, res, next) {
  const options =  {
    url: `https://api-football-v1.p.rapidapi.com/v2/players/team/${BHA_ID}/2019-2020`,
    headers: headers
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.status(200).send(body);
  });
});

/* GET team fixtures */
router.get('/teams/brighton/fixtures', function(req, res, next) {
  const options =  {
    url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/team/' + BHA_ID,
    headers: headers
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.status(200).send(body);
  });
});

/* GET league standings */
router.get('/league/standings', function(req, res, next) {
  const options =  {
    url: 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/' + BPL_ID,
    headers: headers
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.status(200).send(body);
  });
});

/* GET league top scorers */
router.get('/league/topscorers', function(req, res, next) {
  const options =  {
    url: 'https://api-football-v1.p.rapidapi.com/v2/topscorers/' + BPL_ID,
    headers: headers
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.status(200).send(body);
  });
});

/* GET league current games */
router.get('/league/inplay', function(req, res, next) {
  const options =  {
    url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/live/' + BPL_ID,
    headers: headers
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.status(200).send(body);
  });
});

module.exports = router;
