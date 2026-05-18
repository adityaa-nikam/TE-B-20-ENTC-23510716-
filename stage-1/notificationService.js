const axios = require("axios");
const log = require("../logger/logger");

async function fetchNotifications() {

    try {

        log("Fetching notifications from API");

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications"
        );

        log("Notifications fetched successfully");

        // TEMP DEBUG
        console.log(response.data);

        // Handle multiple possible response structures
        if (response.data.notifications) {
            return response.data.notifications;
        }

        if (Array.isArray(response.data)) {
            return response.data;
        }

        return [];

    } catch (error) {

        log(`API Error: ${error.message}`);

        console.log(error.message);

        return [];
    }
}

module.exports = fetchNotifications;