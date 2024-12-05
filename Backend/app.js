const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');
const jobRouter = require('./routes/jobRoute');

app.use(bodyParser.json())

app.use('/api', userRouter)
app.use('/api/job', jobRouter)


module.exports = app;