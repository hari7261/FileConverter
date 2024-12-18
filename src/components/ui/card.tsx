// src/components/ui/card.tsx
import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6 border rounded-lg shadow-md">{children}</div>;
};
