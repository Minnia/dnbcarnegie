import { useQuery } from "@tanstack/react-query";
import instrumentsEndpoints from "../instruments.endpoints";

const queryKey = ["instruments"];

const useGetInstruments = () => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await instrumentsEndpoints.getAllInstruments();
      return response;
    },
  });
};

export default useGetInstruments;
