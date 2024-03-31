import { ConfigService } from "@nestjs/config";
import { Injectable, Logger } from "@nestjs/common";

import { apiCall } from "@/api/api";
import { HistoricalMarketDataDTO, LiveMarketDataDTO } from "@/dtos";
import { HISTORICAL_MARKET_DATA, LIVE_MARKET_DATA } from "@/constants";

@Injectable()
export class AngeloneService {
  private LIVE_API_KEY: string;
  private HISTORICAL_API_KEY: string;
  private headers: Record<string, string>;
  private logger: Logger = new Logger("angelone.service");

  constructor(private readonly configService: ConfigService) {
    this.LIVE_API_KEY = this.configService.get("ANGELONE.marketKey");
    this.HISTORICAL_API_KEY = this.configService.get("ANGELONE.historicalKey");
    this.headers = {
      Accept: "application/json",
      "X-SourceID": "WEB",
      "X-ClientLocalIP": "192.168.168.168",
      "X-ClientPublicIP": "106.193.147.98",
      "X-MACAddress": "fe80::216e:6507:4b90:3719",
      "X-UserType": "USER",
      "Content-Type": "application/json",
    };
  }

  async getLiveMarketData(
    authorization: string,
    marketData: LiveMarketDataDTO
  ): Promise<any> {
    try {
      this.logger.debug({
        message: "Entering getLiveMarketData",
        marketData: marketData,
        authorization: authorization,
      });

      const url: string = LIVE_MARKET_DATA.end_point;
      const method: string = LIVE_MARKET_DATA.method;
      const data: string = JSON.stringify(marketData);
      const headers = Object({
        ...this.headers,
        authorization: authorization,
        "X-PrivateKey": this.LIVE_API_KEY,
      });

      const config = {
        url: url,
        data: data,
        method: method,
        headers: headers,
      };

      const liveMarketData: any = await apiCall(config);

      this.logger.log({
        message: "After getting response from API",
        liveMarketData: liveMarketData,
      });

      return liveMarketData;
    } catch (error) {
      this.logger.error({
        message: "Error getting live market data",
        error: error,
      });
    }
  }

  async getHistoricalMarketData(
    authorization: string,
    marketData: HistoricalMarketDataDTO
  ): Promise<any> {
    try {
      this.logger.debug({
        message: "Entering getHistoricalMarketData",
        marketData: marketData,
        authorization: authorization,
      });

      const url: string = HISTORICAL_MARKET_DATA.end_point;
      const method: string = HISTORICAL_MARKET_DATA.method;
      const data: string = JSON.stringify(marketData);
      const headers = Object({
        ...this.headers,
        authorization: authorization,
        "X-PrivateKey": this.HISTORICAL_API_KEY,
      });

      const config = {
        url: url,
        data: data,
        method: method,
        headers: headers,
      };

      const historicalMarketData: any = await apiCall(config);

      this.logger.log({
        message: "After getting response from API",
        historicalMarketData: historicalMarketData,
      });

      return historicalMarketData;
    } catch (error) {
      this.logger.error({
        message: "Error getting historical market data",
        error: error,
      });
    }
  }
}
