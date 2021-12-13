// default app configuration
const port = process.env.PORT || 4000;
let db = process.env.MONGODB_URI || "mongodb://localhost:27017/nodegoat";

module.exports = {
    port,
    db,
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "NYSG3YVakKwVbLLr6RaCEVbh+Pa6wTKkq7mSQyhcqFA=",
    cryptoAlgo: "aes-256-cbc",
    hostName: "localhost",
    environmentalScripts: []
};

