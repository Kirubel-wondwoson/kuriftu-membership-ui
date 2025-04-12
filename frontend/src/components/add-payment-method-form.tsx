"use client"

import type React from "react"

import { useState } from "react"
import { CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function AddPaymentMethodForm() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    setAsDefault: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="cardNumber">Card Number</Label>
        <div className="relative">
          <Input
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            className="pl-10"
          />
          <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cardholderName">Cardholder Name</Label>
        <Input
          id="cardholderName"
          name="cardholderName"
          placeholder="John Doe"
          value={formData.cardholderName}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiryMonth">Expiry Month</Label>
          <Input
            id="expiryMonth"
            name="expiryMonth"
            placeholder="MM"
            value={formData.expiryMonth}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="expiryYear">Expiry Year</Label>
          <Input
            id="expiryYear"
            name="expiryYear"
            placeholder="YY"
            value={formData.expiryYear}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input id="cvv" name="cvv" type="password" placeholder="123" value={formData.cvv} onChange={handleChange} />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="setAsDefault"
          checked={formData.setAsDefault}
          onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, setAsDefault: checked as boolean }))}
        />
        <label
          htmlFor="setAsDefault"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Set as default payment method
        </label>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Add Payment Method</Button>
      </div>
    </form>
  )
}
