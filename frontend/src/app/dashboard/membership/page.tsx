import { Award, Calendar, CreditCard, Gift, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { MembershipCard } from "@/components/membership-card"
import { MembershipBenefits } from "@/components/membership-benefits"
import { MembershipHistory } from "@/components/membership-history"
import { MembershipUpgradeOptions } from "@/components/membership-upgrade-options"

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] py-8">
        <DashboardNav />
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-tight">Membership</h1>
            <p className="text-muted-foreground">
              Manage your membership status, view benefits, and explore upgrade options.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 dark:from-purple-950 dark:to-purple-900 dark:border-purple-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-purple-900 dark:text-purple-100">Current Tier</CardTitle>
                <CardDescription>Diamond Member</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-purple-700 dark:text-purple-300" />
                  <div className="text-xl font-bold text-purple-700 dark:text-purple-300">Diamond</div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Renewal in 45 days</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-purple-200 dark:bg-purple-800">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 rounded-full" />
                  </Progress>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 dark:from-amber-950 dark:to-amber-900 dark:border-amber-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-900 dark:text-amber-100">Member Since</CardTitle>
                <CardDescription>Membership duration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-amber-700 dark:text-amber-300" />
                  <div className="text-xl font-bold text-amber-700 dark:text-amber-300">June 2021</div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">4 years</span> of loyalty with Kuriftu Resort
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 dark:from-emerald-950 dark:to-emerald-900 dark:border-emerald-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-emerald-900 dark:text-emerald-100">Next Payment</CardTitle>
                <CardDescription>Annual membership fee</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                  <div className="text-xl font-bold text-emerald-700 dark:text-emerald-300">$750.00</div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Due on <span className="font-medium">June 15, 2025</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Digital Membership Card</CardTitle>
              <CardDescription>Present this card when checking in or dining at our resort</CardDescription>
            </CardHeader>
            <CardContent>
              <MembershipCard
                name="Sarah Johnson"
                memberId="DM-78912345"
                tier="Diamond"
                since="2021"
                expiryDate="12/2025"
              />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="gap-2">
                <Gift className="h-4 w-4" />
                Send as Gift
              </Button>
              <Button className="ml-auto gap-2">
                <Info className="h-4 w-4" />
                View Full Details
              </Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="history">Membership History</TabsTrigger>
              <TabsTrigger value="upgrade">Upgrade Options</TabsTrigger>
            </TabsList>
            <TabsContent value="benefits" className="mt-6">
              <MembershipBenefits />
            </TabsContent>
            <TabsContent value="history" className="mt-6">
              <MembershipHistory />
            </TabsContent>
            <TabsContent value="upgrade" className="mt-6">
              <MembershipUpgradeOptions />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
