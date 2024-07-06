/** @type {import('next').NextConfig} */

import { config as dotenvConfig } from "dotenv";

const loadEnv = (envFile) => {
  const { parsed } = dotenvConfig({ path: envFile });
  return parsed;
};

const localEnv = loadEnv("./.env.local");
const productionEnv = loadEnv("./.env.production");

const myEnv = {
  ...(process.env.NODE_ENV === "production" ? productionEnv : localEnv),
};

const nextConfig = {
  env: myEnv,
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
