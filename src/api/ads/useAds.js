import { useQuery } from "react-query";
import { ApiKeys, CacheKeys } from "../../constants";
import api from "../axios";

export default function useAds(params, config = null) {
  return useQuery(
    [CacheKeys.Ads.Default, params],
    async (_key, params) => {
      const { data } = await api.get(ApiKeys.Ads.Base);

      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
}
