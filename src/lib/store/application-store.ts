import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ApplicationData } from '@/lib/validations/application';

interface ApplicationState {
    currentStep: number;
    data: Partial<ApplicationData>;
    setStep: (step: number) => void;
    updateData: (data: Partial<ApplicationData>) => void;
    reset: () => void;
}

export const useApplicationStore = create<ApplicationState>()(
    persist(
        (set) => ({
            currentStep: 1,
            data: {},
            setStep: (step) => set({ currentStep: step }),
            updateData: (newData) =>
                set((state) => ({
                    data: { ...state.data, ...newData },
                })),
            reset: () =>
                set({
                    currentStep: 1,
                    data: {},
                }),
        }),
        {
            name: 'neuraq-application-storage',
        }
    )
);
