const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    data: Buffer
  },
  rebounds: {
    type: Number,
    required: true
  },
  assists: {
    type: Number,
    required: true
  },
  steals: {
    type: Number,
    required: true
  },
  blocks: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

PlayerSchema.plugin(mongoosePaginate);

mongoose.model('Player', PlayerSchema);
