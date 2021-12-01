const uuid = require('uuid');
const fs = require('fs');

const database = require('../database');
const modzy = require('../modzy');

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

// eg. data : { input: 'Example text'}
module.exports.submitJob = async function submitJob(data, file) {
  const item = { ...data, itemId: uuid.v4() };
  if (file) {
    item.input = await readFile(file.path);
  }
  if (data.isAudio) {
    modzy.audioKeywordSpotting(item);
  }
  await modzy.sentimentAnalysis(item);
  await modzy.nameEntityRecognition(item);
  await modzy.textSummary(item);
  await modzy.textTopics(item);
  // await modzy.textToSpeech(item);
  return { itemId: item.itemId, name: item.name };
};

// eg. data : { itemId: guid, task: 'textTopics'}
module.exports.getTaskResults = modzy.getTaskResults;

// eg. data : { itemId: guid}
module.exports.getJobResults = async function getJobResults(data) {
  const models = Object.keys(modzy.modelData);
  // console.log(data);
  var results = {};
  for (let i = 0; i < models.length; i++) {
    // console.log(i, models.length, models[i], await modzy.getTaskResults({ itemId: data.itemId, taskName: models[i] }));
    results[models[i]] = await modzy.getTaskResults({ itemId: data.itemId, taskName: models[i] });
  }
  // console.log(results);
  return results;
};

module.exports.getStatus = async function getStatus(data) {
  const jobs = await database.readJobStatus({ itemId: data.itemId });
  const models = Object.keys(modzy.modelData);
  var results = {};
  for (let i = 0; i < models.length; i++) {
    results[models[i]] = false;
    for (let j = 0; j < jobs.length; j++) {
      if (modzy.modelData[models[i]].identifier === jobs[j].identifier) {
        results[models[i]] = true;
        break;
      }
    }
  }
  return results;
};

module.exports.getAllItems = function getAllItems(data) {
  return database.readAll(data);
};

module.exports.getDashboardData = async function getDashboardData(_data) {
  const items = await this.getAllItems();
  const results = [];
  for (let i in items) {
    const status = await this.getStatus(items[i]);
    const result = await this.getJobResults(items[i]);
    results.push({ ...items[i], status: status, result: result });
  }
  return results;
};
