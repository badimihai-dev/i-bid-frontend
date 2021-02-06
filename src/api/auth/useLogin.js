import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { ApiKeys, BrowserRoutes } from "../../constants";
import { useAuth } from "../../store";
import api from "../axios";

const useLogin = () => {
  const history = useHistory();
  const { setProfile } = useAuth();

  return useMutation(
    async (payload) => {
      return api.post(ApiKeys.Auth.Login);
    },
    {
      onSuccess: async (response) => {
        setProfile(response.data);
        history.push(BrowserRoutes.Auth.Home);
      },
      onError: (error) => {
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
export default useLogin;
