import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://943fe63e0a4c29b8d777e4e24690e703@o4509415741652992.ingest.us.sentry.io/4509415744274432",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
