const log = require("../logger/logger");

function getWeight(type) {

    switch(type.toLowerCase()) {

        case "placement":
            return 3;

        case "result":
            return 2;

        case "event":
            return 1;

        default:
            return 0;
    }
}

function sortNotifications(notifications) {

    log("Started sorting notifications");

    const sortedNotifications = notifications.sort((a, b) => {

        const weightA = getWeight(a.Type);
        const weightB = getWeight(b.Type);

      
        if (weightB !== weightA) {
            return weightB - weightA;
        }

        return new Date(b.Timestamp) - new Date(a.Timestamp);
    });

    log("Sorting completed");

    return sortedNotifications.slice(0, 10);
}

module.exports = sortNotifications;