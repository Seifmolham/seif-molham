"use client"
import {
  Sidebar,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutDashboard, Users, Building2, MapIcon as Sitemap, GraduationCap, Target, BookOpen,
  Clock, Calendar, DollarSign, User, FileText, Mail, BarChart3, Settings, ChevronDown,
  Bell, LogOut, UserCog, UserCheck, Heart, Globe, Award, TrendingUp, Layers, MessageSquare,
  UserMinus, Briefcase,
} from "lucide-react"

type UserRole = "Employee" | "Manager" | "HR" | "Admin"

interface HRISSidebarProps {
  onNavigate: (module: string) => void
  activeModule: string
  userRole?: UserRole
}

const navigationItems = [
  {
    title: "Overview",
    items: [
      { title: "Organization Insights", icon: LayoutDashboard, key: "dashboard", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
      { title: "Company Feed", icon: Globe, key: "company-feed", badge: "3", roles: ["Employee", "Manager", "HR", "Admin"] },
    ],
  },
  {
    title: "Core HR",
    items: [
      { title: "Employees", icon: Users, key: "employees", badge: "1,247", roles: ["Manager", "HR", "Admin"] },
      { title: "Departments", icon: Building2, key: "departments", badge: null, roles: ["HR", "Admin"] },
      { title: "Org Chart", icon: Sitemap, key: "org-chart", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
    ],
  },
  {
    title: "Talent",
    items: [
      { title: "ATS / Recruiting", icon: UserCheck, key: "ats", badge: "45", roles: ["HR", "Admin"] },
      { title: "Onboarding", icon: GraduationCap, key: "onboarding", badge: "8", roles: ["Manager", "HR", "Admin"] },
      { title: "Offboarding", icon: UserMinus, key: "offboarding", badge: "2", roles: ["HR", "Admin"] },
      { title: "Career & Goals", icon: TrendingUp, key: "career", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
      { title: "Performance", icon: Target, key: "performance", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
      { title: "Learning", icon: BookOpen, key: "learning", badge: "12", roles: ["Employee", "Manager", "HR", "Admin"] },
    ],
  },
  {
    title: "Workforce",
    items: [
      { title: "Workforce Planning", icon: Layers, key: "workforce-planning", badge: null, roles: ["HR", "Admin"] },
      { title: "Attendance", icon: Clock, key: "attendance", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
      { title: "Leave", icon: Calendar, key: "leave", badge: "15", roles: ["Employee", "Manager", "HR", "Admin"] },
    ],
  },
  {
    title: "Compensation",
    items: [
      { title: "Payroll", icon: DollarSign, key: "payroll", badge: null, roles: ["HR", "Admin"] },
      { title: "Compensation & Equity", icon: Briefcase, key: "compensation", badge: null, roles: ["HR", "Admin"] },
      { title: "Benefits", icon: Heart, key: "benefits", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
    ],
  },
  {
    title: "People & Culture",
    items: [
      { title: "Surveys & Engagement", icon: MessageSquare, key: "surveys", badge: null, roles: ["HR", "Admin"] },
      { title: "Self Service", icon: User, key: "self-service", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
    ],
  },
  {
    title: "Documents & Reports",
    items: [
      { title: "Status Changes", icon: Award, key: "status-changes", badge: null, roles: ["Manager", "HR", "Admin"] },
      { title: "Workflow Maker", icon: MessageSquare, key: "workflow-maker", badge: null, roles: ["HR", "Admin"] },
      { title: "Documents", icon: FileText, key: "documents", badge: "45", roles: ["Employee", "Manager", "HR", "Admin"] },
      { title: "HR Letters", icon: Mail, key: "letters", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
      { title: "Analytics", icon: BarChart3, key: "analytics", badge: null, roles: ["HR", "Admin"] },
    ],
  },
  {
    title: "Recognition",
    items: [
      { title: "Recognition", icon: Award, key: "recognition", badge: null, roles: ["Employee", "Manager", "HR", "Admin"] },
    ],
  },
]

const roleBadgeColor: Record<UserRole, string> = {
  Admin: "bg-red-100 text-red-700",
  HR: "bg-blue-100 text-blue-700",
  Manager: "bg-amber-100 text-amber-700",
  Employee: "bg-green-100 text-green-700",
}

export function HRISSidebarContent({ onNavigate, activeModule, userRole = "Admin" }: HRISSidebarProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--sidebar-bg, #ffffff)", overflow: "hidden" }} className="dark:[--sidebar-bg:#0f172a]">
      {/* Header */}
      <div style={{ borderBottom: "1px solid #e2e8f0", padding: "16px", flexShrink: 0 }} className="dark:border-slate-700">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "#00C5B3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>V</span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontWeight: 600, fontSize: 14, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} className="text-slate-900 dark:text-slate-100">Valu HRIS</p>
            <p style={{ fontSize: 12, margin: 0 }} className="text-slate-500 dark:text-slate-400">People Platform</p>
          </div>
        </div>
        <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <span className={"text-xs font-semibold px-2.5 py-1 rounded-full " + roleBadgeColor[userRole]}>{userRole}</span>
          <span style={{ fontSize: 12 }} className="text-slate-400">Seif Molham</span>
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px 8px" }}>
        {navigationItems.map((group) => {
          const visible = group.items.filter((item) => item.roles.includes(userRole))
          if (visible.length === 0) return null
          return (
            <div key={group.title} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px 12px" }} className="text-slate-400 dark:text-slate-500">
                {group.title}
              </p>
              {visible.map((item) => {
                const Icon = item.icon
                const active = activeModule === item.key
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => onNavigate(item.key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      borderRadius: 8,
                      marginBottom: 2,
                      background: active ? "#00C5B3" : "transparent",
                      color: active ? "#ffffff" : undefined,
                      fontSize: 14,
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    className={active ? "" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}
                  >
                    <Icon style={{ width: 16, height: 16, marginRight: 12, flexShrink: 0 }} />
                    <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className={"ml-auto text-xs px-1.5 py-0.5 flex-shrink-0 " + (active ? "bg-white/20 text-white" : "bg-secondary text-white")}>
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #e2e8f0", padding: 16, flexShrink: 0 }} className="dark:border-slate-700">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              <Avatar className="w-8 h-8 mr-3">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="text-white text-sm" style={{ background: "#00C5B3" }}>SM</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">Seif Molham</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem><UserCog className="w-4 h-4 mr-2" />Profile Settings</DropdownMenuItem>
            <DropdownMenuItem><Bell className="w-4 h-4 mr-2" />Notifications</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onNavigate("settings")}><Settings className="w-4 h-4 mr-2" />System Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600"><LogOut className="w-4 h-4 mr-2" />Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export function HRISSidebar({ onNavigate, activeModule, userRole = "Admin" }: HRISSidebarProps) {
  return (
    <Sidebar className="border-r-0 bg-white dark:bg-slate-900">
      <HRISSidebarContent onNavigate={onNavigate} activeModule={activeModule} userRole={userRole} />
      <SidebarRail />
    </Sidebar>
  )
}
