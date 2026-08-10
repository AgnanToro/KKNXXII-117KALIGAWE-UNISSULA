import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

type Props = {
  to?: string;
  label?: string;
};

export default function BackButton({
  to = "/program-kerja",
  label = "Kembali ke Program Kerja",
}: Props) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full border border-primary/40 bg-card px-5 py-3 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/50"
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}
