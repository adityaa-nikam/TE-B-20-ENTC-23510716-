const fetchNotifications = require("./notificationService");
const sortNotifications = require("./priorityLogic");
const log = require("../logger/logger");

async function main() {

    log("Application started");

    const notifications = await fetchNotifications();

    log(`Fetched ${notifications.length} notifications`);

    const topNotifications = sortNotifications(notifications);

    console.log("\nTOP 10 PRIORITY NOTIFICATIONS\n");

    topNotifications.forEach((notification, index) => {

        console.log(`
${index + 1}.
Type: ${notification.Type}
Message: ${notification.Message}
Timestamp: ${notification.Timestamp}
        `);
    });

    log("Application completed");
}

main();