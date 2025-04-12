import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminLayout } from "@/components/admin-layout"
import { AddPointsForm } from "@/components/add-points-form"
import { AddServiceForm } from "@/components/add-service-form"
import { Users, Gift, CreditCard } from "lucide-react"

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-display font-bold text-kuriftu-dark">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="shadow-md">
            <CardHeader className="pb-2 flex flex-row items-center space-x-4">
              <div className="p-2 bg-blue-50 rounded-full">
                <Users className="h-5 w-5 text-kuriftu-primary" />
              </div>
              <div>
                <CardTitle className="text-kuriftu-primary">Total Customers</CardTitle>
                <CardDescription>Active membership accounts</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,248</div>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="pb-2 flex flex-row items-center space-x-4">
              <div className="p-2 bg-gray-50 rounded-full">
                <CreditCard className="h-5 w-5 text-kuriftu-secondary" />
              </div>
              <div>
                <CardTitle className="text-kuriftu-secondary">Total Points</CardTitle>
                <CardDescription>Points in circulation</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3,586,492</div>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader className="pb-2 flex flex-row items-center space-x-4">
              <div className="p-2 bg-orange-50 rounded-full">
                <Gift className="h-5 w-5 text-kuriftu-accent" />
              </div>
              <div>
                <CardTitle className="text-kuriftu-accent">Redemptions</CardTitle>
                <CardDescription>Services redeemed this month</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">156</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="add-points" className="mt-6">
          <TabsList>
            <TabsTrigger value="add-points">Add Points</TabsTrigger>
            <TabsTrigger value="add-service">Add Service</TabsTrigger>
          </TabsList>
          <TabsContent value="add-points" className="mt-4">
            <Card className="shadow-md">
              <CardHeader className="border-b">
                <CardTitle className="text-kuriftu-dark">Add Points to Customer</CardTitle>
                <CardDescription>Add loyalty points based on bookings or spending</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <AddPointsForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="add-service" className="mt-4">
            <Card className="shadow-md">
              <CardHeader className="border-b">
                <CardTitle className="text-kuriftu-dark">Add Redeemable Service</CardTitle>
                <CardDescription>Create a new service that customers can redeem with their points</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <AddServiceForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
