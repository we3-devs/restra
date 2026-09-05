import {
  Armchair,
  Boxes,
  ChefHat,
  ClipboardList,
  LayoutGrid,
  Monitor,
  QrCode,
  Receipt,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const featureIconMap: Record<string, LucideIcon> = {
  pos: Monitor,
  billing: Receipt,
  "order-management": ClipboardList,
  inventory: Boxes,
  "kitchen-display-system": ChefHat,
  "table-management": Armchair,
  "staff-permissions": ShieldCheck,
  "qr-ordering": QrCode,
  analytics: TrendingUp,
};

type FeatureIconProps = {
  slug: string;
  className?: string;
};

export function FeatureIcon({ slug, className }: FeatureIconProps) {
  const Icon = featureIconMap[slug] ?? LayoutGrid;
  return <Icon className={className ?? "h-5 w-5"} />;
}
