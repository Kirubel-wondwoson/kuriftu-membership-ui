import { AdminLayout } from "@/components/admin-layout"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Download, UserPlus } from "lucide-react"

// Mock data - in a real app, this would come from your database
const customers = [
  { id: 1, name: "Abebe Kebede", phone: "+251 91 234 5678", points: 1250, lastActivity: "2023-04-01" },
  { id: 2, name: "Tigist Haile", phone: "+251 92 345 6789", points: 3450, lastActivity: "2023-04-05" },
  { id: 3, name: "Dawit Mekonnen", phone: "+251 93 456 7890", points: 750, lastActivity: "2023-03-28" },
  { id: 4, name: "Sara Tesfaye", phone: "+251 94 567 8901", points: 2100, lastActivity: "2023-04-10" },
  { id: 5, name: "Yonas Girma", phone: "+251 95 678 9012", points: 1800, lastActivity: "2023-04-08" },
  { id: 6, name: "Hiwot Tadesse", phone: "+251 96 789 0123", points: 900, lastActivity: "2023-03-25" },
  { id: 7, name: "Bereket Solomon", phone: "+251 97 890 1234", points: 3200, lastActivity: "2023-04-12" },
  { id: 8, name: "Meron Alemu", phone: "+251 98 901 2345", points: 1500, lastActivity: "2023-04-03" },
]

export default function CustomersPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-display font-bold text-kuriftu-dark">Customers</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search customers..." className="w-[250px] pl-8" />
            </div>
            <Button variant="outline" className="gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="gap-1">
              <UserPlus className="h-4 w-4" />
              Add Customer
            </Button>
          </div>
        </div>

        <div className="rounded-md border shadow-md overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Phone Number</TableHead>
                <TableHead className="text-right font-semibold">Points</TableHead>
                <TableHead className="font-semibold">Last Activity</TableHead>
                <TableHead className="text-right font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell className="text-right font-semibold text-kuriftu-primary">
                    {customer.points.toLocaleString()}
                  </TableCell>
                  <TableCell>{new Date(customer.lastActivity).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
            <span className="font-medium">100</span> customers
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
