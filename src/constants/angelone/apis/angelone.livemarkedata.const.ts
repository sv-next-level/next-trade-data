import { API_METHOD } from "@/constants/env.const";
import { angelOneApiService } from "@/constants/angelone/angelone.const";

export const LIVE_MARKET_DATA: angelOneApiService = {
  method: API_METHOD.POST,
  title: "Live market data",
  end_point:
    "https://apiconnect.angelbroking.com/rest/secure/angelbroking/market/v1/quote",
  description:
    "The Live Market Data API provides real-time market data for specific symbols, allowing clients to make informed trading and investment decisions. The API offers three distinct modes: LTP, OHLC, and FULL, each delivering varying levels of comprehensive market information",
};
