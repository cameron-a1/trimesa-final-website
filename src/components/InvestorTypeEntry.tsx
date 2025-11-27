import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";

interface InvestorTypeEntryProps {
  onSelect: () => void;
}

export default function InvestorTypeEntry({ onSelect }: InvestorTypeEntryProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already selected investor type
    const hasSelected = localStorage.getItem("trimesa-investor-type-selected");
    if (!hasSelected) {
      setIsVisible(true);
    } else {
      onSelect();
    }
  }, [onSelect]);

  const handleSelect = (type: string) => {
    // Store selection in localStorage
    localStorage.setItem("trimesa-investor-type-selected", "true");
    localStorage.setItem("trimesa-investor-type", type);
    setIsVisible(false);
    onSelect();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="container max-w-2xl px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <img
            src="/brand/trimesa-logo-transparent.png"
            alt="TriMesa Capital Partners"
            className="h-48 sm:h-56 md:h-64 w-auto max-w-full object-contain"
          />

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Welcome to TriMesa Capital Partners
            </h1>
            <p className="text-lg text-muted-foreground">
              Please select your investor type to continue
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button
              onClick={() => handleSelect("institutional")}
              size="lg"
              className="flex-1 h-14 text-lg"
            >
              Institutional Investor
            </Button>
            <Button
              onClick={() => handleSelect("accredited")}
              size="lg"
              variant="outline"
              className="flex-1 h-14 text-lg"
            >
              Accredited Investor
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-muted-foreground max-w-lg">
            This website is intended for institutional and accredited investors only.
          </p>
        </div>
      </div>
    </div>
  );
}
