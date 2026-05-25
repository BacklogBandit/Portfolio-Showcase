import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <main className="dark min-h-screen bg-background text-foreground selection:bg-primary/30">
          <Portfolio />
        </main>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
