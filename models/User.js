const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    photo: { type: String },
    daily_mode: { type: Number },
    challenge: { type: Array },
    today_record: { type: String },
    past_records: { type: Array },
    badges: { type: Array },
    fireflies: { type: Number },
    collected_fireflies: { type: Array },
    streak_days: { type: Number },
    hearts: { type: Number },
    uid: { type: String },
    group_challenge_step: { type: Number },
    finish_daily_goal: { type: Boolean },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;