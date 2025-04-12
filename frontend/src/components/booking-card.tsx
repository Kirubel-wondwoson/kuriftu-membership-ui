import Image from "next/image"
import { Calendar, Check, Clock, MapPin, Users, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface BookingCardProps {
  id: string
  image: string
  title: string
  location: string
  checkIn: string
  checkOut: string
  guests: number
  status: "confirmed" | "pending" | "cancelled" | "completed"
  price: string
  amenities: string[]
}

export function BookingCard({
  id,
  image,
  title,
  location,
  checkIn,
  checkOut,
  guests,
  status,
  price,
  amenities,
}: BookingCardProps) {
  const statusColors = {
    confirmed:
      "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800",
    pending:
      "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
    cancelled: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    completed: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
  }

  const statusIcons = {
    confirmed: <Check className="mr-1 h-3 w-3" />,
    pending: <Clock className="mr-1 h-3 w-3" />,
    cancelled: <X className="mr-1 h-3 w-3" />,
    completed: <Check className="mr-1 h-3 w-3" />,
  }

  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-[250px_1fr]">
        <div className="relative h-48 md:h-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className={statusColors[status]}>
              {statusIcons[status]}
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Booking ID</div>
              <div className="font-medium">{id}</div>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Check-in</div>
              <div className="flex items-center gap-1 font-medium">
                <Calendar className="h-4 w-4 text-primary" />
                {checkIn}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Check-out</div>
              <div className="flex items-center gap-1 font-medium">
                <Calendar className="h-4 w-4 text-primary" />
                {checkOut}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Guests</div>
              <div className="flex items-center gap-1 font-medium">
                <Users className="h-4 w-4 text-primary" />
                {guests} {guests === 1 ? "Guest" : "Guests"}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-muted-foreground">Amenities</div>
            <div className="flex flex-wrap gap-2 mt-1">
              {amenities.map((amenity, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Total Price</div>
              <div className="text-xl font-bold text-primary">{price}</div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              {status === "confirmed" && (
                <>
                  <Button variant="outline">Modify</Button>
                  <Button>View Details</Button>
                </>
              )}
              {status === "pending" && (
                <>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </>
              )}
              {status === "completed" && <Button>Book Again</Button>}
              {status === "cancelled" && <Button>Book Again</Button>}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
