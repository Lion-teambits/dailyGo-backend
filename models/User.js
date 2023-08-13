const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    avatar: { type: String },
    preferred_daily_mode: { type: Number },
    uid: { type: String },
    today_record: { type: String },
    badges: { type: Array },
    fireflies: { type: Number },
    streak_days: { type: Number },
    hearts: { type: Number },
    daily_goal_status: { type: Number },
    event_challenge_progress: { type: Array },
    group_challenge_progress: { type: Array },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;