import { create } from 'zustand';

const useJobStore = create((set) => ({
    fresherOrExp: '', // default
    experience: 0, // stored in months
    jobTitle: '',

    setJobTitle: (value) => set({ jobTitle: value }),

    setFresherOrExp: (value) => set({ fresherOrExp: value }),
    incrementExperience: () => set((state) => ({ experience: state.experience + 1 })),
    decrementExperience: () =>
        set((state) => ({ experience: state.experience > 0 ? state.experience - 1 : 0 })),
}));
export default useJobStore;
