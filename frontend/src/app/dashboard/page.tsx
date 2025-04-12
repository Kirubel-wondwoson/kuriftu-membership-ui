import { Award, Gift, Hotel, Ticket, TrendingUp, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MembershipCard } from "@/components/membership-card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { ReservationCard } from "@/components/reservation-card"
import { ActivityItem } from "@/components/activity-item"
import { OfferCard } from "@/components/offer-card"
import { PointsChart } from "@/components/points-chart"

export default function DashboardPage() {
  // This is the existing dashboard page we created earlier
  // I'm adding these imports to fix the missing imports in the points page
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] py-8">
        <DashboardNav />
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-tight">Welcome back, Sarah</h1>
            <p className="text-muted-foreground">
              Manage your membership, track your points, and explore exclusive benefits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 dark:from-amber-950 dark:to-amber-900 dark:border-amber-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-amber-900 dark:text-amber-100">Total Points</CardTitle>
                <CardDescription>Your current points balance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-amber-700 dark:text-amber-300">12,450</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <TrendingUp className="inline h-4 w-4 mr-1 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">+450</span> points this month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 dark:from-purple-950 dark:to-purple-900 dark:border-purple-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-purple-900 dark:text-purple-100">Membership Tier</CardTitle>
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

            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 dark:from-emerald-950 dark:to-emerald-900 dark:border-emerald-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-emerald-900 dark:text-emerald-100">Next Reward</CardTitle>
                <CardDescription>Points needed for next reward</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Gift className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                  <div className="text-xl font-bold text-emerald-700 dark:text-emerald-300">Free Night Stay</div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>2,550 more points needed</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-emerald-200 dark:bg-emerald-800">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600 rounded-full" />
                  </Progress>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="col-span-full lg:col-span-2">
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
            </Card>

            <Card className="col-span-full lg:col-span-1">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used services</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-auto flex flex-col items-center justify-center py-4 px-2 gap-2 border-dashed hover:border-primary hover:bg-primary/5"
                >
                  <Hotel className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Book Stay</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto flex flex-col items-center justify-center py-4 px-2 gap-2 border-dashed hover:border-primary hover:bg-primary/5"
                >
                  <Utensils className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Reserve Dining</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto flex flex-col items-center justify-center py-4 px-2 gap-2 border-dashed hover:border-primary hover:bg-primary/5"
                >
                  <Gift className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Redeem Points</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto flex flex-col items-center justify-center py-4 px-2 gap-2 border-dashed hover:border-primary hover:bg-primary/5"
                >
                  <Ticket className="h-6 w-6 text-primary" />
                  <span className="text-sm font-medium">Special Offers</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming Stays</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="offers">Exclusive Offers</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <ReservationCard
                  image="/lakeside-villa.jpg"
                  title="Lakeside Villa"
                  dates="May 15 - May 18, 2025"
                  status="Confirmed"
                  guests={2}
                  amenities={["Lake View", "Private Pool", "Breakfast Included"]}
                />
                <ReservationCard
                  image="/mountain-suite.jpg"
                  title="Mountain View Suite"
                  dates="July 10 - July 15, 2025"
                  status="Pending"
                  guests={4}
                  amenities={["Mountain View", "Spa Access", "All-Inclusive"]}
                />
              </div>
            </TabsContent>
            <TabsContent value="activity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Points Activity</CardTitle>
                  <CardDescription>Your recent points transactions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ActivityItem title="Stay at Kuriftu Bishoftu" date="April 2, 2025" points="+1,250" type="earned" />
                  <ActivityItem title="Spa Treatment" date="April 3, 2025" points="+350" type="earned" />
                  <ActivityItem title="Restaurant Dining" date="April 3, 2025" points="+180" type="earned" />
                  <ActivityItem title="Free Night Redemption" date="March 15, 2025" points="-2,500" type="redeemed" />
                  <ActivityItem title="Tier Bonus" date="March 1, 2025" points="+500" type="earned" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Activity
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="offers" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <OfferCard
                  image="/spa-offer.jpg"
                  title="Exclusive Spa Package"
                  description="Enjoy a complimentary 90-minute spa treatment when you book a 3-night stay."
                  expiry="Valid until June 30, 2025"
                  discount="30% OFF"
                />
                <OfferCard
                  image="/dining-offer.jpg"
                  title="Fine Dining Experience"
                  description="Special tasting menu with wine pairing at our signature restaurant."
                  expiry="Valid until May 15, 2025"
                  discount="20% OFF"
                />
              </div>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Points History</CardTitle>
              <CardDescription>Your points earning and redemption over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <PointsChart />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
