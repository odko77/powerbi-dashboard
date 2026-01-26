import { LogOut } from "lucide-react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

/**
    @param {} props
*/
const Header = () => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        if (!isLoggedIn) {
            router.push("/")
        } else {
            setIsLoading(false)
        }
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn")
        router.push("/")
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <p className="text-muted-foreground">Ачааллаж байна...</p>
            </div>
        )
    }

    return (
        <header className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                </div>
                <h1 className="text-lg font-semibold text-foreground">Dashboard</h1>
            </div>
            <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="gap-2 text-foreground border-border hover:bg-muted bg-transparent"
            >
                <LogOut className="h-4 w-4" />
                Гарах
            </Button>
        </header>
    )
}
export default Header
