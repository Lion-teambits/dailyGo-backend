const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    type: { type: Number },
    description: { type: String },
    target_steps: { type: Number },
    current_steps: { type: Number },
    image: { type: String },
    badge: { type: String },
    member_step: { type: Array },
});

const Challenge = mongoose.model("Challenge", ChallengeSchema);
module.exports = Challenge;