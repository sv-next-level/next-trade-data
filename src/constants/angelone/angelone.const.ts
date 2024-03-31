import { API_METHOD } from "@/constants/env.const";

export interface angelOneApiService {
  method: API_METHOD;
  title: string;
  end_point: string;
  description: string;
}

export enum VARIETY {
  NORMAL = "NORMAL",
  STOPLOSS = "STOPLOSS",
  AMO = "AMO",
  ROBO = "ROBO",
}

export enum TRANSACTION_TYPE {
  BUY = "BUY",
  SELL = "SELL",
}

export enum ORDER_TYPE {
  MARKET = "MARKET",
  LIMIT = "LIMIT",
  STOP_LIMIT = "STOP_LIMIT",
  STOPLOSS_MARKET = "STOPLOSS_MARKET",
}

export enum PRODUCT_TYPE {
  DELIVERY = "DELIVERY",
  CARRYFORWARD = "CARRYFORWARD",
  MARGIN = "MARGIN",
  INTRADAY = "INTRADAY",
  BO = "BO",
}

export enum DURATION {
  DAY = "DAY",
  IOC = "IOC",
}

export enum EXCHANGE {
  NSE = "NSE", // NSE Stocks and Indices
  NFO = "NFO", // NSE Futures and Options
  BSE = "BSE", // BSE Stocks and Indices
  BFO = "BFO", // BSE Futures and Options
  MCX = "MCX", // Currency Derivatives
  CDS = "CDS", // Commodities Exchange
}

export enum MODE {
  FULL = "FULL",
  OHLC = "OHLC",
  LTP = "LTP",
}

export enum INTERVAL {
  ONE_MINUTE = "ONE_MINUTE",
  THREE_MINUTE = "THREE_MINUTE",
  FIVE_MINUTE = "FIVE_MINUTE",
  TEN_MINUTE = "TEN_MINUTE",
  FIFTEEN_MINUTE = "FIFTEEN_MINUTE",
  THIRTY_MINUTE = "THIRTY_MINUTE",
  ONE_HOUR = "ONE_HOUR",
  ONE_DAY = "ONE_DAY",
}

// The API can provide data of multiple days in one request. Below is the list of Max no of days upto which data can be provided for the requested intervals:
export const MAX_DAYS = {
  ONE_MINUTE: 30,
  THREE_MINUTE: 60,
  FIVE_MINUTE: 100,
  TEN_MINUTE: 100,
  FIFTEEN_MINUTE: 200,
  THIRTY_MINUTE: 200,
  ONE_HOUR: 400,
  ONE_DAY: 2000,
};

export const REGEX = {
  HISTORICAL_DATE:
    /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) (?:[01][0-9]|2[0-3]):[0-5][0-9]$/,
};
