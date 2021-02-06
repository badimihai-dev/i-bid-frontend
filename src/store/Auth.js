import { getLocalStorage, setLocalStorage } from "../utils";
import { CacheKeys } from "../constants";
import create from "zustand";

const defaultProfile = {
  id: "",
  token: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

const useAuth = create((set, get) => ({
  profile: getLocalStorage(CacheKeys.Profile.Default) || defaultProfile,
  setProfile: (profile) => {
    setLocalStorage(CacheKeys.Profile.Default, profile);
    return set((state) => ({ ...state, profile }));
  },
  resetProfile: () => {
    setLocalStorage(CacheKeys.Profile.Default, defaultProfile);
    return set((state) => ({ ...state, defaultProfile }));
  },
}));

export default useAuth;
