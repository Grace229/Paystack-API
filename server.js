const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');


dotenv.config();


const server = http.createServer(app);
const port = process.env.PORT || 8080;


server.listen(port, () => console.log(`Server listenig on::: ${port}`));


