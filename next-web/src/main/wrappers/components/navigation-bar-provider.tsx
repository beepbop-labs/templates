"use client";
import { ProgressProvider } from "@bprogress/next/app";

export const NavigationBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="3px"
      color="var(--color-main)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default NavigationBarProvider;
