import Image from "next/image"
import { Calendar, Check, Clock, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ReservationCardProps {
  image: string
  title: string
  dates: string
  status: "Confirmed" | "Pending" | "Cancelled"
  guests: number
  amenities: string[]
}

export function ReservationCard({ image, title, dates, status, guests, amenities }: ReservationCardProps) {
  const statusColors = {
    Confirmed:
      "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800",
    Pending:
      "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
    Cancelled: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className={statusColors[status]}>
            {status === "Confirmed" && <Check className="mr-1 h-3 w-3" />}
            {status === "Pending" && <Clock className="mr-1 h-3 w-3" />}
            {status}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{dates}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span>
            {guests} {guests === 1 ? "Guest" : "Guests"}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {amenities.map((amenity, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Details</Button>
        <Button>Modify</Button>
      </CardFooter>
    </Card>
  )
}
