"use client"

import { useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function AppearanceSettings() {
  const [theme, setTheme] = useState("system")
  const [fontSize, setFontSize] = useState(16)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [reduceTransparency, setReduceTransparency] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>Customize the appearance of the app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-3 gap-4">
            <div>
              <RadioGroupItem value="light" id="theme-light" className="sr-only" />
              <Label
                htmlFor="theme-light"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <Sun className="mb-3 h-6 w-6" />
                Light
              </Label>
            </div>
            <div>
              <RadioGroupItem value="dark" id="theme-dark" className="sr-only" />
              <Label
                htmlFor="theme-dark"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <Moon className="mb-3 h-6 w-6" />
                Dark
              </Label>
            </div>
            <div>
              <RadioGroupItem value="system" id="theme-system" className="sr-only" />
              <Label
                htmlFor="theme-system"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
              >
                <Monitor className="mb-3 h-6 w-6" />
                System
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Font Size</CardTitle>
          <CardDescription>Adjust the font size of the app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="font-size">Size</Label>
              <span className="text-sm text-muted-foreground">{fontSize}px</span>
            </div>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Small</span>
              <span>Medium</span>
              <span>Large</span>
            </div>
          </div>
          <div className="rounded-md border p-4">
            <p style={{ fontSize: `${fontSize}px` }}>This is a preview of the font size.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>Customize accessibility settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="reduce-motion">Reduce Motion</Label>
              <p className="text-sm text-muted-foreground">Reduce the motion of animations in the app.</p>
            </div>
            <Switch id="reduce-motion" checked={reduceMotion} onCheckedChange={setReduceMotion} />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="reduce-transparency">Reduce Transparency</Label>
              <p className="text-sm text-muted-foreground">Reduce the transparency effects in the app.</p>
            </div>
            <Switch id="reduce-transparency" checked={reduceTransparency} onCheckedChange={setReduceTransparency} />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="high-contrast">High Contrast</Label>
              <p className="text-sm text-muted-foreground">Increase the contrast between elements.</p>
            </div>
            <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Accessibility Settings</Button>
        </CardFooter>
      </Card>
    </>
  )
}
