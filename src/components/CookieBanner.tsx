import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[rgb(var(--navy))] text-[rgb(var(--off-white))] shadow-lg">
      <div className="container py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm flex-1">
            This website uses cookies to enhance your experience and analyze site usage. By continuing to browse, you consent to our use of cookies.
          </p>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleAccept}
              variant="default"
              size="sm"
              className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90"
            >
              Accept
            </Button>
            <Button
              onClick={handleAccept}
              variant="ghost"
              size="icon"
              className="text-[rgb(var(--off-white))] hover:bg-[rgb(var(--slate))]"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
