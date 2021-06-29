#!/usr/bin/env node

const yargs = require('yargs');
var fs = require('fs');
var HTMLParser = require('node-html-parser');
const { exec } = require('child_process');

const options = yargs
    .usage('Usage: [options] [--] <path>')
    .option('apply', { describe: 'Apply new classes to the file', type: 'boolean', default: false }).argv;
const filePath = options._[0];
const filePathModified = filePath + Date.now() + '.hcu.html';
const applyChanges = options.apply;

fs.readFile(filePath, 'utf-8', (err, data) => {
    let root = HTMLParser.parse(data, {
        comment: true,
    });
    let elements = root.querySelectorAll('.row-fluid');
    for (const element of elements) {
        let classList = element.classList;
        classList.remove('row-fluid');
        classList.add('row');
    }
    let modifiedContent = root.toString();

    fs.writeFile(filePathModified, modifiedContent, (err) => {
        if (err) console.log(err);
        console.log('Successfully Written to File.');

        exec('git diff --no-index --color=always ' + filePath + ' ' + filePathModified, (error, stdout, stderr) => {
            console.log(`${stdout}`);
            if (applyChanges) {
                fs.rename(filePathModified, filePath, function (err) {
                    if (err) throw err
                    console.log('Successfully renamed - AKA moved!')
                  })
            } else {
                fs.unlinkSync(filePathModified);
            }
        });
    });
});
