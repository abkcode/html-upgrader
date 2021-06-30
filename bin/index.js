#!/usr/bin/env node

const yargs = require('yargs');
var fs = require('fs');
var HTMLParser = require('node-html-parser');
const { execSync } = require('child_process');

const options = yargs
    .usage('Usage: [options] [--] <path>')
    .option('apply', { describe: 'Apply new classes to the file', type: 'boolean', default: false }).argv;

try {
    const filePath = options._[0];
    const filePathModified = filePath + Date.now() + '.hcu.html';
    const applyChanges = options.apply;

    if (fs.existsSync(filePath)) {
        let fileContent = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
        let root = HTMLParser.parse(fileContent, {
            comment: true,
        });
        let elements = root.querySelectorAll('.row-fluid');
        for (const element of elements) {
            let classList = element.classList;
            classList.remove('row-fluid');
            classList.add('row');
        }
        let modifiedContent = root.toString();
        fs.writeFileSync(filePathModified, modifiedContent);

        const stdout = execSync('git diff --no-index --color=always ' + filePath + ' ' + filePathModified);
        console.log(`${stdout}`);

        if (applyChanges) {
            fs.renameSync(filePathModified, filePath);
        } else {
            fs.unlinkSync(filePathModified);
        }
    }
} catch (err) {
    console.error(err);
}
