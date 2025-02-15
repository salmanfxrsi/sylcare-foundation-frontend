import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useVolunteers = () => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, data: volunteers } = useQuery({
    queryKey: ["volunteers"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/volunteers.json");
      return data;
    },
  });

  return [isLoading, volunteers];
};

export default useVolunteers;
