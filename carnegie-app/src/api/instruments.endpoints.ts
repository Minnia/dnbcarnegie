import apiClient from "./apiClient";
import { Instrument, InstrumentsResponse } from "./types";

const instrumentsEndpoints = {
  getAllInstruments: async (): Promise<Instrument[]> => {
    try {
      const { data } = await apiClient.get<InstrumentsResponse>("/instruments");
      return data.items;
    } catch (error) {
      throw new Error("Failed to fetch instruments");
    }
  },
};

export default instrumentsEndpoints;
