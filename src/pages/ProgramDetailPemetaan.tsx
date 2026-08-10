import ProgramDetail from "@/components/ProgramDetail";
import { programs } from "@/data/programs";

const program = programs.find((p) => p.id === "pemetaan-rw3")!;

export default function ProgramDetailPemetaan() {
  return <ProgramDetail program={program} />;
}
