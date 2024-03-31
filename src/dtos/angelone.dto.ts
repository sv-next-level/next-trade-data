import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";

import { EXCHANGE, INTERVAL, MODE, REGEX } from "@/constants";

export class ExchangeTokensDTO {
  @IsArray()
  @IsOptional()
  @ArrayNotEmpty()
  @IsString({
    each: true,
    message: "NSE should have array of symbolTokens as strings only!",
  })
  readonly NSE: string[];

  @IsArray()
  @IsOptional()
  @ArrayNotEmpty()
  @IsString({
    each: true,
    message: "BSE should have array of symbolTokens as strings only!",
  })
  readonly BSE: string[];

  @IsArray()
  @IsOptional()
  @ArrayNotEmpty()
  @IsString({
    each: true,
    message: "NFO should have array of symbolTokens as strings only!",
  })
  readonly NFO: string[];

  @IsArray()
  @IsOptional()
  @ArrayNotEmpty()
  @IsString({
    each: true,
    message: "MCX should have array of symbolTokens as strings only!",
  })
  readonly MCX: string[];

  @IsArray()
  @IsOptional()
  @ArrayNotEmpty()
  @IsString({
    each: true,
    message: "BFO should have array of symbolTokens as strings only!",
  })
  readonly BFO: string[];

  @IsArray()
  @IsOptional()
  @ArrayNotEmpty()
  @IsString({
    each: true,
    message: "CDS should have array of symbolTokens as strings only!",
  })
  readonly CDS: string[];
}

export class LiveMarketDataDTO {
  @IsNotEmpty()
  @IsString()
  @IsEnum(MODE, { message: "Invalid mode!" })
  readonly mode: MODE;

  @ValidateNested({ each: true })
  @IsObject()
  @IsNotEmptyObject()
  @Type(() => ExchangeTokensDTO)
  readonly exchangeTokens: ExchangeTokensDTO;
}

export class HistoricalMarketDataDTO {
  @IsNotEmpty()
  @IsString()
  @IsEnum(EXCHANGE, { message: "Invalid exchange!" })
  readonly exchange: EXCHANGE;

  @IsNotEmpty()
  @IsString()
  readonly symboltoken: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(INTERVAL, { message: "Invalid interval!" })
  readonly interval: INTERVAL;

  @IsNotEmpty()
  @IsString()
  @Matches(REGEX.HISTORICAL_DATE, {
    message: "Invalid from date!",
  })
  readonly fromdate: string;

  @IsNotEmpty()
  @IsString()
  @Matches(REGEX.HISTORICAL_DATE, { message: "Invalid to date!" })
  readonly todate: string;
}

export class MarketDataHeadersDTO {
  @IsNotEmpty()
  @IsString()
  readonly authorization: string;
}
