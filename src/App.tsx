import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to remove Lovable button
const RemoveLovableButton = () => {
  useEffect(() => {
    const removeLovableElements = () => {
      // Remove any elements containing "Edit with" and "Lovable"
      const allElements = document.querySelectorAll("*");
      allElements.forEach((el) => {
        const text = el.textContent || "";
        if (text.includes("Edit with") && text.includes("Lovable")) {
          el.remove();
        }
      });

      // Remove iframes from Lovable
      document.querySelectorAll("iframe[src*='lovable']").forEach((iframe) => {
        iframe.remove();
      });

      // Remove elements with data-lovable attributes
      document.querySelectorAll("[data-lovable]").forEach((el) => {
        el.remove();
      });

      // Remove fixed positioned elements that might be the Lovable button
      const fixedElements = document.querySelectorAll("[style*='position: fixed']");
      fixedElements.forEach((el) => {
        const text = (el as HTMLElement).textContent || "";
        if (text.includes("Edit with") || text.includes("Lovable")) {
          el.remove();
        }
      });
    };

    // Run immediately
    removeLovableElements();

    // Run after a short delay to catch dynamically injected elements
    const timeout = setTimeout(removeLovableElements, 1000);

    // Use MutationObserver to watch for new elements
    const observer = new MutationObserver(() => {
      removeLovableElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RemoveLovableButton />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
