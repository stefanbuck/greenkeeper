var log = require('npmlog')

var story = require('./lib/story').start

module.exports = function (flags) {
  console.log(story);
}