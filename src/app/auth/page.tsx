"use client";

import AuthPage from "@/pages/Auth";

export default function AuthRoute() {
  return <AuthPage redirectAfterAuth="/dashboard" />;
}
