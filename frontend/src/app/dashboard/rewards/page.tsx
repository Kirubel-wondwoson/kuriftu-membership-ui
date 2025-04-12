import { Gift, Search, Filter, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { RewardCard } from "@/components/reward-card"
import { RewardCategories } from "@/components/reward-categories"
import { RewardHistory } from "@/components/reward-history"

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] py-8">
        <DashboardNav />
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-tight">Redeem Rewards</h1>
            <p className="text-muted-foreground">Browse and redeem exclusive rewards with your points.</p>
          </div>

          <Card className="bg-gradient-to-r from-primary/20 to-primary/5 border-primary/20">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/20 p-3">
                  <Gift className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">12,450 Available Points</h2>
                  <p className="text-muted-foreground">Use your points to redeem exclusive rewards</p>
                </div>
              </div>
              <Button className="w-full md:w-auto gap-2 group">
                View All Rewards
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search rewards..." className="pl-8" />
              </div>
              <RewardCategories />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button>Sort by: Featured</Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All Rewards</TabsTrigger>
              <TabsTrigger value="stays">Stays</TabsTrigger>
              <TabsTrigger value="experiences">Experiences</TabsTrigger>
              <TabsTrigger value="history">Redemption History</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <RewardCard
                  image="/spa-product.jpg"
                  title="Luxury Spa Package"
                  description="90-minute signature massage with aromatherapy and facial treatment."
                  pointsRequired="5,000"
                  currentPoints="12,450"
                  category="experiences"
                />
                <RewardCard
                  image="/dining-product.jpg"
                  title="Fine Dining Experience"
                  description="5-course tasting menu with wine pairing for two at our signature restaurant."
                  pointsRequired="7,500"
                  currentPoints="12,450"
                  category="experiences"
                />
                <RewardCard
                  image="/excursion-product.jpg"
                  title="Private Lake Excursion"
                  description="3-hour private boat tour of Lake Bishoftu with champagne and snacks."
                  pointsRequired="10,000"
                  currentPoints="12,450"
                  category="experiences"
                />
                <RewardCard
                  image="/room-product.jpg"
                  title="Free Night Stay"
                  description="One complimentary night in a Deluxe Room with breakfast included."
                  pointsRequired="15,000"
                  currentPoints="12,450"
                  category="stays"
                />
                <RewardCard
                  image="/merchandise-product.jpg"
                  title="Kuriftu Luxury Bathrobe"
                  description="Premium cotton bathrobe with Kuriftu Resort logo embroidery."
                  pointsRequired="3,500"
                  currentPoints="12,450"
                  category="merchandise"
                />
                <RewardCard
                  image="/transfer-product.jpg"
                  title="Airport Transfer"
                  description="Luxury vehicle airport transfer service (one-way) with refreshments."
                  pointsRequired="2,000"
                  currentPoints="12,450"
                  category="services"
                />
              </div>
            </TabsContent>
            <TabsContent value="stays" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <RewardCard
                  image="/room-product.jpg"
                  title="Free Night Stay"
                  description="One complimentary night in a Deluxe Room with breakfast included."
                  pointsRequired="15,000"
                  currentPoints="12,450"
                  category="stays"
                />
                <RewardCard
                  image="/suite-upgrade.jpg"
                  title="Suite Upgrade"
                  description="Upgrade your existing reservation to a luxury suite."
                  pointsRequired="8,000"
                  currentPoints="12,450"
                  category="stays"
                />
                <RewardCard
                  image="/late-checkout.jpg"
                  title="Late Checkout"
                  description="Extend your checkout time until 4 PM on your departure day."
                  pointsRequired="2,500"
                  currentPoints="12,450"
                  category="stays"
                />
              </div>
            </TabsContent>
            <TabsContent value="experiences" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <RewardCard
                  image="/spa-product.jpg"
                  title="Luxury Spa Package"
                  description="90-minute signature massage with aromatherapy and facial treatment."
                  pointsRequired="5,000"
                  currentPoints="12,450"
                  category="experiences"
                />
                <RewardCard
                  image="/dining-product.jpg"
                  title="Fine Dining Experience"
                  description="5-course tasting menu with wine pairing for two at our signature restaurant."
                  pointsRequired="7,500"
                  currentPoints="12,450"
                  category="experiences"
                />
                <RewardCard
                  image="/excursion-product.jpg"
                  title="Private Lake Excursion"
                  description="3-hour private boat tour of Lake Bishoftu with champagne and snacks."
                  pointsRequired="10,000"
                  currentPoints="12,450"
                  category="experiences"
                />
              </div>
            </TabsContent>
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Redemption History</CardTitle>
                  <CardDescription>Your past reward redemptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <RewardHistory />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
