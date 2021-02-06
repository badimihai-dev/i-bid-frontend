import { getLocalStorage, setLocalStorage } from "../utils";
import { CacheKeys } from "../constants";
import create from "zustand";

const defaultProfile = undefined;

const useAuth = create((set, get) => ({
  profile: getLocalStorage(CacheKeys.Profile.Default) || defaultProfile,
  setProfile: (profile) => {
    setLocalStorage(CacheKeys.Profile.Default, profile);
    return set((state) => ({ ...state, profile }));
  },
  resetProfile: () => {
    localStorage.clear();
    return set((state) => ({ ...state, profile: defaultProfile }));
  },
}));

export default useAuth;
