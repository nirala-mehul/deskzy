module.exports.INIT = function INIT(db) {
  const sql = `
      CREATE TABLE IF NOT EXISTS CONNECTIONS (
        connectionId TEXT PRIMARY KEY,
        conversationId TEXT,
        eventUrl TEXT,
        resultWebSocketUrl TEXT,
        type TEXT,
        phone TEXT,
        uri TEXT,
        dmtf TEXT,
        completed INTEGER
      )
  `;
  new Promise((resolve, reject) => {
    db.run(sql, [], (err) => {
      if (err) reject(err);
      resolve(this.changes);
    });
  });
};

module.exports.CREATE = function CREATE(db, data) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO CONNECTIONS (connectionId, conversationId, eventUrl, resultWebSocketUrl, type, phone, uri, dmtf, completed) VALUES (?,?,?, ?,?,?, ?,?,?)`,
      [
        data.connectionId,
        data.conversationId,
        data.eventUrl,
        data.resultWebSocketUrl,
        data.type,
        data.phone,
        data.uri,
        data.dmtf,
        data.completed,
      ],
      (err) => {
        if (err) reject(err);
        resolve(this.changes);
      },
    );
  });
};

module.exports.READ = function READ(db, data) {
  let sql = `SELECT * FROM CONNECTIONS`;
  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

module.exports.READONE = function READONE(db, data) {
  let sql = `SELECT * FROM CONNECTIONS WHERE connectionId = ?`;
  return new Promise((resolve, reject) => {
    db.get(sql, [data.connectionId], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

module.exports.UPDATE = function UPDATE(db, data) {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE CONNECTIONS SET completed = 1 WHERE connectionId = (?)`,
      [data.connectionId],
      (err) => {
        if (err) reject(err);
        resolve(this.changes);
      },
    );
  });
};

module.exports.DELETE = function DELETE(db, data) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM CONNECTIONS WHERE connectionId=?`, data.connectionId, (err) => {
      if (err) reject(err);
      resolve(this.changes);
    });
  });
};
