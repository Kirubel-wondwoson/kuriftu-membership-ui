"use client";

import Image from "next/image";
import { ShoppingCart, Award } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  pointsEarned: number;
  image: string;
  category: string;
  featured: boolean;
  inStock: boolean;
}

interface ShopProductCardProps {
  product: Product;
  membershipTier: "Basic" | "Golden" | "Platinum" | "Diamond";
  onPurchase: () => void;
}

export function ShopProductCard({
  product,
  membershipTier,
  onPurchase
}: ShopProductCardProps) {
  // Calculate points based on membership tier
  const pointsMultiplier =
    membershipTier === "Diamond"
      ? 2.5
      : membershipTier === "Platinum"
        ? 2
        : membershipTier === "Golden" ? 1.5 : 1;

  const totalPoints = Math.round(product.pointsEarned * pointsMultiplier);

  // Format price with commas
  const formattedPrice = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative h-48">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.featured &&
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>}
        <div className="absolute top-4 right-4">
          <div className="bg-background/90 backdrop-blur-sm text-foreground font-bold px-3 py-1 rounded-md">
            {formattedPrice}
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">
          {product.name}
        </h3>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          <Award className="h-4 w-4" />
          <span>
            Earn {totalPoints.toLocaleString()} points
          </span>
          {pointsMultiplier > 1 &&
            <Badge
              variant="outline"
              className="bg-emerald-50 text-emerald-700 border-emerald-200 ml-1"
            >
              {pointsMultiplier}x
            </Badge>}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onPurchase}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Purchase
        </Button>
      </CardFooter>
    </Card>
  );
}
