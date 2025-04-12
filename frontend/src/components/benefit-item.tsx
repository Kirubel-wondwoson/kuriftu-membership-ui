import { Hotel, Utensils, SpadeIcon as Spa, Gift, Calendar, Star } from "lucide-react"
import Image from "next/image"

interface BenefitItemProps {
  icon: "hotel" | "utensils" | "spa" | "gift" | "calendar" | "star"
  title: string
  description: string
  image?: string
}

export function BenefitItem({ icon, title, description, image }: BenefitItemProps) {
  const icons = {
    hotel: Hotel,
    utensils: Utensils,
    spa: Spa,
    gift: Gift,
    calendar: Calendar,
    star: Star,
  }

  const Icon = icons[icon]

  return (
    <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
      {image && (
        <div className="w-full h-48 mb-6 relative rounded-lg overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-amber-700" />
      </div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
