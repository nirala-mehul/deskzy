module.exports.INIT = function INIT(db) {
  const sql = `
      CREATE TABLE IF NOT EXISTS JOBS (
        itemId TEXT,
        name TEXT,
        jobId TEXT PRIMARY KEY,
        identifier TEXT,
        version TEXT,
        timestamp TEXT
      )
  `;
  new Promise((resolve, reject) => {
    db.run(sql, [], (err) => {
      if (err) reject(err);
      resolve(this.changes);
    });
  });
};

module.exports.INSERT = function INSERT(db, data) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO JOBS (itemId, name, jobId, identifier, version, timestamp, type) VALUES (?,?,?,?,?,?,?)`,
      [
        data.itemId,
        data.name,
        data.jobId,
        data.identifier,
        data.version,
        data.timestamp,
        data.type,
      ],
      (err) => {
        if (err) reject(err);
        resolve(this.changes);
      },
    );
  });
};

module.exports.READ = function READ(db, data) {
  let sql = `SELECT jobId FROM JOBS WHERE itemId = ? AND identifier = ? AND version = ?`;
  return new Promise((resolve, reject) => {
    db.get(sql, [data.itemId, data.identifier, data.version], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

module.exports.READALL = function READSTATUS(db, _data) {
  let sql = `SELECT DISTINCT itemId, name, timestamp, type FROM JOBS where itemId is NOT NULL`;
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      var results = {};
      for (let i = 0; i < rows.length; i++) {
        results[rows[i].itemId] = rows[i];
      }
      if (err) reject(err);
      resolve(Object.values(results));
    });
  });
};

module.exports.READSTATUS = function READSTATUS(db, data) {
  let sql = `SELECT * FROM JOBS WHERE itemId = ?`;
  return new Promise((resolve, reject) => {
    db.all(sql, [data.itemId], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
