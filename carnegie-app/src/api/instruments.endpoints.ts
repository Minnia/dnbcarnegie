import apiClient from "./apiClient";
import { InstrumentDTO, InstrumentsResponseDTO } from "./dtos/instrument.dto";

const instrumentsEndpoints = {
  getAllInstruments: async (): Promise<InstrumentDTO[]> => {
    try {
      const { data } = await apiClient.get<InstrumentsResponseDTO>(
        "/instruments"
      );
      return data.items;
    } catch (error) {
      throw new Error("Failed to fetch instruments");
    }
  },
};

export default instrumentsEndpoints;
