"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard, CheckCircle2, Award, ShoppingBag } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface Product {
  id: string
  name: string
  description: string
  price: number
  pointsEarned: number
  image: string
  category: string
  featured: boolean
  inStock: boolean
}

interface ShopCheckoutModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product
  membershipTier: "Basic" | "Golden" | "Platinum" | "Diamond"
}

export function ShopCheckoutModal({ open, onOpenChange, product, membershipTier }: ShopCheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Calculate points based on membership tier
  const pointsMultiplier =
    membershipTier === "Diamond" ? 2.5 : membershipTier === "Platinum" ? 2 : membershipTier === "Golden" ? 1.5 : 1

  const totalPoints = Math.round(product.pointsEarned * pointsMultiplier)

  // Format price with commas
  const formattedPrice = product.price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  const handleClose = () => {
    if (!isProcessing) {
      onOpenChange(false)
      // Reset state after dialog is closed
      setTimeout(() => {
        setIsComplete(false)
        setPaymentMethod("credit-card")
      }, 300)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {!isComplete ? (
          <>
            <DialogHeader>
              <DialogTitle>Complete Your Purchase</DialogTitle>
              <DialogDescription>
                Purchase {product.name} and earn {totalPoints.toLocaleString()} points.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="rounded-lg border p-4 bg-muted/50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{product.name}</h3>
                    <span className="font-bold">{formattedPrice}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    <Award className="h-4 w-4" />
                    <span>You will earn {totalPoints.toLocaleString()} points</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Payment Method</h3>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="points" id="points" disabled />
                      <Label htmlFor="points" className="flex items-center gap-2 text-muted-foreground">
                        <Award className="h-4 w-4" />
                        Pay with Points (Not enough points)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-4">
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name on Card</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleClose} disabled={isProcessing}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>Pay {formattedPrice}</>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto w-fit rounded-full bg-emerald-100 p-3 text-emerald-700 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <DialogTitle className="mb-2">Purchase Complete!</DialogTitle>
            <DialogDescription className="mb-6">
              Thank you for your purchase. You have earned{" "}
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {totalPoints.toLocaleString()} points
              </span>
              .
            </DialogDescription>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/50">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{product.name}</h3>
                  <span className="font-bold">{formattedPrice}</span>
                </div>
                <p className="text-sm text-muted-foreground">Your purchase has been confirmed.</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShoppingBag className="h-4 w-4" />
                <span>Order confirmation has been sent to your email</span>
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button onClick={handleClose} className="w-full">
                Continue Shopping
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
