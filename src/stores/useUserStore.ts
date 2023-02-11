import { create } from 'zustand';

type UserType = {
  name: string;
  email: string;
};

type UserStoreType = {
  userName: string;
  setUserName: (userName: string) => void;
  users: UserType[];
  addNewUser: (user: UserType) => void;
};

const useUserStore = create<UserStoreType>((set) => ({
  userName: 'teste',
  users: [],
  setUserName: (userName: string) => set({ userName }),
  addNewUser: (user: UserType) => {
    set((state) => ({
      users: [...state.users, user],
    }));
  },
}));

export default useUserStore;
