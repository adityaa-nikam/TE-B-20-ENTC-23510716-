const fs = require("fs");

function log(message) {

    const timestamp = new Date().toISOString();

    const finalMessage = `[${timestamp}] ${message}\n`;

    fs.appendFileSync("app.log", finalMessage);
}

module.exports = log;