const models = require('./models.json');

module.exports.audioKeywordSpotting = function audioKeywordSpotting(data) {
  let sources = {};

  sources['0001'] = {
    'word.txt': data.wordTxt,
    'input.wav': data.input,
  };

  return {
    ...data,
    ...models['audioKeywordSpotting'],
    sources: sources,
  };
};

module.exports.nameEntityRecognition = function nameEntityRecognition(data) {
  let sources = {};

  sources['0001'] = {
    'input.txt': data.input ? data.input : '',
  };

  return {
    ...data,
    identifier: 'a92fc413b5',
    version: '0.0.12',
    sources: sources,
  };
};

module.exports.sentimentAnalysis = function sentimentAnalysis(data) {
  let sources = {};

  sources['0001'] = {
    'input.txt': data.input ? data.input : '',
  };

  return {
    ...data,
    identifier: 'ed542963de',
    version: '1.0.1',
    sources: sources,
  };
};

module.exports.textSummary = function textSummary(data) {
  let sources = {};

  sources['0001'] = {
    'input.txt': data.input,
  };

  return {
    ...data,
    identifier: 'rs2qqwbjwb',
    version: '0.0.2',
    sources: sources,
  };
};

module.exports.textTopics = function textTopics(data) {
  let sources = {};

  sources['0001'] = {
    'input.txt': data.input ? data.input : '',
  };

  return {
    ...data,
    identifier: 'm8z2mwe3pt',
    version: '0.0.1',
    sources: sources,
  };
};

module.exports.textToSpeech = function textToSpeech(data) {
  let sources = {};
  //Add any number of inputs
  sources['0001'] = {
    'input.txt': data.input ? data.input : '',
  };

  return {
    ...data,
    identifier: 'uvdncymn6q',
    version: '0.0.2',
    sources: sources,
  };
};
