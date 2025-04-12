import Image from "next/image"
import { AdminLayout } from "@/components/admin-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, Trash } from "lucide-react"

// Mock data - in a real app, this would come from your database
const services = [
  {
    id: 1,
    name: "Spa Treatment",
    points: 1500,
    description: "Enjoy a relaxing spa treatment at our resort.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
    category: "Spa & Wellness",
    available: true,
  },
  {
    id: 2,
    name: "Dinner for Two",
    points: 2000,
    description: "A romantic dinner for two at our lakeside restaurant.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    category: "Dining",
    available: true,
  },
  {
    id: 3,
    name: "Boat Tour",
    points: 1200,
    description: "A guided boat tour around the lake.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop",
    category: "Activities",
    available: false,
  },
  {
    id: 4,
    name: "Weekend Stay",
    points: 5000,
    description: "A weekend stay in one of our luxury rooms.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    category: "Accommodation",
    available: true,
  },
  {
    id: 5,
    name: "Wine Tasting",
    points: 800,
    description: "Sample our selection of fine wines with a professional sommelier.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
    category: "Dining",
    available: true,
  },
  {
    id: 6,
    name: "Cooking Class",
    points: 1800,
    description: "Learn to cook Ethiopian cuisine with our master chef.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    category: "Activities",
    available: true,
  },
]

export default function ServicesPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-display font-bold text-kuriftu-dark">Redeemable Services</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search services..." className="w-[250px] pl-8" />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden shadow-md">
              <div className="aspect-video w-full overflow-hidden relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={400}
                  height={225}
                  className="h-full w-full object-cover"
                />
                {!service.available && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-bold px-3 py-1 bg-red-500 rounded-md">Not Available</span>
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-white/90 text-kuriftu-dark px-2 py-1 rounded-md text-xs font-semibold">
                  {service.category}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-kuriftu-dark">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="ml-2 rounded-full bg-kuriftu-primary px-2 py-1 text-xs font-medium text-white">
                    {service.points.toLocaleString()} points
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-4 pt-0">
                <Button variant="outline" size="sm">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-2 py-4">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </AdminLayout>
  )
}
