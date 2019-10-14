import * as joi from "@hapi/joi";

const validateEnvVars = (envVars: NodeJS.ProcessEnv) => {
  const envVarsSchema = joi
    .object({
      NODE_ENV: joi.string().valid("development", "production", "test"),
      PORT: joi.number(),
      FIREBASE_PROJECT_ID: joi.string().required(),
      FIREBASE_CLIENT_EMAIL: joi.string().required(),
      FIREBASE_DATABASE_URL: joi.string().required(),
      FIREBASE_PRIVATE_KEY: joi.string().required(),
      GOOGLE_CLOUD_PROJECT_ID: joi.string().required(),
      GCS_CLIENT_EMAIL: joi.string().required(),
      GCS_PRIVATE_KEY: joi.string().required(),
      DEFAULT_STORAGE_BUCKET_NAME: joi.string().required(),
      SENDGRID_API_KEY: joi.string().required(),
      ORIGIN: joi.string().required()
    })
    .unknown()
    .required();

  const { error } = envVarsSchema.validate(envVars);

  if (error) {
    throw new Error(`Key validation error: ${error.message}`);
  }
};

const keys = {
  env: process.env.NODE_ENV!,
  server: {
    port: process.env.PORT!,
    origin: process.env.ORIGIN!
  },
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    databaseUrl: process.env.FIREBASE_DATABASE_URL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n")
  },
  google: {
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID!,
    clientEmail: process.env.GCS_CLIENT_EMAIL!,
    privateKey: process.env.GCS_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    storageBucket: process.env.DEFAULT_STORAGE_BUCKET_NAME!
  },
  sendGrid: {
    apiKey: process.env.SENDGRID_API_KEY!
  }
};

export { keys, validateEnvVars };
