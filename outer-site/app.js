const express = require('express');
const cors = require('cors');
const path  = require('path');
const nocache = require('nocache');

const LISTEN_PORT = 3001;
const PUBLIC_PATH = path.resolve(__dirname, 'public');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
  //origin: 'http://localhost:4000'
}));
app.use(nocache());
app.use(express.static(PUBLIC_PATH));
app.listen(LISTEN_PORT, function () {
  console.log(`CORS-enabled web server listening on port ${LISTEN_PORT}`);
});
