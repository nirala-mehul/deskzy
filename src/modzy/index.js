const modzy = require('@modzy/modzy-sdk');
const modzyClient = new modzy.ModzyClient(
  'https://app.modzy.com/api',
  'Yn3dFkwv9G9VXCf4qUva.Zcg359WEvOGUdPuJeXb0',
);
const models = require('./models');
const modelData = require('./models.json');
const database = require('../database');

function startJob(job) {
  const { identifier, version, sources } = job;
  return new Promise((resolve, reject) => {
    modzyClient
      .submitJobText(identifier, version, sources)
      .then((response) => {
        console.log('yay got ' + JSON.stringify(response));
        const data = { ...job, jobId: response.jobIdentifier, timestamp: response.submittedAt };
        database.insertJob(data);
        resolve(data);
      })
      .catch((error) => {
        console.error(
          'Modzy job submission failed with code ' + error.code + ' and message ' + error.message,
        );
        reject({ ...job, error });
      });
  });
}

function getTaskResults(task) {
  return new Promise(async (resolve, reject) => {
    const data = { itemId: task.itemId, ...modelData[task.taskName] };
    const job = await database.readJob(data);
    if (job) {
      const results = await database.readModelResponse({ itemId: data.itemId, jobId: job.jobId });
      if (results) {
        try {
          resolve(JSON.parse(results.jsonData ? results.jsonData : '{}'));
        } catch (error) {
          resolve({});
        }
      } else {
        modzyClient
          .getResult(job.jobId)
          .then((res) => {
            let result = undefined;
            if (res.results) result = res.results['0001']['results.json'];
            database.insertModelResponse({
              itemId: data.itemId,
              jobId: job.jobId,
              jsonData: JSON.stringify({ results: result }),
            });
            resolve({ results: result });
          })
          .catch((err) => {
            reject(err);
            console.log(err);
          });
      }
    } else {
      resolve({});
    }
  });
}

module.exports = {
  audioKeywordSpotting: (data) => startJob(models.audioKeywordSpotting(data)),
  nameEntityRecognition: (data) => startJob(models.nameEntityRecognition(data)),
  sentimentAnalysis: (data) => startJob(models.sentimentAnalysis(data)),
  textSummary: (data) => startJob(models.textSummary(data)),
  textTopics: (data) => startJob(models.textTopics(data)),
  textToSpeech: (data) => startJob(models.textToSpeech(data)),
  getTaskResults: getTaskResults,
  modelData: modelData,
};
