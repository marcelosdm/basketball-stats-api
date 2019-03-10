const express = require('express');
const routes = express.Router();

const PlayerController = require('./controllers/PlayerController');

routes.get('/players', PlayerController.index);
routes.get('/players/:id', PlayerController.show);
routes.post('/players', PlayerController.store);
routes.put('/players/:id', PlayerController.update);
routes.delete('/players/:id', PlayerController.destroy);

const LeagueController = require('./controllers/LeagueController');

routes.get('/leagues', LeagueController.index);
routes.get('/leagues/:id', LeagueController.show);
routes.post('/leagues', LeagueController.store);
routes.put('/leagues/:id', LeagueController.update);
routes.delete('/leagues/:id', LeagueController.destroy);

module.exports = routes;
