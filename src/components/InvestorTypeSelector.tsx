import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User } from "lucide-react";

type InvestorType = "institutional" | "retail";

export default function InvestorTypeSelector() {
  const [selectedType, setSelectedType] = useState<InvestorType>("institutional");

  const investorTypes = [
    { value: "institutional" as InvestorType, label: "Institutional Investors" },
    { value: "retail" as InvestorType, label: "Retail Investors" },
  ];

  const currentLabel = investorTypes.find(t => t.value === selectedType)?.label || "Select Investor Type";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[rgb(var(--gold))] text-[rgb(var(--navy))] shadow hover:bg-[rgb(var(--gold))]/90 h-9 px-4 py-2"
      >
        <User className="w-4 h-4" />
        {currentLabel}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {investorTypes.map((type) => (
          <DropdownMenuItem
            key={type.value}
            onClick={() => setSelectedType(type.value)}
            className={`cursor-pointer ${
              selectedType === type.value
                ? "bg-[rgb(var(--gold))]/10 text-[rgb(var(--gold))]"
                : ""
            }`}
          >
            {type.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
