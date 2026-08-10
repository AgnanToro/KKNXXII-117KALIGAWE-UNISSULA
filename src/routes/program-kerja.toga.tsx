import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import ProgramDetailTOGA from "@/pages/ProgramDetailTOGA";

export const Route = createFileRoute("/program-kerja/toga")({
  head: () => ({
    meta: [
      { title: "Penanaman TOGA — KKN Kelompok 117 Kaligawe" },
      {
        name: "description",
        content:
          "Pemanfaatan taman TOGA di setiap RT melalui penanaman tanaman obat keluarga: mint dan kumis kucing.",
      },
      { property: "og:title", content: "Penanaman TOGA — KKN Kelompok 117 Kaligawe" },
      {
        property: "og:description",
        content: "Program lingkungan: penghijauan dan edukasi tanaman obat keluarga di Kaligawe.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <ProgramDetailTOGA />
    </MainLayout>
  ),
});
