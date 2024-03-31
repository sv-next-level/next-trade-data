import { registerAs } from "@nestjs/config";

export const ANGELONE_API_CONFIG = registerAs("ANGELONE", () => {
  return {
    HISTORICAL_API_KEY: process.env["ANGELONE_HISTORICAL_API_KEY"],
    MARKET_API_KEY: process.env["ANGELONE_MARKET_API_KEY"],

    get historicalKey() {
      return `${this.HISTORICAL_API_KEY}`;
    },

    get marketKey() {
      return `${this.MARKET_API_KEY}`;
    },
  };
});
