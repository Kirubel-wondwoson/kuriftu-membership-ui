import Image from "next/image"

interface TestimonialCardProps {
  name: string
  tier: string
  image: string
  quote: string
}

export function TestimonialCard({ name, tier, image, quote }: TestimonialCardProps) {
  return (
    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover h-[60px] w-[60px]"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{tier}</p>
        </div>
      </div>
      <blockquote className="text-muted-foreground italic">&quot;{quote}&quot;</blockquote>
    </div>
  )
}
