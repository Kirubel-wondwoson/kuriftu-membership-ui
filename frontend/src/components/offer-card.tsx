import Image from "next/image"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface OfferCardProps {
  image: string
  title: string
  description: string
  expiry: string
  discount: string
}

export function OfferCard({ image, title, description, expiry, discount }: OfferCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <div className="bg-primary text-primary-foreground font-bold px-3 py-1 rounded-md">{discount}</div>
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{expiry}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Offer</Button>
      </CardFooter>
    </Card>
  )
}
