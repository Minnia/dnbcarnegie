import { useQuery } from "@tanstack/react-query";
import instrumentsEndpoints from "../../instruments.endpoints";

const queryKey = ["instruments"];

const useGetInstruments = () => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      try {
        const response = await instrumentsEndpoints.getAllInstruments();
        // TODO: set query data for instruments
        // queryClient.setQueryData(queryKey, response);
        return response;
      } catch (error) {
        console.log("Error fetching instruments:", error);
        throw error;
      }
    },
  });
};

export default useGetInstruments;
