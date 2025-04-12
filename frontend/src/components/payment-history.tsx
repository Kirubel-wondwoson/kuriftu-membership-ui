import { CreditCard, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function PaymentHistory() {
  const payments = [
    {
      id: "INV-001",
      date: "Apr 15, 2025",
      description: "Diamond Membership Renewal",
      amount: "$750.00",
      status: "upcoming",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "INV-002",
      date: "Apr 10, 2025",
      description: "Lakeside Villa Stay",
      amount: "$750.00",
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "INV-003",
      date: "Apr 3, 2025",
      description: "Spa Treatment",
      amount: "$175.00",
      status: "completed",
      paymentMethod: "Mastercard ending in 5555",
    },
    {
      id: "INV-004",
      date: "Apr 3, 2025",
      description: "Restaurant Dining",
      amount: "$90.00",
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "INV-005",
      date: "Feb 22, 2025",
      description: "Mountain Suite Stay",
      amount: "$1,050.00",
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
    {
      id: "INV-006",
      date: "Feb 14, 2025",
      description: "Valentine's Day Dinner",
      amount: "$210.00",
      status: "completed",
      paymentMethod: "Amex ending in 9876",
    },
    {
      id: "INV-007",
      date: "Jan 20, 2025",
      description: "Spa Package",
      amount: "$0.00 (Points)",
      status: "redeemed",
      paymentMethod: "Points Redemption",
    },
    {
      id: "INV-008",
      date: "Jun 15, 2024",
      description: "Diamond Membership Renewal",
      amount: "$750.00",
      status: "completed",
      paymentMethod: "Visa ending in 4242",
    },
  ]

  const statusColors = {
    completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
    upcoming: "bg-amber-100 text-amber-800 border-amber-200",
    redeemed: "bg-blue-100 text-blue-800 border-blue-200",
    failed: "bg-red-100 text-red-800 border-red-200",
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.id}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.description}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {payment.status !== "redeemed" ? (
                    <>
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      {payment.paymentMethod}
                    </>
                  ) : (
                    payment.paymentMethod
                  )}
                </div>
              </TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>
                <Badge variant="outline" className={statusColors[payment.status as keyof typeof statusColors]}>
                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {payment.status === "completed" && (
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download Invoice</span>
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
