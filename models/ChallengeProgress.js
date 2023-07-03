const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChallengeProgressSchema = new Schema({
    expired_date: { type: Date },
    monster_name: { type: String },
    monster_image: { type: String },
    current_steps: { type: Number },
    current_calories: { type: Number },
    current_distance: { type: Number },
    finish_challenge: { type: Boolean },
    get_reward: { type: String },
    event_challenge_id: { type: String },
    group_challenge_info: { type: String },
});

const ChallengeProgress = mongoose.model("ChallengeProgress", ChallengeProgressSchema);
module.exports = ChallengeProgress;