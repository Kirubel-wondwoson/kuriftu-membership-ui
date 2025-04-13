"use client";

import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorMessage({
  message = "Something went wrong. Please try again.",
  onRetry,
  className
}: ErrorMessageProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center",
        className
      )}
    >
      <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
      <h3 className="text-lg font-medium mb-2">Error</h3>
      <p className="text-muted-foreground mb-4">
        {message}
      </p>
      {onRetry &&
        <Button onClick={onRetry} variant="outline">
          Try Again
        </Button>}
    </div>
  );
}
