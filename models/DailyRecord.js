const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailyRecordSchema = new Schema({
    uid: { type: String },
    date: { type: Date },
    steps: { type: Number },
    distance: { type: Number },
    calories: { type: Number },
    streak_status: { type: String },
});

const DailyRecord = mongoose.model("DailyRecord", DailyRecordSchema);
module.exports = DailyRecord;