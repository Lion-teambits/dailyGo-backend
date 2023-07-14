const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupChallengeSchema = new Schema({
    title: { type: String },
    monster_name: { type: String },
    monster_desc: { type: String },
    monster_image: { type: String },
    target_steps: { type: Number },
    badge_info: { type: String },
    group_current_steps: { type: Number },
    group_current_calories: { type: Number },
    group_current_distance: { type: Number },
    member_list: { type: Array },
});

const GroupChallenge = mongoose.model("GroupChallenge", GroupChallengeSchema);
module.exports = GroupChallenge;