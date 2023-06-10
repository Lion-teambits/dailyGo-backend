const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailyRecordSchema = new Schema({
    date: { type: Date },
    steps: { type: Number },
    distance: { type: Number },
    calories: { type: Number },
});

const DailyRecord = mongoose.model("DailyRecord", DailyRecordSchema);
module.exports = DailyRecord;