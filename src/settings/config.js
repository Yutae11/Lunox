require("dotenv").config();
const { customFilter } = require("poru");
const { Deezer } = require("poru-deezer");
const { Spotify } = require("poru-spotify");

const deezer = new Deezer();
const spotify = new Spotify({
    clientID: process.env.SPOTIFY_ID || "d3bba913b3cf4dc5855ef315c0ad3813",
    clientSecret: process.env.SPOTIFY_SECRET || "85ee5beac71d4e6691ce2683716bb191",
    clients: [{ clientID: process.env.SPOTIFY_ID || "d3bba913b3cf4dc5855ef315c0ad3813", clientSecret: process.env.SPOTIFY_SECRET || "85ee5beac71d4e6691ce2683716bb191" }], // its seem this is a bug from the plugin, so if u dont add this, it will throw an error.
});

module.exports = {
    // BOT DETAILS
    token: process.env.TOKEN || " ", // your bot token
    prefix: process.env.PREFIX || "~", // your bot prefix "for owner message command"
    color: process.env.EMBED_COLOR || "#fb11ad", // your embeded hex color
    owner: process.env.OWNER_ID || "1219624638628233247", // your bot Owners ID
    guildLogs: process.env.GUILD_LOGS || "1218516163479343125", // your server join left logs Channel ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "60000", // set leave TimeOut when bot was alone 1000 = 1sec
    disablePremium: parseBoolean(process.env.DISABLE_PREMIUM || "false"), // disable premium command

    // PORU DETAILS
    poruOptions: {
        customFilter,
        library: "discord.js", // This source made by using discord.js, so don't even try to change this thing :)
        defaultPlatform: process.env.DEFAULT_PLATFORM || "ytmsearch", // recomended using "ytmsearch". You can change this to: "ytsearch" / "ytmsearch" / "scsearch". More Audio Source? Use Lavasrc plugin.
        plugins: [deezer, spotify], // Enable applemusic/deezer/spotify LINK to be readable by poru without using LavaSrc plugin.
        reconnectTries: Infinity, // total attemps to try if reconnect failed. you can change it to "Infinity" for unlimited attemps.
        reconnectTimeout: 10000, // total time to try reconnect in ms. 1000 = 1sec
    },
    nodes: [
        {
            name: process.env.NODE_NAME || "Lunox 01", // lavalink node name (anything you want)
            host: process.env.NODE_HOST || "localhost", // lavalink host
            port: parseInt(process.env.NODE_PORT || "2333"), //lavalink port
            password: process.env.NODE_PASSWORD || "youshallnotpass", //lavalink pass/auth
            secure: parseBoolean(process.env.NODE_SECURE || "false"), //lavalink secure "true/false"
        },
    ],

    // LINK DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://az782l:u9tivl@cluster0.mmfongd.mongodb.net/?retryWrites=true&w=majority", // your MongoDB Url
    supportUrl: process.env.SUPPORT_URL || "https://discord.com/invite/sbFJCnQzJz", // your Support Server Link
    inviteUrl: process.env.INVITE_URL || "https://discord.com/invite/sbFJCnQzJz", // your Bot Invite Link
    imageUrl: process.env.IMAGE_URL || "https://cdn.discordapp.com/attachments/1240230879427694676/1241398431772053554/d601713de8002b9be1d0c1d72b60c759.jpg?ex=664a0de2&is=6648bc62&hm=51e84fb5854d32fb7d8c3ed3831a80d8512268632091b6adc9fea7a135bce372&", // your Bot Banner Imange Link to use on "help" & "about" command
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
