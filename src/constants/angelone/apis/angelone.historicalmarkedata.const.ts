import { API_METHOD } from "@/constants/env.const";
import { angelOneApiService } from "@/constants/angelone/angelone.const";

export const HISTORICAL_MARKET_DATA: angelOneApiService = {
  method: API_METHOD.POST,
  title: "Historical market data",
  end_point:
    "https://apiconnect.angelbroking.com/rest/secure/angelbroking/historical/v1/getCandleData",
  description:
    "Historical API provides past data of the indices and instruments. When a successful request is placed, corresponding data is returned. A single API endpoint provides the data for all segments. The exchange parameter in the request body is used to specify the segment whose data is required.",
};
