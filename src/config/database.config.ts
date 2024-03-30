import { registerAs } from "@nestjs/config";

import { ENVIRONMENT } from "@/constants";

export const TRADING_DATA_DB_CONFIG = registerAs("TRADING_DATA", () => {
  return {
    MONGODB_URI: process.env["TRADING_DATA_MONGODB_URI"],
    DATABASE_NAME: process.env["TRADING_DATA_DATABASE_NAME"],
    MONGODB_CONFIG: process.env["TRADING_DATA_MONGODB_CONFIG"],
    MONGODB_LOCAL_URI: "mongodb://localhost:27017",

    isLocal() {
      return process.env["NODE_ENV"] === ENVIRONMENT.LOCAL;
    },

    getTradingDataDbUri() {
      return this.isLocal() ? this.MONGODB_LOCAL_URI : this.MONGODB_URI;
    },

    get dbUri() {
      return `${this.getTradingDataDbUri()}/${this.DATABASE_NAME}?${this.MONGODB_CONFIG}`;
    },
  };
});
