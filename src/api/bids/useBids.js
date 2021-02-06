import { useQuery } from "react-query";
import { ApiKeys, CacheKeys } from "../../constants";
import api from "../axios";

export default function useAds(params, config = null) {
  return useQuery(
    [CacheKeys.Bids.Default, params],
    async (_key, params) => {
      const { data } = await api.get(
        ApiKeys.Bids.Base.replace(":adId", params.id)
      );

      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
}
