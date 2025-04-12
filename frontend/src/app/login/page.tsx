import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Login | Kuriftu Resort",
  description: "Login to your Kuriftu Resort membership account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:block relative">
        <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" alt="Kuriftu Resort" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="font-serif text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-lg max-w-md mx-auto">
              Sign in to access your exclusive membership benefits and manage your Kuriftu experience.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 md:p-12">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <Image src="https://www.kurifturesorts.com/_nuxt/img/logo.e2cce34.svg" alt="Kuriftu Resort Logo" width={40} height={40} className="h-10 w-auto" />
            
          </div>
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me
              </Label>
            </div>
            <Button className="w-full" asChild>
              <Link href="/dashboard">Sign In</Link>
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
