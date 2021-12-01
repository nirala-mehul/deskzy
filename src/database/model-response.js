module.exports.INIT = function INIT(db) {
  const sql = `
      CREATE TABLE IF NOT EXISTS MODELRESPONSE (
        itemId TEXT,
        jobId TEXT PRIMARY KEY,
        jsonData TEXT
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
      `INSERT INTO MODELRESPONSE (itemId, jobId, jsonData) VALUES (?,?,?)`,
      [data.itemId, data.jobId, data.jsonData],
      (err) => {
        if (err) reject(err);
        resolve(this.changes);
      },
    );
  });
};

module.exports.READ = function READ(db, data) {
  let sql = `SELECT * FROM MODELRESPONSE WHERE itemId = ? AND jobId = ?`;
  return new Promise((resolve, reject) => {
    db.get(sql, [data.itemId, data.jobId], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
