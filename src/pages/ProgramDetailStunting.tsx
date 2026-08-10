import ProgramDetail from "@/components/ProgramDetail";
import { programs } from "@/data/programs";

const program = programs.find((p) => p.id === "stunting")!;

export default function ProgramDetailStunting() {
  return <ProgramDetail program={program} />;
}
