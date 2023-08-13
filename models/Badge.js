const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
    title: { type: String, required: true, minLength:1 },
    description: { type: String },
    image: { type: Number },
    date: { type: Date },
});

const Badge = mongoose.model("Badge", BadgeSchema);
module.exports = Badge;