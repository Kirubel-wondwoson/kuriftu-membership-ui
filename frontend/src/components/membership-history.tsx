import { Award, CreditCard } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function MembershipHistory() {
  const history = [
    {
      date: "June 15, 2024",
      action: "Membership Renewal",
      tier: "Diamond",
      amount: "$750.00",
      paymentMethod: "Visa ending in 4242",
      status: "Upcoming",
    },
    {
      date: "June 15, 2023",
      action: "Membership Renewal",
      tier: "Diamond",
      amount: "$750.00",
      paymentMethod: "Visa ending in 4242",
      status: "Completed",
    },
    {
      date: "June 15, 2022",
      action: "Membership Upgrade",
      tier: "Diamond",
      amount: "$750.00",
      paymentMethod: "Visa ending in 4242",
      status: "Completed",
    },
    {
      date: "June 15, 2021",
      action: "Membership Upgrade",
      tier: "Platinum",
      amount: "$350.00",
      paymentMethod: "Visa ending in 4242",
      status: "Completed",
    },
    {
      date: "June 15, 2020",
      action: "New Membership",
      tier: "Golden",
      amount: "$100.00",
      paymentMethod: "Visa ending in 4242",
      status: "Completed",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Membership History</CardTitle>
        <CardDescription>Your membership changes and renewals</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Tier</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.date}</TableCell>
                <TableCell>{item.action}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-primary" />
                    {item.tier}
                  </div>
                </TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                    {item.paymentMethod}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={
                      item.status === "Upcoming" ? "text-amber-600 font-medium" : "text-emerald-600 font-medium"
                    }
                  >
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
