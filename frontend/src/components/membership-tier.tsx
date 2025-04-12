import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface MembershipTierProps {
  name: string
  price: string
  color: "gold" | "platinum" | "diamond"
  description: string
  benefits: string[]
  featured?: boolean
}

export function MembershipTier({ name, price, color, description, benefits, featured = false }: MembershipTierProps) {
  const colorClasses = {
    gold: {
      bg: "bg-gold-50",
      border: "border-gold-200",
      heading: "text-primary",
      button: "bg-primary hover:bg-primary/90 text-white",
      icon: "text-primary",
      card: "hover:shadow-gold-200/50",
    },
    platinum: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      heading: "text-slate-800",
      button: "bg-slate-700 hover:bg-slate-800 text-white",
      icon: "text-slate-600",
      card: "hover:shadow-slate-200/50",
    },
    diamond: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      heading: "text-purple-800",
      button: "bg-purple-700 hover:bg-purple-800 text-white",
      icon: "text-purple-600",
      card: "hover:shadow-purple-200/50",
    },
  }

  return (
    <div
      className={cn(
        "rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-lg relative",
        colorClasses[color].bg,
        colorClasses[color].border,
        colorClasses[color].card,
        featured && "scale-105 shadow-md",
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
          Most Popular
        </div>
      )}
      <div className={cn("font-serif text-2xl font-bold mb-2", colorClasses[color].heading)}>{name}</div>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-muted-foreground"> / year</span>
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className={cn("h-5 w-5 mt-0.5", colorClasses[color].icon)} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Button className={cn("w-full", colorClasses[color].button)}>Select {name}</Button>
    </div>
  )
}
