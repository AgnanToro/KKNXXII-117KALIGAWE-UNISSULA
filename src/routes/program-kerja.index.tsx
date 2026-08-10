import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import ProgramKerja from "@/pages/ProgramKerja";

export const Route = createFileRoute("/program-kerja/")({
  head: () => ({
    meta: [
      { title: "Program Kerja — KKN Kelompok 117 Kaligawe" },
      {
        name: "description",
        content:
          "Empat program utama Kelompok 117: Pendidikan TPQ, Pemetaan Wilayah RW 3, Penanaman TOGA, dan Penyuluhan Stunting.",
      },
      { property: "og:title", content: "Program Kerja — KKN Kelompok 117 Kaligawe" },
      {
        property: "og:description",
        content: "Empat langkah kontribusi nyata bagi masyarakat Kaligawe.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <ProgramKerja />
    </MainLayout>
  ),
});
