import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { DATABASE_CONNECTION_NAME } from "@/constants";
import { MongooseTradingDataConfigService } from "@/infra/mongoose/mongoose-config.service";

@Module({
  imports: [
    // Database `APP` connection factory provider
    MongooseModule.forRootAsync({
      useClass: MongooseTradingDataConfigService,
      connectionName: DATABASE_CONNECTION_NAME.TRADING_DATA_DB,
    }),

    // Database `ADMIN` connection factory provider
    // MongooseModule.forRootAsync({
    //   useClass: MongooseAdminConfigService,
    //   connectionName: DATABASE_CONNECTION.ADMIN,
    // }),
  ],

  exports: [MongooseModule],
})
export class DatabaseModule {}
