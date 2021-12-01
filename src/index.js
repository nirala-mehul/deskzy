const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./api');
const database = require("./database");
const multer = require('multer');

const app = express();
app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors({ origin: '*' }));
app.use(express.static('public'));

var upload = multer({ dest: 'tmp/upload/' });

const handler = (func, params, res) => {
  console.log(params);
  func(params)
    .then((data) => res.send(data))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

app.post(
  '/submit',
  upload.single('myFile'),
  async (req, res) => res.send(await api.submitJob(req.body, req.file)), // {input: 'text'}
);

app
  .route("/connection")
  .post((req, res) => handler(database.connection.CREATE, req.body, res))
  .get((req, res) => handler(database.connection.READ, req.query, res))
  .put((req, res) => handler(database.connection.UPDATE, req.body, res))
  .delete((req, res) => handler(database.connection.DELETE, req.body, res));

app.post('/result', (req, res) =>
  api
    .getJobResults(req.body) // {itemId: guid}
    .then((data) => res.send(data))
    .catch((err) => res.send(err)),
);

app.post('/status', (req, res) =>
  api
    .getStatus(req.body) // {itemId: guid}
    .then((data) => res.send(data))
    .catch((err) => res.send(err)),
);

app.get('/all', (req, res) =>
  api
    .getAllItems(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send(err)),
);

app.get('/dashboard', (req, res) =>
  api
    .getDashboardData(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send(err)),
);

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(`Server started (http://localhost:${port})!`);
});
