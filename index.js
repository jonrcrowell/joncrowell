#!/usr/bin/env node
const pkgJson = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJson.name,
  tagLine: `Buenos ding-dong-diddly-dias, neighborino. I am so glad you're here.`,
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: false,
});
console.log(`

Jon Crowell

Software engineer focused on building interactive apps using JavaScript, primarily with React.

`);
