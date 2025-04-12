"use client"

import { useState } from "react"
import { Eye, EyeOff, Key, Lock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function SecuritySettings() {
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginNotifications: true,
    loginVerification: true,
    passwordReset: true,
  })

  const handleToggle = (key: keyof typeof securitySettings) => {
    setSecuritySettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password to keep your account secure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <div className="relative">
              <Input id="current-password" type={showPassword ? "text" : "password"} className="pr-10" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <div className="relative">
              <Input id="new-password" type={showNewPassword ? "text" : "password"} className="pr-10" />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
              >
                {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showNewPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <div className="relative">
              <Input id="confirm-password" type={showConfirmPassword ? "text" : "password"} className="pr-10" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Update Password</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">
                Require a verification code when logging in from an unknown device.
              </p>
            </div>
            <Switch
              id="two-factor"
              checked={securitySettings.twoFactorAuth}
              onCheckedChange={() => handleToggle("twoFactorAuth")}
            />
          </div>
          {securitySettings.twoFactorAuth && (
            <div className="rounded-lg border p-4 mt-4">
              <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Two-Factor Authentication is enabled
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                You will be asked for a verification code when logging in from an unknown device or browser.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Key className="mr-2 h-4 w-4" />
                  Setup Authenticator App
                </Button>
                <Button variant="outline" size="sm">
                  <Lock className="mr-2 h-4 w-4" />
                  View Recovery Codes
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Manage your security preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="login-notifications">Login Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications when someone logs into your account.
              </p>
            </div>
            <Switch
              id="login-notifications"
              checked={securitySettings.loginNotifications}
              onCheckedChange={() => handleToggle("loginNotifications")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="login-verification">Login Verification</Label>
              <p className="text-sm text-muted-foreground">
                Require verification when logging in from an unknown device.
              </p>
            </div>
            <Switch
              id="login-verification"
              checked={securitySettings.loginVerification}
              onCheckedChange={() => handleToggle("loginVerification")}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="password-reset">Password Reset Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications when a password reset is requested.</p>
            </div>
            <Switch
              id="password-reset"
              checked={securitySettings.passwordReset}
              onCheckedChange={() => handleToggle("passwordReset")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Security Settings</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>Manage your active sessions and devices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium">Chrome on Windows</h3>
                <p className="text-xs text-muted-foreground mt-1">New York, United States • Current session</p>
              </div>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                This Device
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium">Safari on iPhone</h3>
                <p className="text-xs text-muted-foreground mt-1">New York, United States • Last active: 2 hours ago</p>
              </div>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                Sign Out
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium">Firefox on MacBook</h3>
                <p className="text-xs text-muted-foreground mt-1">Boston, United States • Last active: 5 days ago</p>
              </div>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                Sign Out
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="destructive">Sign Out All Devices</Button>
        </CardFooter>
      </Card>
    </>
  )
}
