var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var gameSessionSchema = new Schema({
  sessionId: {
    type: Number
  },
  player1: {
    name: {
      type: String,
    },
    score: {
      type: Number,
    },
    winner: {
      type: Boolean,
    }
  },
  player2: {
    name: {
      type: String,
    },
    score: {
      type: Number,
    },
    winner: {
      type: Boolean,
    }
  }
});

var gameSession = mongoose.model('session', gameSessionSchema);

module.exports = gameSession;
