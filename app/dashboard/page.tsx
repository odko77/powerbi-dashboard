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
          src="https://app.powerbi.com/view?r=eyJrIjoiMzI4NTczNzYtOWFmYy00MTkxLTk1YWItY2M2OTMzNTk3Y2M3IiwidCI6IjRhZmZhYzQzLTk4NDItNGNkYS04NzVkLTg4NTYzOWU4ZmU3MSIsImMiOjEwfQ%3D%3D"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </main>
    </div>
  )
}
