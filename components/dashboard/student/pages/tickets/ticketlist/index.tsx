"use client"

import { useState } from "react"
import type { Ticket } from "../types"
import { Input } from "@/components/dashboard/student/ui/input"
import { Button } from "@/components/dashboard/student/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/dashboard/student/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/dashboard/student/ui/select"
import { FilterModal } from "../ticketfilter/index"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"



const SAMPLE_TICKETS: Ticket[] = [
  {
    id: "#htr-325-87756",
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Admin Department",
    issue: "Login Issue",
    subject: "Login Details",
    message: "Unable to login with provided credentials.",
    lastUpdated: "2025/11/23 19:16",
    status: "Open",
  },
  {
    id: "#htr-325-87757",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    department: "Support Department",
    issue: "Payment Issue",
    subject: "Payment Failed",
    message: "Payment failed during checkout.",
    lastUpdated: "2025/11/22 18:00",
    status: "Closed",
  },
  {
    id: "#htr-325-87758",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    department: "Technical Department",
    issue: "Bug Report",
    subject: "App Crash",
    message: "The app crashes when I try to open it.",
    lastUpdated: "2025/11/21 17:30",
    status: "In Progress",
  },
  {
    id: "#htr-325-87759",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    department: "Sales Department",
    issue: "Inquiry",
    subject: "Product Inquiry",
    message: "I have a question about your product.",
    lastUpdated: "2025/11/20 16:45",
    status: "Open",
  },
]

export function TicketList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("latest")
  const router = useRouter();

  const sortedTickets = [...SAMPLE_TICKETS].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
    }
    return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
  })

  const filteredTickets = sortedTickets.filter(
    (ticket) =>
      ticket.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const gotoDetails = () => {
    router.push("/student/ticketdetails");
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">My tickets</h2>
        <p className="text-sm text-muted-foreground">View and update tickets</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Select defaultValue={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
          <FilterModal />
        </div>
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by Ticket ID, Department, Body..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket ID</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>View Tickets</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>{ticket.department}</TableCell>
                <TableCell>{ticket.lastUpdated}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    {ticket.status}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={gotoDetails}>
                    View Tickets
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

