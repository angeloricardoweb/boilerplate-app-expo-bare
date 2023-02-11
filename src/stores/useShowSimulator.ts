import { create } from 'zustand';

type ShowSimulatorType = {
  showSimulator: boolean;
  setShowSimulator: (status: boolean) => void;
};

const useShowSimulator = create<ShowSimulatorType>((set) => ({
  showSimulator: true,
  setShowSimulator: (status) => set({ showSimulator: status }),
}));

export default useShowSimulator;
