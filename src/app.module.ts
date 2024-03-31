import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppService } from "@/app.service";
import { AppController } from "@/app.controller";
import { validate } from "@/config/env.validation";
import configuration from "@/config/configuration";
import { AngeloneService } from "@/angelone/angelone.service";
import { DatabaseModule } from "@/infra/mongoose/database.module";
import { AngeloneController } from "@/angelone/angelone.controller";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configuration,
      expandVariables: true,
      isGlobal: true,
      cache: true,
      validate,
    }),
    DatabaseModule,
  ],
  controllers: [AppController, AngeloneController],
  providers: [AppService, AngeloneService],
})
export class AppModule {}
