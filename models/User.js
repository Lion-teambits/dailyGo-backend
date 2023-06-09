const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, minLength:1 },
    photo: { type: String },
    mode: { type: Number},
    challenge: { type: Array },
    today_record: { type: String },
    daily_records: { type: Array },
    badges: { type: Array },
    fireflies: { type: Array },
    uid: { type: String },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;