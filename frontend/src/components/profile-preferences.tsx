"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function ProfilePreferences() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    specialOffers: true,
    newsletterSubscription: true,
    accountUpdates: true,
  })

  const handleToggle = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication Preferences</CardTitle>
        <CardDescription>Manage how we contact you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="emailNotifications" className="flex flex-col space-y-1">
            <span>Email Notifications</span>
            <span className="text-xs font-normal text-muted-foreground">Receive booking confirmations and updates</span>
          </Label>
          <Switch
            id="emailNotifications"
            checked={preferences.emailNotifications}
            onCheckedChange={() => handleToggle("emailNotifications")}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="smsNotifications" className="flex flex-col space-y-1">
            <span>SMS Notifications</span>
            <span className="text-xs font-normal text-muted-foreground">
              Receive text messages for important updates
            </span>
          </Label>
          <Switch
            id="smsNotifications"
            checked={preferences.smsNotifications}
            onCheckedChange={() => handleToggle("smsNotifications")}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="marketingEmails" className="flex flex-col space-y-1">
            <span>Marketing Emails</span>
            <span className="text-xs font-normal text-muted-foreground">Receive promotional offers and news</span>
          </Label>
          <Switch
            id="marketingEmails"
            checked={preferences.marketingEmails}
            onCheckedChange={() => handleToggle("marketingEmails")}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="specialOffers" className="flex flex-col space-y-1">
            <span>Special Offers</span>
            <span className="text-xs font-normal text-muted-foreground">
              Receive personalized offers based on preferences
            </span>
          </Label>
          <Switch
            id="specialOffers"
            checked={preferences.specialOffers}
            onCheckedChange={() => handleToggle("specialOffers")}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="newsletterSubscription" className="flex flex-col space-y-1">
            <span>Newsletter Subscription</span>
            <span className="text-xs font-normal text-muted-foreground">Receive our monthly newsletter</span>
          </Label>
          <Switch
            id="newsletterSubscription"
            checked={preferences.newsletterSubscription}
            onCheckedChange={() => handleToggle("newsletterSubscription")}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="accountUpdates" className="flex flex-col space-y-1">
            <span>Account Updates</span>
            <span className="text-xs font-normal text-muted-foreground">
              Receive notifications about account changes
            </span>
          </Label>
          <Switch
            id="accountUpdates"
            checked={preferences.accountUpdates}
            onCheckedChange={() => handleToggle("accountUpdates")}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}
