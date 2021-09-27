const express = require('express');
const helmet = require('helmet');
const authRouter = require('./routes/authorization')
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(helmet(
    { contentSecurityPolicy: false }
))

app.use('/auth', authRouter)
app.listen(3000, function () {
    console.log("app running on port.", 3000);
})