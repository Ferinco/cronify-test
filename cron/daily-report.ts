import { defineJob } from "cronify";

export default defineJob({
  id: "daily-report",
  schedule: "30 8 * * *",
  description: "Sends the daily report email",
  handler: async () => {
    console.log("[daily-report] running at", new Date().toISOString());
    // your real logic goes here — e.g. query the DB, send an email
  },
});
