"use strict";

var typescriptEslintParser = require("typescript-eslint-parser");
var eslint = require('eslint');
var fs = require('fs');
var path = require('path');
var fullPath = path.join(__dirname, 'code-sample.ts');
var code = fs.readFileSync(fullPath, 'utf8');

var result = JSON.stringify(typescriptEslintParser.parse(code, {}), null, 4);
console.log('/////////// typescript-eslint-parser AST result //////////// ' + '\n' + result + '\n');

var CLIEngine = require("eslint").CLIEngine;
var cli = new CLIEngine({
  envs: ["browser", "mocha"]
});

console.log('Running eslint:\n');

var report;
try {

  report = cli.executeOnText(code);
} catch (err) {
  console.log('eslint failed: ' + err);
  return false;
}



