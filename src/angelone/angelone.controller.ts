import { Body, Controller, Headers, Logger, Post } from "@nestjs/common";

import {
  MarketDataHeadersDTO,
  LiveMarketDataDTO,
  HistoricalMarketDataDTO,
} from "@/dtos";
import { AngeloneService } from "@/angelone/angelone.service";

@Controller("angelone")
export class AngeloneController {
  private logger: Logger = new Logger("email.controller");
  constructor(private readonly angeloneService: AngeloneService) {}

  @Post("live")
  async live(
    @Body() marketDataDto: LiveMarketDataDTO,
    @Headers() headers: MarketDataHeadersDTO
  ) {
    try {
      this.logger.debug({
        message: "Entering live",
        marketDataDto: marketDataDto,
      });

      const liveData: any = await this.angeloneService.getLiveMarketData(
        headers.authorization,
        marketDataDto
      );

      this.logger.log({
        message: "Sending live market data",
        liveData: liveData,
      });

      return liveData;
    } catch (error) {
      this.logger.error({
        message: "Error getting live data",
        error: error,
      });
    }
  }

  @Post("historical")
  async historical(
    @Body() marketDataDto: HistoricalMarketDataDTO,
    @Headers() headers: MarketDataHeadersDTO
  ) {
    try {
      this.logger.debug({
        message: "Entering historical",
        marketDataDto: marketDataDto,
      });

      const historicalData: any =
        await this.angeloneService.getHistoricalMarketData(
          headers.authorization,
          marketDataDto
        );

      this.logger.log({
        message: "Sending historical market data",
        historicalData: historicalData,
      });

      return historicalData;
    } catch (error) {
      this.logger.error({
        message: "Error getting historical data",
        error: error,
      });
    }
  }
}
