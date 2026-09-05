import type { MockKey } from "@/lib/showcase";
import PosMockup from "./PosMockup";
import KitchenMockup from "./KitchenMockup";
import InventoryMockup from "./InventoryMockup";
import QrOrderingMockup from "./QrOrderingMockup";
import StaffMockup from "./StaffMockup";
import AnalyticsMockup from "./AnalyticsMockup";

type MockupRendererProps = {
  mock: MockKey;
  className?: string;
};

/** Shared mockups for other module keys (billing uses POS, tables/orders/kitchen variants). */
export default function MockupRenderer({ mock, className }: MockupRendererProps) {
  switch (mock) {
    case "pos":
    case "billing":
      return <PosMockup className={className} />;
    case "qr":
      return <QrOrderingMockup className={className} />;
    case "kitchen":
    case "orders":
      return <KitchenMockup className={className} />;
    case "inventory":
      return <InventoryMockup className={className} />;
    case "staff":
      return <StaffMockup className={className} />;
    case "tables":
      return <KitchenMockup className={className} />;
    case "analytics":
      return <AnalyticsMockup className={className} />;
    default:
      return <PosMockup className={className} />;
  }
}
