"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

interface HeroActionsProps {
  actions?: {
    label: string;
    tooltip: string;
    outline?: boolean;
    icon?: React.ReactNode;
  }[];
}

export const HeroActions: React.FC<HeroActionsProps> = ({ actions }) => {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-4 items-center">
        {actions?.map((action, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <Button
                variant={action.outline ? "outline" : undefined}
                className={`rounded-full px-6 py-3 shadow-md transition ${
                  action.outline
                    ? "border-white text-white hover:bg-white/10"
                    : "bg-[#800000] text-white hover:shadow-[0_0_20px_#800000aa]"
                }`}
              >
                {action.label} {action.icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{action.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
