const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordUserId : { type: String, required: true},
    username : { type: String, required: true},
    guilds : { type: Array, required: true}, 
    email : { type: String, required: true},
    avatar : { type: String, required: true}
});

const DiscordUser = module.exports = mongoose.model('User', userSchema);