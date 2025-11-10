"use client";

import { ReactNode } from "react";

interface BadgeLabelProps {
  icon: ReactNode;
  label: string;
}

export const BadgeLabel: React.FC<BadgeLabelProps> = ({ icon, label }) => {
  return (
    <div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full mb-6">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
};
