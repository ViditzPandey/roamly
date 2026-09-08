const mongoose = require("mogoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mognoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);