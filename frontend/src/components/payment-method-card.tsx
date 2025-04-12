import { Check, CreditCard, MoreVertical, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface PaymentMethodCardProps {
  type: "visa" | "mastercard" | "amex" | "discover"
  lastFour: string
  expiryMonth: string
  expiryYear: string
  name: string
  isDefault: boolean
}

export function PaymentMethodCard({
  type,
  lastFour,
  expiryMonth,
  expiryYear,
  name,
  isDefault,
}: PaymentMethodCardProps) {
  const cardColors = {
    visa: "bg-blue-50 border-blue-200",
    mastercard: "bg-orange-50 border-orange-200",
    amex: "bg-green-50 border-green-200",
    discover: "bg-purple-50 border-purple-200",
  }

  const cardNames = {
    visa: "Visa",
    mastercard: "Mastercard",
    amex: "American Express",
    discover: "Discover",
  }

  return (
    <Card className={`relative overflow-hidden ${cardColors[type]}`}>
      {isDefault && (
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <Check className="mr-1 h-3 w-3" />
            Default
          </Badge>
        </div>
      )}
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <span className="font-medium">{cardNames[type]}</span>
            </div>
            <div className="text-2xl font-bold tracking-widest">•••• {lastFour}</div>
            <div className="text-sm text-muted-foreground">
              Expires {expiryMonth}/{expiryYear}
            </div>
            <div className="text-sm">{name}</div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Card Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {!isDefault && <DropdownMenuItem>Set as Default</DropdownMenuItem>}
              <DropdownMenuItem>Edit Details</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Remove Card
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 px-6">
        <Button variant="ghost" size="sm">
          Edit
        </Button>
        {!isDefault && (
          <Button variant="ghost" size="sm">
            Set as Default
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
