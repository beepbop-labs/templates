import { ThemeToggle } from "@/main/components/ui/theme-toggle";
import { Toaster } from "@/shadcn/components/ui/sonner";
import { GlobalProvider } from "@/main/wrappers/global-provider";
import { cn } from "@/shadcn/lib/utils";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      <AppLayout>{children}</AppLayout>
      <>
        <ThemeToggleButton />
        <Toaster position="top-right" />
      </>
    </GlobalProvider>
  );
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={cn("w-screen h-screen flex flex-1 flex-col overflow-hidden bg-bg")}>{children}</div>;
};

const ThemeToggleButton = () => {
  return (
    <div className="fixed bottom-16 right-10 flex justify-center">
      <ThemeToggle />
    </div>
  );
};
