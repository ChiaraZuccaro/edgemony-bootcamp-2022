const fs = require("fs").promises;
const arguments = process.argv.slice(2);

console.log(arguments);

async function ReadFile(file) {
    const data = await fs.readFile(file);
    const dataTostring = data.toString();
    console.log(dataTostring);
}

async function WriteFile(content) {
    await fs.writeFile('spesa.txt', content, { flag: 'a+'});
}

const content = `${arguments} \n`;

async function WriteAndRead() {
    await WriteFile(content); // Escape : https://www.tutorials point.com/escape-characters-in-javascript
    await ReadFile('spesa.txt');
}

WriteAndRead()