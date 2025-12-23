import NavigationBarProvider from "@/main/wrappers/components/navigation-bar-provider";
import { ThemeProvider } from "@/main/wrappers/components/theme-provider";

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <NavigationBarProvider>{children}</NavigationBarProvider>
    </ThemeProvider>
  );
};
