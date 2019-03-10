const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const LeagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    data: Buffer
  }
});

LeagueSchema.plugin(mongoosePaginate);

mongoose.model('League', LeagueSchema);
