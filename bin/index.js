#!/usr/bin/env node

const yargs = require('yargs');
var fs = require('fs');
var HTMLParser = require('node-html-parser');
const { exec } = require('child_process');
const { bs2_to_bs3_rules } = require('../bs2-to-bs3');

const options = yargs
    .usage('Usage: [options] [--] <path>')
    .option('apply', { describe: 'Apply new classes to the file', type: 'boolean', default: false }).argv;

try {
    const filePath = options._[0];
    const filePathModified = filePath + Date.now() + '.hcu.html';
    const applyChanges = options.apply;

    const rules = [...bs2_to_bs3_rules];

    if (fs.existsSync(filePath)) {
        let fileContent = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
        let root = HTMLParser.parse(fileContent, {
            comment: true,
        });
        for (const rule of rules) {
            let elements = root.querySelectorAll(rule.selector);

            for (const element of elements) {
                if (rule.hasOwnProperty('classList')) {
                    if (rule.classList.hasOwnProperty('remove')) {
                        for (const removeClass of rule.classList.remove) {
                            element.classList.remove(removeClass);
                        }
                    }
                    if (rule.classList.hasOwnProperty('add')) {
                        for (const addClass of rule.classList.add) {
                            element.classList.add(addClass);
                        }
                    }
                }
                if (rule.hasOwnProperty('removeAttributes')) {
                    for (const attrKey of rule.removeAttributes) {
                        element.removeAttribute(attrKey);
                    }
                }
                if (rule.hasOwnProperty('setAttributes')) {
                    for (const attr of rule.setAttributes) {
                        element.setAttribute(attr.key, attr.value);
                    }
                }
                if (rule.hasOwnProperty('rawTagName')) {
                    element.rawTagName = rule.rawTagName;
                }
                if (rule.hasOwnProperty('innerHTML')) {
                    element.innerHTML = rule.innerHTML;
                }
                if (rule.hasOwnProperty('insertHTML')) {
                    let elementHTML = rule.insertHTML.afterbegin + element.innerHTML + rule.insertHTML.beforeend;
                    element.innerHTML = elementHTML;
                }
            }
        }
        let modifiedContent = root.toString();
        fs.writeFileSync(filePathModified, modifiedContent);
        let gitDiffCmd = 'git diff --no-index --color=always ' + filePath + ' ' + filePathModified;

        exec(gitDiffCmd, (error, stdout, stderr) => {
            console.log(`${stdout}`);

            if (applyChanges) {
                fs.renameSync(filePathModified, filePath);
            } else {
                fs.unlinkSync(filePathModified);
            }
        });
    }
} catch (err) {
    console.error(err);
}
