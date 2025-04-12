"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  serviceType: z.enum(["booking", "spending"]),
  days: z.number().optional(),
  amount: z.number().optional(),
})

export function AddPointsForm() {
  const [calculatedPoints, setCalculatedPoints] = useState<number | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      serviceType: "booking",
    },
  })

  const serviceType = form.watch("serviceType")
  const days = form.watch("days")
  const amount = form.watch("amount")

  // Calculate points based on service type and input
  const calculatePoints = () => {
    if (serviceType === "booking" && days) {
      // Example: 100 points per day
      return days * 100
    } else if (serviceType === "spending" && amount) {
      // Example: 1 point per 10 birr spent
      return Math.floor(amount / 10)
    }
    return null
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would save this to your database
    const points = calculatePoints()

    // Show success message
    setShowSuccess(true)

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)

    // Reset form
    form.reset({
      phoneNumber: "",
      serviceType: "booking",
      days: undefined,
      amount: undefined,
    })
    setCalculatedPoints(null)
  }

  return (
    <Form {...form}>
      {showSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Points added successfully</AlertTitle>
          <AlertDescription className="text-green-700">
            The points have been added to the customer's account.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+251 91 234 5678" {...field} />
              </FormControl>
              <FormDescription>Enter the customer's phone number to identify their account</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="booking">Booking</SelectItem>
                  <SelectItem value="spending">Spending</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Select whether points are for a booking or spending</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {serviceType === "booking" && (
          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Days Stayed</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Number of days"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value === "" ? undefined : Number.parseInt(e.target.value, 10)
                      field.onChange(value)
                    }}
                  />
                </FormControl>
                <FormDescription>Enter the number of days the customer stayed</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {serviceType === "spending" && (
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount Spent (Birr)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Amount in Birr"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value === "" ? undefined : Number.parseInt(e.target.value, 10)
                      field.onChange(value)
                    }}
                  />
                </FormControl>
                <FormDescription>Enter the amount the customer spent in Birr</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="rounded-md bg-kuriftu-light p-4 border">
          <div className="font-medium text-kuriftu-dark">Points Calculation</div>
          <div className="mt-2 text-sm text-kuriftu-dark/80">
            {serviceType === "booking" && days
              ? `${days} days × 100 points = ${days * 100} points`
              : serviceType === "spending" && amount
                ? `${amount} Birr ÷ 10 = ${Math.floor(amount / 10)} points`
                : "Enter details above to calculate points"}
          </div>
        </div>

        <Button type="submit">Add Points</Button>
      </form>
    </Form>
  )
}
