import { Bell, Shield, Sun, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { AccountSettings } from "@/components/account-settings"
import { NotificationSettings } from "@/components/notification-settings"
import { SecuritySettings } from "@/components/security-settings"
import { AppearanceSettings } from "@/components/appearance-settings"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <DashboardHeader />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr] py-8">
        <DashboardNav />
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences.</p>
          </div>

          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="account" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Account</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span>Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Security</span>
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                <span>Appearance</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-6 space-y-6">
              <AccountSettings />
            </TabsContent>
            <TabsContent value="notifications" className="mt-6 space-y-6">
              <NotificationSettings />
            </TabsContent>
            <TabsContent value="security" className="mt-6 space-y-6">
              <SecuritySettings />
            </TabsContent>
            <TabsContent value="appearance" className="mt-6 space-y-6">
              <AppearanceSettings />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
