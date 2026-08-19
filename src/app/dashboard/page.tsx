"use client";

import { RequireAuth } from "@/components/RequireAuth";
import Dashboard from "@/pages/Dashboard";

export default function DashboardRoute() {
  return (
    <RequireAuth>
      <Dashboard />
    </RequireAuth>
  );
}
