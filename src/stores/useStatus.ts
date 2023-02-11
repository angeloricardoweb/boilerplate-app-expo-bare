import { create } from 'zustand';

type StatusTypes = {
  status: 'server_error' | 'limited_by_time' | 'success' | 'portability';
};

type UseStatusType = {
  statusType: StatusTypes;
  setStatus: (statusType: StatusTypes) => void;
};

export const useStatus = create<UseStatusType>((set) => ({
  statusType: { status: 'success' },
  setStatus(statusType) {
    console.log('StatusType = ', statusType.status);
    set({ statusType });
  },
}));
