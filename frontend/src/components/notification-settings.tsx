"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

type NotificationType = {
  marketing: boolean
  social: boolean
  security: boolean
  promotions: boolean
  updates: boolean
  newsletter: boolean
}

type NotificationSettings = {
  email: NotificationType
  push: NotificationType
  sms: NotificationType
}

export function NotificationSettings() {
  const [notifications, setNotifications] = useState<NotificationSettings>({
    email: {
      marketing: true,
      social: true,
      security: true,
      promotions: true,
      updates: true,
      newsletter: true,
    },
    push: {
      marketing: false,
      social: true,
      security: true,
      promotions: false,
      updates: true,
      newsletter: false,
    },
    sms: {
      marketing: false,
      social: false,
      security: true,
      promotions: false,
      updates: false,
      newsletter: false,
    },
  })

  const handleToggle = (channel: keyof NotificationSettings, key: keyof NotificationType) => {
    setNotifications((prev) => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [key]: !prev[channel][key],
      },
    }))
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Manage your email notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-marketing">Marketing</Label>
              <p className="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
            </div>
            <Switch
              id="email-marketing"
              checked={notifications.email.marketing}
              onCheckedChange={() => handleToggle("email", "marketing")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-social">Social</Label>
              <p className="text-sm text-muted-foreground">Receive emails for friend requests, follows, and more.</p>
            </div>
            <Switch
              id="email-social"
              checked={notifications.email.social}
              onCheckedChange={() => handleToggle("email", "social")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-security">Security</Label>
              <p className="text-sm text-muted-foreground">Receive emails about your account activity and security.</p>
            </div>
            <Switch
              id="email-security"
              checked={notifications.email.security}
              onCheckedChange={() => handleToggle("email", "security")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-promotions">Promotions</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about promotions, discounts, and special offers.
              </p>
            </div>
            <Switch
              id="email-promotions"
              checked={notifications.email.promotions}
              onCheckedChange={() => handleToggle("email", "promotions")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-updates">Updates</Label>
              <p className="text-sm text-muted-foreground">Receive emails about your account updates and changes.</p>
            </div>
            <Switch
              id="email-updates"
              checked={notifications.email.updates}
              onCheckedChange={() => handleToggle("email", "updates")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-newsletter">Newsletter</Label>
              <p className="text-sm text-muted-foreground">
                Receive our monthly newsletter with the latest news and updates.
              </p>
            </div>
            <Switch
              id="email-newsletter"
              checked={notifications.email.newsletter}
              onCheckedChange={() => handleToggle("email", "newsletter")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Email Preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Manage your push notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-marketing">Marketing</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications about new products, features, and more.
              </p>
            </div>
            <Switch
              id="push-marketing"
              checked={notifications.push.marketing}
              onCheckedChange={() => handleToggle("push", "marketing")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-social">Social</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications for friend requests, follows, and more.
              </p>
            </div>
            <Switch
              id="push-social"
              checked={notifications.push.social}
              onCheckedChange={() => handleToggle("push", "social")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-security">Security</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications about your account activity and security.
              </p>
            </div>
            <Switch
              id="push-security"
              checked={notifications.push.security}
              onCheckedChange={() => handleToggle("push", "security")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-promotions">Promotions</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications about promotions, discounts, and special offers.
              </p>
            </div>
            <Switch
              id="push-promotions"
              checked={notifications.push.promotions}
              onCheckedChange={() => handleToggle("push", "promotions")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="push-updates">Updates</Label>
              <p className="text-sm text-muted-foreground">
                Receive push notifications about your account updates and changes.
              </p>
            </div>
            <Switch
              id="push-updates"
              checked={notifications.push.updates}
              onCheckedChange={() => handleToggle("push", "updates")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Push Notification Preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SMS Notifications</CardTitle>
          <CardDescription>Manage your SMS notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-security">Security</Label>
              <p className="text-sm text-muted-foreground">
                Receive SMS messages about your account activity and security.
              </p>
            </div>
            <Switch
              id="sms-security"
              checked={notifications.sms.security}
              onCheckedChange={() => handleToggle("sms", "security")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-updates">Updates</Label>
              <p className="text-sm text-muted-foreground">
                Receive SMS messages about your account updates and changes.
              </p>
            </div>
            <Switch
              id="sms-updates"
              checked={notifications.sms.updates}
              onCheckedChange={() => handleToggle("sms", "updates")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-promotions">Promotions</Label>
              <p className="text-sm text-muted-foreground">
                Receive SMS messages about promotions, discounts, and special offers.
              </p>
            </div>
            <Switch
              id="sms-promotions"
              checked={notifications.sms.promotions}
              onCheckedChange={() => handleToggle("sms", "promotions")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save SMS Preferences</Button>
        </CardFooter>
      </Card>
    </>
  )
}
