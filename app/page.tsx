"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Lock, Mail, AlertCircle } from "lucide-react"

const VALID_EMAIL = "admin@company.com"
const VALID_PASSWORD = "password123"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      localStorage.setItem("isLoggedIn", "true")
      router.push("/dashboard")
    } else {
      setError("И-мэйл эсвэл нууц үг буруу байна")
    }
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg border-border">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
          </div>
          <CardTitle className="text-2xl font-semibold text-foreground">
            Dashboard
          </CardTitle>
          <p className="text-muted-foreground text-sm mt-1">
            Системд нэвтрэхийн тулд нэвтрэх мэдээллээ оруулна уу
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="bg-destructive/10 border-destructive/30">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">И-мэйл хаяг</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-card border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Нууц үг</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-card border-border"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? "Нэвтэрч байна..." : "Нэвтрэх"}
            </Button>
          </form>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="text-center">
              {new Date().getFullYear()} он
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
