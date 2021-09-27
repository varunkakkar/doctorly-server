// Init Application Plugins
const express = require('express');
const helmet = require('helmet');
const authRouter = require('./routes/authorization')
const app = express();

// Application Configutration
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(helmet(
    { contentSecurityPolicy: false }
))

// Database Configuration
mongoose.connect(process.env.DB);
mongoose.connection.on("error", (err) => {
    console.log(
        "%s MongoDB connection error. Please make sure MongoDB is running.",
        "✗",
        err
    );
    process.exit();
});
mongoose.connection.on("connected", () => {
    console.log("%s MongoDB Connected", "✔");
});

// Router Configuration
app.use('/auth', authRouter)

// App Start
app.listen(3000, function () {
    console.log("app running on port.", 3000);
})