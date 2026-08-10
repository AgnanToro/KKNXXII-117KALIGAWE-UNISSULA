import ProgramDetail from "@/components/ProgramDetail";
import { programs } from "@/data/programs";

const program = programs.find((p) => p.id === "toga")!;

export default function ProgramDetailTOGA() {
  return <ProgramDetail program={program} />;
}
