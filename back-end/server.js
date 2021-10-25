const express = require('express')
const app = express();
const cors = require('cors');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3001', // origin
    methods: ['GET', 'POST'], // methods
  }
});
const controller = require('./controllers/productController');

app.use(express.json());
app.use(cors());

require('./socket/products')(io);

app.get('/', controller.getAll);

const port = 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
