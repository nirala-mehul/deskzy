const sqlite3 = require('sqlite3').verbose();
const job = require('./job');
const modelResponse = require('./model-response');
const connection = require('./connection');

let db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to database!');
  job.INIT(db);
  modelResponse.INIT(db);
  connection.INIT(db);
});

module.exports = {
  insertJob: (data) => job.INSERT(db, data),
  readJob: (data) => job.READ(db, data),
  readJobStatus: (data) => job.READSTATUS(db, data),
  readAll: (data) => job.READALL(db, data),
  insertModelResponse: (data) => modelResponse.INSERT(db, data),
  readModelResponse: (data) => modelResponse.READ(db, data),
  connection: {
    CREATE: (data) => connection.CREATE(db, data),
    READ: (data) => connection.READ(db, data),
    UPDATE: (data) => connection.UPDATE(db, data),
    DELETE: (data) => connection.DELETE(db, data)
  }
};
