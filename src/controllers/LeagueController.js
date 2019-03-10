const mongoose = require('mongoose');

const League = mongoose.model('League');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const leagues = await League.paginate({}, { page, limit: 10 });

    return res.json(leagues);
  },

  async show(req, res) {
    const league = await League.findById(req.params.id);

    return res.json(player);
  },

  async store(req, res) {
    const league = await League.create(req.body);

    return res.json(league);
  },

  async update(req, res) {
    const league = await League.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(league);
  },

  async destroy(req, res) {
    await League.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
