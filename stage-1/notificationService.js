const axios = require("axios");
const log = require("../logger/logger");

async function fetchNotifications() {

    try {

        log("Fetching notifications from API");

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzUxMDcxNi5keXBpdEBkeXB2cC5lZHUuaW4iLCJleHAiOjE3NzkxMDA0NjQsImlhdCI6MTc3OTA5OTU2NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjgzNzE1YWFmLTNjNDgtNDVmNi05NzBhLTAxYzJiNTE4ZDBhZCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFkaXR5YSBuaWthbSIsInN1YiI6IjFiZDQ4YmQwLWI2M2EtNDA0Mi04NjVhLTVjYzM5ODFiMDZkNyJ9LCJlbWFpbCI6IjIzNTEwNzE2LmR5cGl0QGR5cHZwLmVkdS5pbiIsIm5hbWUiOiJhZGl0eWEgbmlrYW0iLCJyb2xsTm8iOiIyMzUxMDcxNiIsImFjY2Vzc0NvZGUiOiJmekVRU1EiLCJjbGllbnRJRCI6IjFiZDQ4YmQwLWI2M2EtNDA0Mi04NjVhLTVjYzM5ODFiMDZkNyIsImNsaWVudFNlY3JldCI6IlBUWFZNRmZ2SHh6WXpUaHgifQ.Ttgf8tRClR3zLufFoX88LC6-iIjCxdoeAvJ_SZqnz5I"
                }
            }
        );

        log("Notifications fetched successfully");

        if (response.data.notifications) {
            return response.data.notifications;
        }

        if (Array.isArray(response.data)) {
            return response.data;
        }

        return [];

    } catch (error) {

        log(`API Error: ${error.message}`);

        return [];
    }
}

module.exports = fetchNotifications;