const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/config')

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    console.log('listening on port ' + port)
    await connectDB();
})