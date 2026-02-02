"use client"
import Header from "@/components/Header"

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="p-6">
        <iframe
          title="EXIM_Data"
          width="100%"
          height="1060"
          src="https://app.powerbi.com/view?r=eyJrIjoiOWNkZmYxOTQtNTRkMi00YWJjLWJjZmUtNDYzYTZmNDYzODNhIiwidCI6IjJjZmJmMjFjLTJlOWMtNDVkMy1iMDc5LTIxNjVkOWJlZTJmZSIsImMiOjEwfQ%3D%3D"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </main>
    </div>
  )
}
