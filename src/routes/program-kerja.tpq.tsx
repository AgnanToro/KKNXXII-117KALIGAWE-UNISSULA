import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import ProgramDetailTPQ from "@/pages/ProgramDetailTPQ";

export const Route = createFileRoute("/program-kerja/tpq")({
  head: () => ({
    meta: [
      { title: "Pendidikan TPQ — Program KKN Kelompok 117 Kaligawe" },
      {
        name: "description",
        content:
          "Pendampingan pembelajaran Al-Qur'an bersama anak-anak TPQ di wilayah Kaligawe oleh KKN Kelompok 117.",
      },
      { property: "og:title", content: "Pendidikan TPQ — KKN Kelompok 117 Kaligawe" },
      {
        property: "og:description",
        content: "Program pendidikan: mendampingi anak-anak TPQ di Kelurahan Kaligawe.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <ProgramDetailTPQ />
    </MainLayout>
  ),
});
