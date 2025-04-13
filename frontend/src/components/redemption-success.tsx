"use client";

import { CheckCircle2, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

interface RedemptionSuccessProps {
  type: "reward" | "upgrade";
  title: string;
  pointsSpent: number;
  remainingPoints: number;
  onClose: () => void;
  onViewDetails?: () => void;
}

export function RedemptionSuccess({
  type,
  title,
  pointsSpent,
  remainingPoints,
  onClose,
  onViewDetails
}: RedemptionSuccessProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center pb-2">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-emerald-100 p-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-600" />
          </div>
        </div>
        <CardTitle className="text-2xl font-serif">
          {type === "reward" ? "Reward Redeemed!" : "Membership Upgraded!"}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-lg font-medium">
          {title}
        </p>

        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Points Spent:</span>
            <span className="font-medium">
              -{pointsSpent.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Remaining Balance:
            </span>
            <span className="font-medium">
              {remainingPoints.toLocaleString()} points
            </span>
          </div>
        </div>

        {type === "reward"
          ? <div className="bg-primary/10 rounded-lg p-4 text-sm text-left">
              <p>
                Your reward has been successfully redeemed. You will receive a
                confirmation email with details on how to claim your reward.
              </p>
            </div>
          : <div className="bg-primary/10 rounded-lg p-4 text-sm text-left flex items-start gap-2">
              <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p>
                Congratulations on your membership upgrade! Your new benefits
                are now active. Enjoy your enhanced experience at Kuriftu
                Resort.
              </p>
            </div>}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full" onClick={onViewDetails}>
          {type === "reward" ? "View My Rewards" : "View Membership Benefits"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="w-full" onClick={onClose}>
          Close
        </Button>
      </CardFooter>
    </Card>
  );
}
