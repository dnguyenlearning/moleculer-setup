module.exports = {
    ENV: process.env.NODE_ENV || "local",
    PORT: process.env.PORT || 3000,
    MONGO_URI: "mongodb://localhost/bdcontentstudio-staging"
};
