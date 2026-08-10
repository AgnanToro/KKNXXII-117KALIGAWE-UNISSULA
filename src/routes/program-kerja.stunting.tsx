import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import ProgramDetailStunting from "@/pages/ProgramDetailStunting";

export const Route = createFileRoute("/program-kerja/stunting")({
  head: () => ({
    meta: [
      { title: "Penyuluhan Stunting — KKN Kelompok 117 Kaligawe" },
      {
        name: "description",
        content:
          "Penyuluhan bersama ibu-ibu PKK mengenai pencegahan stunting dan pentingnya pemenuhan gizi di Kelurahan Kaligawe.",
      },
      { property: "og:title", content: "Penyuluhan Stunting — KKN Kelompok 117 Kaligawe" },
      {
        property: "og:description",
        content: "Program kesehatan: edukasi gizi dan pencegahan stunting bersama ibu-ibu PKK.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <ProgramDetailStunting />
    </MainLayout>
  ),
});
