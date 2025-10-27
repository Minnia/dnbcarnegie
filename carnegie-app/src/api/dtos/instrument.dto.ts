import { BaseResponse } from "./common.dto";

export interface InstrumentDTO {
  id: number;
  ticker: string;
  name: string;
}

export interface InstrumentsResponseDTO extends BaseResponse {
  items: InstrumentDTO[];
}
