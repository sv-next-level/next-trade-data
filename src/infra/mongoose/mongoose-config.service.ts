import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MongooseTradingDataConfigService
  implements MongooseOptionsFactory
{
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions():
    | MongooseModuleOptions
    | Promise<MongooseModuleOptions> {
    const uri = this.configService.get("TRADING_DATA.dbUri");

    return {
      uri,
    };
  }
}
