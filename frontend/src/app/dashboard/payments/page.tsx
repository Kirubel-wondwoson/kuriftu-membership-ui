import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { PaymentMethodCard } from "@/components/payment-method-card"
import { PaymentHistory } from "@/components/payment-history"
import { AddPaymentMethodForm } from "@/components/add-payment-method-form"

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] py-8">
        <DashboardNav />
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-tight">Payment Methods</h1>
            <p className="text-muted-foreground">Manage your payment methods and view your payment history.</p>
          </div>

          <Tabs defaultValue="methods" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="methods">Payment Methods</TabsTrigger>
              <TabsTrigger value="history">Payment History</TabsTrigger>
            </TabsList>
            <TabsContent value="methods" className="mt-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Your Payment Methods</h2>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <PaymentMethodCard
                  type="visa"
                  lastFour="4242"
                  expiryMonth="12"
                  expiryYear="2026"
                  name="Sarah Johnson"
                  isDefault={true}
                />
                <PaymentMethodCard
                  type="mastercard"
                  lastFour="5555"
                  expiryMonth="09"
                  expiryYear="2025"
                  name="Sarah Johnson"
                  isDefault={false}
                />
                <PaymentMethodCard
                  type="amex"
                  lastFour="9876"
                  expiryMonth="04"
                  expiryYear="2027"
                  name="Sarah Johnson"
                  isDefault={false}
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Add New Payment Method</CardTitle>
                  <CardDescription>Add a new credit or debit card</CardDescription>
                </CardHeader>
                <CardContent>
                  <AddPaymentMethodForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                  <CardDescription>Your recent payments and transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentHistory />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
