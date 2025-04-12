import { Gift } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RewardHistory() {
  const history = [
    {
      id: "RD-001",
      date: "Mar 15, 2025",
      reward: "Free Night Stay",
      points: "2,500",
      status: "redeemed",
      expiryDate: "Jun 15, 2025",
    },
    {
      id: "RD-002",
      date: "Jan 20, 2025",
      reward: "Spa Package",
      points: "5,000",
      status: "redeemed",
      expiryDate: "Apr 20, 2025",
    },
    {
      id: "RD-003",
      date: "Dec 10, 2024",
      reward: "Airport Transfer",
      points: "2,000",
      status: "expired",
      expiryDate: "Mar 10, 2025",
    },
    {
      id: "RD-004",
      date: "Nov 5, 2024",
      reward: "Fine Dining Experience",
      points: "7,500",
      status: "used",
      expiryDate: "Feb 5, 2025",
    },
    {
      id: "RD-005",
      date: "Oct 15, 2024",
      reward: "Kuriftu Luxury Bathrobe",
      points: "3,500",
      status: "shipped",
      expiryDate: "N/A",
    },
  ]

  const statusColors = {
    redeemed: "bg-blue-100 text-blue-800 border-blue-200",
    expired: "bg-red-100 text-red-800 border-red-200",
    used: "bg-emerald-100 text-emerald-800 border-emerald-200",
    shipped: "bg-purple-100 text-purple-800 border-purple-200",
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Reward</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Expiry Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {history.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <Gift className="h-4 w-4 text-primary" />
                  {item.reward}
                </div>
              </TableCell>
              <TableCell>{item.points}</TableCell>
              <TableCell>
                <Badge variant="outline" className={statusColors[item.status as keyof typeof statusColors]}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>{item.expiryDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
