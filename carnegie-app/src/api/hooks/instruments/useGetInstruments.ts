import { useQuery } from "@tanstack/react-query";
import instrumentsEndpoints from "../../instruments.endpoints";
import { queryClient } from "../../../integrations";

const queryKey = ["instruments"];

const useGetInstruments = () => {
  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await instrumentsEndpoints.getAllInstruments();
      queryClient.setQueryData(queryKey, response);
      return response;
    },
  });
};

export default useGetInstruments;
