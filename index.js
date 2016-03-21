"use strict";

var typescriptEslintParser = require("typescript-eslint-parser");
var eslint = require('eslint');
var fs = require('fs');
var path = require('path');
var fullPath = path.join(__dirname, 'code-sample.ts');
var code = fs.readFileSync(fullPath, 'utf8');

var result = JSON.stringify(typescriptEslintParser.parse(code, {}));
console.log(result);

var opts = {
  "outputFile": false,
  "quiet": false,
  "maxWarnings": -1,
  "configFile": ".eslintrc"
};
var engine = new eslint.CLIEngine(opts);

var report;
try {
  report = engine.executeOnFiles(["code-sample.ts"]);
} catch (err) {
  console.log('found problem : ' + err);
  return false;
}

// module.exports = function () {
// 	var typescriptEslintParser = require("typescript-eslint-parser");
// };


