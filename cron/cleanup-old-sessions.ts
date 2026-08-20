import { defineJob } from "cronify";

export default defineJob({
  id: "cleanup-old-sessions",
  schedule: "0 * * * *",
  description: "Deletes expired sessions every hour",
  handler: async () => {
    console.log("[cleanup-old-sessions] running at", new Date().toISOString());
    // your real logic goes here — e.g. DELETE FROM sessions WHERE expires_at < now()
  },
});
