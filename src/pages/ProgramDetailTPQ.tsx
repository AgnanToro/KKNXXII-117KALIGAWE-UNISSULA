import ProgramDetail from "@/components/ProgramDetail";
import { programs } from "@/data/programs";

const program = programs.find((p) => p.id === "tpq")!;

export default function ProgramDetailTPQ() {
  return <ProgramDetail program={program} />;
}
