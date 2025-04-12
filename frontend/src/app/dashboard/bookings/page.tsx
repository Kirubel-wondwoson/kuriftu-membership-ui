import { Calendar, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { BookingCard } from "@/components/booking-card"
import { DateRangePicker } from "@/components/date-range-picker"
import { BookingFilters } from "@/components/booking-filters"

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] py-8">
        <DashboardNav />
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-tight">My Bookings</h1>
            <p className="text-muted-foreground">View and manage your reservations at Kuriftu Resort.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full md:w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search bookings..." className="pl-8" />
              </div>
              <DateRangePicker />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <BookingFilters />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Button>
                <Calendar className="mr-2 h-4 w-4" />
                New Booking
              </Button>
            </div>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-6">
              <div className="grid gap-6">
                <BookingCard
                  id="BK-78912345"
                  image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  title="Lakeside Villa"
                  location="Kuriftu Resort Bishoftu"
                  checkIn="May 15, 2025"
                  checkOut="May 18, 2025"
                  guests={2}
                  status="confirmed"
                  price="$750"
                  amenities={["Lake View", "Private Pool", "Breakfast Included"]}
                />
                <BookingCard
                  id="BK-78912346"
                  image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  title="Mountain View Suite"
                  location="Kuriftu Resort Entoto"
                  checkIn="July 10, 2025"
                  checkOut="July 15, 2025"
                  guests={4}
                  status="pending"
                  price="$1,200"
                  amenities={["Mountain View", "Spa Access", "All-Inclusive"]}
                />
                <BookingCard
                  id="BK-78912347"
                  image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  title="Garden Room"
                  location="Kuriftu Resort Bishoftu"
                  checkIn="August 22, 2025"
                  checkOut="August 25, 2025"
                  guests={2}
                  status="confirmed"
                  price="$450"
                  amenities={["Garden View", "Breakfast Included"]}
                />
              </div>
            </TabsContent>
            <TabsContent value="past" className="mt-6">
              <div className="grid gap-6">
                <BookingCard
                  id="BK-78912340"
                  image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  title="Lakeside Villa"
                  location="Kuriftu Resort Bishoftu"
                  checkIn="February 10, 2025"
                  checkOut="February 15, 2025"
                  guests={2}
                  status="completed"
                  price="$750"
                  amenities={["Lake View", "Private Pool", "Breakfast Included"]}
                />
                <BookingCard
                  id="BK-78912341"
                  image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  title="Garden Room"
                  location="Kuriftu Resort Bishoftu"
                  checkIn="January 5, 2025"
                  checkOut="January 8, 2025"
                  guests={2}
                  status="completed"
                  price="$450"
                  amenities={["Garden View", "Breakfast Included"]}
                />
                <BookingCard
                  id="BK-78912342"
                  image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  title="Mountain View Suite"
                  location="Kuriftu Resort Entoto"
                  checkIn="December 20, 2024"
                  checkOut="December 27, 2024"
                  guests={4}
                  status="completed"
                  price="$1,200"
                  amenities={["Mountain View", "Spa Access", "All-Inclusive"]}
                />
              </div>
            </TabsContent>
            <TabsContent value="cancelled" className="mt-6">
              <div className="grid gap-6">
                <BookingCard
                  id="BK-78912343"
                  image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  title="Garden Room"
                  location="Kuriftu Resort Bishoftu"
                  checkIn="March 15, 2025"
                  checkOut="March 18, 2025"
                  guests={2}
                  status="cancelled"
                  price="$450"
                  amenities={["Garden View", "Breakfast Included"]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
