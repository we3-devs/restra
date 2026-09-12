import { healthResponse } from "@/lib/health-response";

export const dynamic = "force-dynamic";

export function GET() {
  return healthResponse();
}
