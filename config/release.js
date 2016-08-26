/* jshint node:true */
/* var RSVP = require('rsvp'); */
var execSync = require('child_process').execSync;

module.exports = {
  // beforeCommit: function(project, versions) {
  //   // generate changelog
  //   runCommand('github_changelog_generator --simple-list --future-release='+versions.next);
  // }
};

function runCommand(command) {
  console.log('running: ' + command);
  var output = execSync(command, { encoding: 'utf8' });
  console.log(output);
}
