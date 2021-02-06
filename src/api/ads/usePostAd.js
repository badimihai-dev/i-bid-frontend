import { useMutation, useQueryCache } from "react-query";
import { ApiKeys, CacheKeys } from "../../constants";
import { useAuth } from "../../store";
import api from "../axios";

const usePostAd = () => {
  const { resetProfile } = useAuth();
  const queryClient = useQueryCache();

  return useMutation(
    async (payload) => {
      return api.post(ApiKeys.Ads.Base, payload);
    },
    {
      onSuccess: async (response) => {
        queryClient.invalidateQueries(CacheKeys.Ads.Default);
      },
      onError: (error) => {
        if (error.status === 403) {
          resetProfile();
        }
        /* Note: Possible specific error handler
           const { message } = error?.response?.data || {};
           const generalMessage =
             "Something went wrong, please try again in a little while";
           Snackbar(message || generalMessage, {
             variant: "error"
           }); 
           */
      },
    }
  );
};
export default usePostAd;
