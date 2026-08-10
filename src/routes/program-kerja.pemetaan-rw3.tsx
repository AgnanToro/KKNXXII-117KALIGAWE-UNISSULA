import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import ProgramDetailPemetaan from "@/pages/ProgramDetailPemetaan";

export const Route = createFileRoute("/program-kerja/pemetaan-rw3")({
  head: () => ({
    meta: [
      { title: "Pemetaan Wilayah RW 3 — KKN Kelompok 117 Kaligawe" },
      {
        name: "description",
        content:
          "Pembuatan peta wilayah RW 3 Kelurahan Kaligawe sebagai media informasi dan dokumentasi wilayah masyarakat.",
      },
      { property: "og:title", content: "Pemetaan Wilayah RW 3 — KKN Kelompok 117 Kaligawe" },
      {
        property: "og:description",
        content: "Proses survey, pendataan, dan penyusunan peta wilayah RW 3 Kaligawe.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <ProgramDetailPemetaan />
    </MainLayout>
  ),
});
