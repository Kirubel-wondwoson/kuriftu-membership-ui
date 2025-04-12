import { ArrowDownRight, ArrowUpRight, Calendar, Coffee, Hotel, SpadeIcon as Spa } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ActivityHistoryTableProps {
  category?: "all" | "points" | "stays" | "dining" | "spa"
}

export function ActivityHistoryTable({ category = "all" }: ActivityHistoryTableProps) {
  const activities = [
    {
      id: 1,
      date: "Apr 10, 2025",
      description: "Stay at Kuriftu Bishoftu - Lakeside Villa",
      category: "stays",
      points: "+1,250",
      type: "earned",
      amount: "$750.00",
    },
    {
      id: 2,
      date: "Apr 3, 2025",
      description: "Spa Treatment - Deep Tissue Massage",
      category: "spa",
      points: "+350",
      type: "earned",
      amount: "$175.00",
    },
    {
      id: 3,
      date: "Apr 3, 2025",
      description: "Dinner at Lakeside Restaurant",
      category: "dining",
      points: "+180",
      type: "earned",
      amount: "$90.00",
    },
    {
      id: 4,
      date: "Mar 15, 2025",
      description: "Free Night Redemption",
      category: "points",
      points: "-2,500",
      type: "redeemed",
      amount: "$0.00",
    },
    {
      id: 5,
      date: "Mar 1, 2025",
      description: "Diamond Tier Monthly Bonus",
      category: "points",
      points: "+500",
      type: "earned",
      amount: "$0.00",
    },
    {
      id: 6,
      date: "Feb 22, 2025",
      description: "Stay at Kuriftu Entoto - Mountain Suite",
      category: "stays",
      points: "+2,100",
      type: "earned",
      amount: "$1,050.00",
    },
    {
      id: 7,
      date: "Feb 14, 2025",
      description: "Valentine's Day Special Dinner",
      category: "dining",
      points: "+420",
      type: "earned",
      amount: "$210.00",
    },
    {
      id: 8,
      date: "Feb 1, 2025",
      description: "Diamond Tier Monthly Bonus",
      category: "points",
      points: "+500",
      type: "earned",
      amount: "$0.00",
    },
    {
      id: 9,
      date: "Jan 20, 2025",
      description: "Spa Package Redemption",
      category: "spa",
      points: "-5,000",
      type: "redeemed",
      amount: "$0.00",
    },
    {
      id: 10,
      date: "Jan 5, 2025",
      description: "Referral Bonus - John Smith",
      category: "points",
      points: "+2,500",
      type: "earned",
      amount: "$0.00",
    },
  ]

  const filteredActivities = category === "all" ? activities : activities.filter((a) => a.category === category)

  const categoryIcons = {
    stays: <Hotel className="h-4 w-4" />,
    dining: <Coffee className="h-4 w-4" />,
    spa: <Spa className="h-4 w-4" />,
    points: <Calendar className="h-4 w-4" />,
  }

  const categoryColors = {
    stays: "bg-blue-100 text-blue-800 border-blue-200",
    dining: "bg-amber-100 text-amber-800 border-amber-200",
    spa: "bg-purple-100 text-purple-800 border-purple-200",
    points: "bg-emerald-100 text-emerald-800 border-emerald-200",
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            {category === "all" && <TableHead>Category</TableHead>}
            <TableHead>Points</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredActivities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell className="font-medium">{activity.date}</TableCell>
              <TableCell>{activity.description}</TableCell>
              {category === "all" && (
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`flex w-fit items-center gap-1 ${
                      categoryColors[activity.category as keyof typeof categoryColors]
                    }`}
                  >
                    {categoryIcons[activity.category as keyof typeof categoryIcons]}
                    {activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}
                  </Badge>
                </TableCell>
              )}
              <TableCell>
                <div className="flex items-center gap-1">
                  {activity.type === "earned" ? (
                    <>
                      <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-600">{activity.points}</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-4 w-4 text-amber-600" />
                      <span className="text-amber-600">{activity.points}</span>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">{activity.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
