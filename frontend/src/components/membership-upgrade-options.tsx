import { Award, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function MembershipUpgradeOptions() {
  const tiers = [
    {
      name: "Golden",
      price: "$100",
      color: "amber",
      description: "Perfect for first-time or occasional visitors seeking enhanced experiences.",
      benefits: [
        "10% discount on accommodations",
        "Early check-in when available",
        "Welcome amenity upon arrival",
        "Member-only promotions",
        "Birthday special offer",
        "5% discount at resort restaurants",
      ],
      pointsRequired: "10,000",
      currentPoints: "12,450",
      canAfford: true,
    },
    {
      name: "Platinum",
      price: "$350",
      color: "slate",
      description: "Designed for regular guests who appreciate premium service and exclusive access.",
      benefits: [
        "15% discount on accommodations",
        "Guaranteed late checkout (2 PM)",
        "Complimentary 30-min spa treatment",
        "Room upgrade when available",
        "Priority restaurant reservations",
        "Exclusive access to member events",
        "Dedicated concierge service",
        "10% discount at resort restaurants",
      ],
      pointsRequired: "25,000",
      currentPoints: "12,450",
      canAfford: false,
    },
    {
      name: "Diamond",
      price: "$750",
      color: "purple",
      description: "The ultimate luxury experience for our most valued guests.",
      benefits: [
        "25% discount on accommodations",
        "Guaranteed room upgrade",
        "Complimentary airport transfers",
        "Personalized in-room amenities",
        "Dedicated personal assistant",
        "Exclusive access to private events",
        "Complimentary 60-min spa treatment",
        "20% discount at resort restaurants",
        "Complimentary minibar",
      ],
      pointsRequired: "50,000",
      currentPoints: "12,450",
      canAfford: false,
      current: true,
    },
  ]

  const colorClasses = {
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      heading: "text-amber-800",
      button: "bg-amber-600 hover:bg-amber-700 text-white",
      icon: "text-amber-600",
      progress: "bg-amber-200",
      progressFill: "bg-amber-600",
    },
    slate: {
      bg: "bg-slate-50",
      border: "border-slate-200",
      heading: "text-slate-800",
      button: "bg-slate-700 hover:bg-slate-800 text-white",
      icon: "text-slate-600",
      progress: "bg-slate-200",
      progressFill: "bg-slate-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      heading: "text-purple-800",
      button: "bg-purple-700 hover:bg-purple-800 text-white",
      icon: "text-purple-600",
      progress: "bg-purple-200",
      progressFill: "bg-purple-600",
    },
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => {
          const currentPointsNum = Number.parseInt(tier.currentPoints.replace(/,/g, ""))
          const pointsRequiredNum = Number.parseInt(tier.pointsRequired.replace(/,/g, ""))
          const progressPercentage = Math.min(Math.round((currentPointsNum / pointsRequiredNum) * 100), 100)

          return (
            <Card
              key={tier.name}
              className={`overflow-hidden transition-all ${colorClasses[tier.color as keyof typeof colorClasses].bg} ${
                colorClasses[tier.color as keyof typeof colorClasses].border
              } ${tier.current ? "ring-2 ring-primary" : ""}`}
            >
              {tier.current && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                  Current Tier
                </div>
              )}
              <CardHeader className={`pb-2 ${colorClasses[tier.color as keyof typeof colorClasses].heading}`}>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <CardTitle className="font-serif text-xl">{tier.name}</CardTitle>
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-2xl font-bold">
                  {tier.price}
                  <span className="text-sm font-normal text-muted-foreground"> / year</span>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>
                      {tier.currentPoints} / {tier.pointsRequired} points
                    </span>
                    <span className="font-medium">{progressPercentage}%</span>
                  </div>
                  <Progress
                    value={progressPercentage}
                    className={`h-2 ${colorClasses[tier.color as keyof typeof colorClasses].progress}`}
                  >
                    <div
                      className={`h-full rounded-full ${
                        colorClasses[tier.color as keyof typeof colorClasses].progressFill
                      }`}
                    />
                  </Progress>
                </div>

                <ul className="space-y-2">
                  {tier.benefits.slice(0, 4).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 ${colorClasses[tier.color as keyof typeof colorClasses].icon}`}
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                  {tier.benefits.length > 4 && (
                    <li className="text-sm text-muted-foreground">+{tier.benefits.length - 4} more benefits</li>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                {tier.current ? (
                  <Button className="w-full" variant="outline" disabled>
                    Current Tier
                  </Button>
                ) : (
                  <>
                    <Button className={`w-full ${colorClasses[tier.color as keyof typeof colorClasses].button}`}>
                      {tier.canAfford ? "Upgrade with Points" : "Purchase Upgrade"}
                    </Button>
                  </>
                )}
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upgrade Information</CardTitle>
          <CardDescription>Important details about membership upgrades</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Points Upgrade</h3>
            <p className="text-sm text-muted-foreground">
              You can use your accumulated points to upgrade your membership tier. Points used for upgrades will be
              deducted from your total balance. Upgrades are effective immediately and valid for one year from the
              upgrade date.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Direct Purchase</h3>
            <p className="text-sm text-muted-foreground">
              You can purchase a membership upgrade directly. The cost will be prorated based on your current
              membership&apos;s remaining time. Your new membership will expire one year from your original membership start date.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Downgrade Policy</h3>
            <p className="text-sm text-muted-foreground">
              You can downgrade your membership at renewal time. No refunds are provided for downgrades before the
              renewal date. All benefits of your current tier remain active until your membership expires.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
