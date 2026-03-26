import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Users, Target, CheckSquare, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Dummy data lists
const LEADS = [
  { id: 1, name: "Lead 1 — Acme Corp", status: "New" },
  { id: 2, name: "Lead 2 — Globex Inc", status: "In Progress" },
  { id: 3, name: "Lead 3 — Initech", status: "Qualified" },
  { id: 4, name: "Lead 4 — Umbrella Co", status: "New" },
];

const TASKS = [
  { id: 1, title: "Task A — Follow up with client", priority: "High" },
  { id: 2, title: "Task B — Prepare Q4 report", priority: "Medium" },
  { id: 3, title: "Task C — Update CRM records", priority: "Low" },
  { id: 4, title: "Task D — Schedule demo call", priority: "High" },
];

const USERS_LIST = [
  { id: 1, name: "User X — Alice Johnson", role: "Admin" },
  { id: 2, name: "User Y — Bob Williams", role: "Editor" },
  { id: 3, name: "User Z — Carol Davis", role: "Viewer" },
];

const priorityColor: Record<string, string> = {
  High: "bg-destructive/15 text-destructive",
  Medium: "bg-warning/15 text-warning",
  Low: "bg-success/15 text-success",
};

const statusColor: Record<string, string> = {
  New: "bg-primary/15 text-primary",
  "In Progress": "bg-warning/15 text-warning",
  Qualified: "bg-success/15 text-success",
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">User Access System</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container py-8">
        {/* Welcome */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, {user?.name} 👋
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here's an overview of your system data.
          </p>
        </div>

        {/* Stats cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Total Leads", value: LEADS.length, icon: Target, color: "text-primary" },
            { label: "Active Tasks", value: TASKS.length, icon: CheckSquare, color: "text-warning" },
            { label: "Team Members", value: USERS_LIST.length, icon: Users, color: "text-success" },
          ].map((stat) => (
            <Card key={stat.label} className="animate-fade-in">
              <CardContent className="flex items-center gap-4 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Data sections */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Leads */}
          <Card className="animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Target className="h-4 w-4 text-primary" />
                Leads
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {LEADS.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                  <span className="text-sm text-foreground">{lead.name}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusColor[lead.status]}`}>
                    {lead.status}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tasks */}
          <Card className="animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <CheckSquare className="h-4 w-4 text-warning" />
                Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {TASKS.map((task) => (
                <div key={task.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                  <span className="text-sm text-foreground">{task.title}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${priorityColor[task.priority]}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Users */}
          <Card className="animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-4 w-4 text-success" />
                Users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {USERS_LIST.map((u) => (
                <div key={u.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
                  <span className="text-sm text-foreground">{u.name}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                    {u.role}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
