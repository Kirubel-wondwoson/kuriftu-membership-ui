import { ArrowDownRight, ArrowUpRight } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PointsHistoryTable() {
  const transactions = [
    {
      id: 1,
      date: "Apr 10, 2025",
      description: "Stay at Kuriftu Bishoftu - Lakeside Villa",
      points: "+1,250",
      type: "earned",
      category: "Stay",
      balance: "12,450",
    },
    {
      id: 2,
      date: "Apr 3, 2025",
      description: "Spa Treatment - Deep Tissue Massage",
      points: "+350",
      type: "earned",
      category: "Spa",
      balance: "11,200",
    },
    {
      id: 3,
      date: "Apr 3, 2025",
      description: "Dinner at Lakeside Restaurant",
      points: "+180",
      type: "earned",
      category: "Dining",
      balance: "10,850",
    },
    {
      id: 4,
      date: "Mar 15, 2025",
      description: "Free Night Redemption",
      points: "-2,500",
      type: "redeemed",
      category: "Redemption",
      balance: "10,670",
    },
    {
      id: 5,
      date: "Mar 1, 2025",
      description: "Diamond Tier Monthly Bonus",
      points: "+500",
      type: "earned",
      category: "Bonus",
      balance: "13,170",
    },
    {
      id: 6,
      date: "Feb 22, 2025",
      description: "Stay at Kuriftu Entoto - Mountain Suite",
      points: "+2,100",
      type: "earned",
      category: "Stay",
      balance: "12,670",
    },
    {
      id: 7,
      date: "Feb 14, 2025",
      description: "Valentine's Day Special Dinner",
      points: "+420",
      type: "earned",
      category: "Dining",
      balance: "10,570",
    },
    {
      id: 8,
      date: "Feb 1, 2025",
      description: "Diamond Tier Monthly Bonus",
      points: "+500",
      type: "earned",
      category: "Bonus",
      balance: "10,150",
    },
    {
      id: 9,
      date: "Jan 20, 2025",
      description: "Spa Package Redemption",
      points: "-5,000",
      type: "redeemed",
      category: "Redemption",
      balance: "9,650",
    },
    {
      id: 10,
      date: "Jan 5, 2025",
      description: "Referral Bonus - John Smith",
      points: "+2,500",
      type: "earned",
      category: "Referral",
      balance: "14,650",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Points</TableHead>
            <TableHead className="text-right">Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  {transaction.type === "earned" ? (
                    <>
                      <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                      <span className="text-emerald-600">{transaction.points}</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownRight className="h-4 w-4 text-amber-600" />
                      <span className="text-amber-600">{transaction.points}</span>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">{transaction.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
