import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function MembershipComparison() {
  const tiers = [
    { name: "Golden", color: "amber" },
    { name: "Platinum", color: "slate" },
    { name: "Diamond", color: "purple" },
  ]

  const benefits = [
    {
      name: "Accommodation Discount",
      golden: "10%",
      platinum: "15%",
      diamond: "25%",
    },
    {
      name: "Restaurant Discount",
      golden: "5%",
      platinum: "10%",
      diamond: "20%",
    },
    {
      name: "Early Check-in",
      golden: "When available",
      platinum: "Priority",
      diamond: "Guaranteed",
    },
    {
      name: "Late Check-out",
      golden: false,
      platinum: "2 PM",
      diamond: "4 PM",
    },
    {
      name: "Room Upgrade",
      golden: false,
      platinum: "When available",
      diamond: "Guaranteed",
    },
    {
      name: "Welcome Amenity",
      golden: true,
      platinum: true,
      diamond: "Premium",
    },
    {
      name: "Spa Treatment",
      golden: false,
      platinum: "30 min",
      diamond: "60 min",
    },
    {
      name: "Airport Transfer",
      golden: false,
      platinum: false,
      diamond: true,
    },
    {
      name: "Dedicated Concierge",
      golden: false,
      platinum: true,
      diamond: "Personal Assistant",
    },
    {
      name: "Exclusive Events",
      golden: "Select events",
      platinum: "All events",
      diamond: "Private events",
    },
    {
      name: "Minibar",
      golden: "Paid",
      platinum: "Paid",
      diamond: "Complimentary",
    },
    {
      name: "Points per $1 Spent",
      golden: "10 points",
      platinum: "15 points",
      diamond: "25 points",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left border-b"></th>
            {tiers.map((tier) => (
              <th
                key={tier.name}
                className={cn(
                  "p-4 text-center border-b",
                  tier.color === "amber"
                    ? "text-amber-800"
                    : tier.color === "slate"
                      ? "text-slate-800"
                      : "text-purple-800",
                )}
              >
                <span className="font-serif text-xl font-bold">{tier.name}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-stone-50" : "bg-white"}>
              <td className="p-4 border-b font-medium">{benefit.name}</td>
              <td className="p-4 text-center border-b">
                {benefit.golden === true ? (
                  <Check className="h-5 w-5 mx-auto text-amber-600" />
                ) : benefit.golden === false ? (
                  <X className="h-5 w-5 mx-auto text-stone-300" />
                ) : (
                  <span className="text-amber-700">{benefit.golden}</span>
                )}
              </td>
              <td className="p-4 text-center border-b">
                {benefit.platinum === true ? (
                  <Check className="h-5 w-5 mx-auto text-slate-600" />
                ) : benefit.platinum === false ? (
                  <X className="h-5 w-5 mx-auto text-stone-300" />
                ) : (
                  <span className="text-slate-700">{benefit.platinum}</span>
                )}
              </td>
              <td className="p-4 text-center border-b">
                {benefit.diamond === true ? (
                  <Check className="h-5 w-5 mx-auto text-purple-600" />
                ) : benefit.diamond === false ? (
                  <X className="h-5 w-5 mx-auto text-stone-300" />
                ) : (
                  <span className="text-purple-700">{benefit.diamond}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
