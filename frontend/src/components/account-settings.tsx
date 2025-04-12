"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function AccountSettings() {
  const [accountData, setAccountData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
    language: "English",
    timezone: "Eastern Time (ET)",
    currency: "USD",
    publicProfile: true,
    showPoints: true,
    showMembership: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAccountData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleToggle = (key: keyof typeof accountData) => {
    setAccountData((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" value={accountData.firstName} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" value={accountData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                value={accountData.email}
                onChange={handleChange}
                className="pl-10"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={accountData.phone}
                onChange={handleChange}
                className="pl-10"
              />
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address Information</CardTitle>
          <CardDescription>Update your address details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <Input
                id="address"
                name="address"
                value={accountData.address}
                onChange={handleChange}
                className="pl-10"
              />
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" value={accountData.city} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" name="state" value={accountData.state} onChange={handleChange} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" name="postalCode" value={accountData.postalCode} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" name="country" value={accountData.country} onChange={handleChange} />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Input id="language" name="language" value={accountData.language} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" name="timezone" value={accountData.timezone} onChange={handleChange} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Input id="currency" name="currency" value={accountData.currency} onChange={handleChange} />
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="publicProfile">Public Profile</Label>
                <p className="text-sm text-muted-foreground">Allow other members to see your profile</p>
              </div>
              <Switch
                id="publicProfile"
                checked={accountData.publicProfile}
                onCheckedChange={() => handleToggle("publicProfile")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="showPoints">Show Points</Label>
                <p className="text-sm text-muted-foreground">Display your points balance on your profile</p>
              </div>
              <Switch
                id="showPoints"
                checked={accountData.showPoints}
                onCheckedChange={() => handleToggle("showPoints")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="showMembership">Show Membership</Label>
                <p className="text-sm text-muted-foreground">Display your membership tier on your profile</p>
              </div>
              <Switch
                id="showMembership"
                checked={accountData.showMembership}
                onCheckedChange={() => handleToggle("showMembership")}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Preferences</Button>
        </CardFooter>
      </Card>
    </>
  )
}
